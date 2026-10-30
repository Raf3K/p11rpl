import { NextResponse } from 'next/server'
import { APP_SESSION_COOKIE, OTP_SESSION_COOKIE } from '@/lib/app-auth'

export async function POST() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete(APP_SESSION_COOKIE)
  response.cookies.delete(OTP_SESSION_COOKIE)
  return response
}
