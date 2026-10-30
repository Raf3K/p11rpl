import { getCurrentAppUser } from '@/lib/app-auth'

export async function GET() {
  const user = await getCurrentAppUser()
  if (!user) return Response.json({ user: null }, { status: 401 })
  return Response.json({
    user: {
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    },
  })
}
