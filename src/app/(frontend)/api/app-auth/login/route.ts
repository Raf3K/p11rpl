import config from '@payload-config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import { OTP_SESSION_COOKIE, secureCookie } from '@/lib/app-auth'
import { currentOtpCode, deliverOtp } from '@/lib/otp-provider'

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>
  const email = String(body.email || '').trim().toLowerCase()
  const password = String(body.password || '')

  try {
    const payload = await getPayload({ config })
    const result = await payload.login({
      collection: 'users',
      data: { email, password },
      overrideAccess: true,
    })

    if (!result.token || !result.user) throw new Error('Login failed')

    const otpCode = currentOtpCode()
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString()
    await payload.create({
      collection: 'user-security-logs',
      data: {
        user: result.user.id,
        otpCode,
        otpExpiresAt,
        isVerified: false,
      },
      overrideAccess: true,
    })
    const delivery = await deliverOtp(email, otpCode)

    const response = NextResponse.json({
      success: true,
      delivery: delivery.delivered ? 'sent' : 'development',
    })
    response.cookies.set(OTP_SESSION_COOKIE, result.token, {
      ...secureCookie,
      maxAge: 10 * 60,
    })
    return response
  } catch {
    return Response.json({ error: 'Invalid email or password.' }, { status: 401 })
  }
}
