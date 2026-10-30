import config from '@payload-config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import {
  APP_SESSION_COOKIE,
  getAppUserFromToken,
  OTP_SESSION_COOKIE,
  secureCookie,
} from '@/lib/app-auth'

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>
  const code = String(body.code || '').trim()
  const pendingToken = request.headers
    .get('cookie')
    ?.split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${OTP_SESSION_COOKIE}=`))
    ?.slice(OTP_SESSION_COOKIE.length + 1)

  const user = await getAppUserFromToken(pendingToken)
  if (!user) return Response.json({ error: 'Your verification session expired.' }, { status: 401 })

  const payload = await getPayload({ config })
  const logs = await payload.find({
    collection: 'user-security-logs',
    where: {
      and: [
        { user: { equals: user.id } },
        { otpCode: { equals: code } },
        { isVerified: { equals: false } },
        { otpExpiresAt: { greater_than: new Date().toISOString() } },
      ],
    },
    limit: 1,
    sort: '-createdAt',
    overrideAccess: true,
  })

  const log = logs.docs[0]
  if (!log) return Response.json({ error: 'The code is invalid or expired.' }, { status: 400 })

  await payload.update({
    collection: 'user-security-logs',
    id: log.id,
    data: { isVerified: true },
    overrideAccess: true,
  })

  const response = NextResponse.json({
    user: { email: user.email, fullName: user.fullName, role: user.role },
  })
  response.cookies.set(APP_SESSION_COOKIE, pendingToken || '', secureCookie)
  response.cookies.delete(OTP_SESSION_COOKIE)
  return response
}
