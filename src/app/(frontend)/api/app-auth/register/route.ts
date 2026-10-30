import config from '@payload-config'
import { getPayload } from 'payload'

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>
  const email = String(body.email || '').trim().toLowerCase()
  const password = String(body.password || '')
  const fullName = String(body.fullName || '').trim()
  const phoneNumber = String(body.phoneNumber || '').trim()

  if (!email || password.length < 8 || !fullName) {
    return Response.json(
      { error: 'Enter a valid email, full name, and password of at least 8 characters.' },
      { status: 400 },
    )
  }

  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'users',
      data: { email, password, fullName, phoneNumber, role: 'customer' },
      overrideAccess: true,
    })
    return Response.json({ success: true })
  } catch {
    return Response.json(
      { error: 'An account with that email may already exist.' },
      { status: 409 },
    )
  }
}
