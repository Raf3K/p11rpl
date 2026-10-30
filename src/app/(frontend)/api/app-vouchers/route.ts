import config from '@payload-config'
import { getPayload } from 'payload'
import { getCurrentAppUser } from '@/lib/app-auth'

const isStaff = (role?: string) => role === 'standard-admin' || role === 'super-admin'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')?.trim().toUpperCase()
  const subtotal = Number(url.searchParams.get('subtotal') || 0)
  const payload = await getPayload({ config })

  if (code) {
    const result = await payload.find({
      collection: 'vouchers',
      where: {
        and: [
          { code: { equals: code } },
          { isActive: { equals: true } },
          { expiryDate: { greater_than_equal: new Date().toISOString() } },
        ],
      },
      limit: 1,
      overrideAccess: true,
    })
    const voucher = result.docs[0]
    if (!voucher || subtotal < voucher.minPurchase) {
      return Response.json({ error: 'Voucher is invalid or the minimum purchase is not met.' }, { status: 404 })
    }
    const discount =
      voucher.discountType === 'percentage'
        ? subtotal * (voucher.discountValue / 100)
        : voucher.discountValue
    return Response.json({
      voucher: {
        id: voucher.id,
        code: voucher.code,
        discountType: voucher.discountType,
        discountValue: voucher.discountValue,
      },
      discount: Math.min(subtotal, discount),
    })
  }

  const user = await getCurrentAppUser()
  if (!user || !isStaff(user.role)) return Response.json({ error: 'Forbidden' }, { status: 403 })
  const result = await payload.find({
    collection: 'vouchers',
    sort: '-createdAt',
    limit: 100,
    user,
    overrideAccess: false,
  })
  return Response.json({ vouchers: result.docs })
}

export async function POST(request: Request) {
  const user = await getCurrentAppUser()
  if (!user || !isStaff(user.role)) return Response.json({ error: 'Forbidden' }, { status: 403 })
  const body = (await request.json()) as Record<string, unknown>
  const payload = await getPayload({ config })
  const voucher = await payload.create({
    collection: 'vouchers',
    data: {
      code: String(body.code || '').trim().toUpperCase(),
      discountType: body.discountType === 'fixed' ? 'fixed' : 'percentage',
      discountValue: Number(body.discountValue),
      minPurchase: Number(body.minPurchase || 0),
      expiryDate: String(body.expiryDate),
      isActive: body.isActive !== false,
    },
    user,
    overrideAccess: false,
  })
  return Response.json({ voucher }, { status: 201 })
}

export async function PATCH(request: Request) {
  const user = await getCurrentAppUser()
  if (!user || !isStaff(user.role)) return Response.json({ error: 'Forbidden' }, { status: 403 })
  const body = (await request.json()) as Record<string, unknown>
  const payload = await getPayload({ config })
  const voucher = await payload.update({
    collection: 'vouchers',
    id: String(body.id),
    data: {
      code: String(body.code || '').trim().toUpperCase(),
      discountType: body.discountType === 'fixed' ? 'fixed' : 'percentage',
      discountValue: Number(body.discountValue),
      minPurchase: Number(body.minPurchase || 0),
      expiryDate: String(body.expiryDate),
      isActive: body.isActive !== false,
    },
    user,
    overrideAccess: false,
  })
  return Response.json({ voucher })
}

export async function DELETE(request: Request) {
  const user = await getCurrentAppUser()
  if (!user || !isStaff(user.role)) return Response.json({ error: 'Forbidden' }, { status: 403 })
  const id = new URL(request.url).searchParams.get('id')
  if (!id) return Response.json({ error: 'Voucher ID is required.' }, { status: 400 })
  const payload = await getPayload({ config })
  await payload.delete({
    collection: 'vouchers',
    id,
    user,
    overrideAccess: false,
  })
  return Response.json({ success: true })
}
