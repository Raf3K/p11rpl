import config from '@payload-config'
import { getPayload } from 'payload'

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>
  const token = String(body.token || '')
  const password = String(body.password || '')

  if (!token || password.length < 8) {
    return Response.json({ error: 'The token and an 8-character password are required.' }, { status: 400 })
  }

  try {
    const payload = await getPayload({ config })
    await payload.resetPassword({
      collection: 'users',
      data: { token, password },
      overrideAccess: true,
    })
    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'The reset link is invalid or expired.' }, { status: 400 })
  }
}
