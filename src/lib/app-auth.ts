import config from '@payload-config'
import { cookies } from 'next/headers'
import { getPayload } from 'payload'

export const APP_SESSION_COOKIE = 'app-session'
export const OTP_SESSION_COOKIE = 'otp-pending-session'

export type AppRole = 'customer' | 'standard-admin' | 'super-admin'

export type AppUser = {
  id: string
  collection: 'users'
  createdAt: string
  email: string
  fullName: string
  phoneNumber?: null | string
  role: AppRole
  updatedAt: string
}

export async function getAppUserFromToken(token?: string | null): Promise<AppUser | null> {
  if (!token) return null
  const payload = await getPayload({ config })
  const { user } = await payload.auth({
    headers: new Headers({ Authorization: `JWT ${token}` }),
  })
  if (!user || user.collection !== 'users') return null
  return user as AppUser
}

export async function getCurrentAppUser(): Promise<AppUser | null> {
  const token = (await cookies()).get(APP_SESSION_COOKIE)?.value
  return getAppUserFromToken(token)
}

export const secureCookie = {
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 7,
  path: '/',
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
}
