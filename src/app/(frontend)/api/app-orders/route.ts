import config from '@payload-config'
import { getPayload } from 'payload'
import { getCurrentAppUser } from '@/lib/app-auth'

type CheckoutItem = { name: string; price: number; quantity: number }

export async function POST(request: Request) {
  const user = await getCurrentAppUser()
  if (!user) return Response.json({ error: 'Sign in before checking out.' }, { status: 401 })

  const body = (await request.json()) as Record<string, unknown>
  const allowedMethods = ['qris', 'gopay', 'bca', 'bri', 'alfamart', 'indomaret']
  const paymentMethod = String(body.paymentMethod)
  const items = Array.isArray(body.items) ? (body.items as CheckoutItem[]) : []
  const safeItems = items
    .filter((item) => item && item.name && Number(item.price) >= 0 && Number(item.quantity) > 0)
    .map((item) => ({
      name: String(item.name).slice(0, 160),
      price: Number(item.price),
      quantity: Math.floor(Number(item.quantity)),
    }))

  if (!allowedMethods.includes(paymentMethod) || safeItems.length === 0) {
    return Response.json({ error: 'Choose a valid payment method and cart.' }, { status: 400 })
  }

  const payload = await getPayload({ config })
  const subtotal = safeItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  let voucherId: string | undefined
  let discount = 0
  if (body.voucherId) {
    const voucher = await payload.findByID({
      collection: 'vouchers',
      id: String(body.voucherId),
      overrideAccess: true,
    })
    const isValid =
      voucher.isActive &&
      new Date(voucher.expiryDate).getTime() >= Date.now() &&
      subtotal >= voucher.minPurchase
    if (isValid) {
      voucherId = voucher.id
      discount =
        voucher.discountType === 'percentage'
          ? subtotal * (voucher.discountValue / 100)
          : voucher.discountValue
    }
  }

  const totalAmount = Math.max(0, subtotal + subtotal * 0.0825 - discount)
  const paymentExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  const orderNumber = `SPC-${Date.now().toString().slice(-8)}`
  const virtualAccountNumber =
    paymentMethod === 'qris' ? undefined : `8808${Date.now().toString().slice(-10)}`

  const order = await payload.create({
    collection: 'orders',
    data: {
      orderNumber,
      user: user.id,
      totalAmount: Number(totalAmount.toFixed(2)),
      fulfillmentType: body.fulfillmentType === 'pickup' ? 'pickup' : 'delivery',
      paymentMethod: paymentMethod as 'qris' | 'gopay' | 'bca' | 'bri' | 'alfamart' | 'indomaret',
      voucher: voucherId,
      paymentExpiresAt,
      paymentStatus: 'waiting',
      virtualAccountNumber,
      items: safeItems,
    },
    user,
    overrideAccess: false,
  })

  return Response.json({ order }, { status: 201 })
}
