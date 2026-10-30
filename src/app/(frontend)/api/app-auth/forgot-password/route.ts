import config from '@payload-config'
import { getPayload } from 'payload'
import { deliverPasswordReset } from '@/lib/otp-provider'

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>
  const email = String(body.email || '').trim().toLowerCase()

  if (email) {
    const payload = await getPayload({ config })
    const token = await payload.forgotPassword({
      collection: 'users',
      data: { email },
      disableEmail: true,
      overrideAccess: true,
    })
    if (token) {
      const delivery = await deliverPasswordReset(email, token)
      return Response.json({
        message: delivery.delivered
          ? 'If that account exists, password reset instructions have been sent.'
          : 'Development mode: continue below to choose a new password.',
        developmentResetToken: delivery.delivered ? undefined : token,
      })
    }
  }

  return Response.json({
    message: 'If that account exists, password reset instructions have been sent.',
  })
}
