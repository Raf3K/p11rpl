import 'server-only'

const DEVELOPMENT_OTP = '111111'

export function currentOtpCode() {
  return process.env.OTP_STATIC_CODE || DEVELOPMENT_OTP
}

async function deliverMessage(destination: string, message: string) {
  const endpoint = process.env.OTP_DELIVERY_WEBHOOK_URL
  const apiKey = process.env.OTP_DELIVERY_API_KEY

  if (!endpoint || !apiKey) {
    return { delivered: false }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      destination,
      message,
    }),
  })

  if (!response.ok) throw new Error('OTP provider rejected the delivery request.')
  return { delivered: true }
}

export function deliverOtp(destination: string, code: string) {
  return deliverMessage(
    destination,
    `Your simplify.pc verification code is ${code}. It expires in 10 minutes.`,
  )
}

export function deliverPasswordReset(destination: string, token: string) {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const resetURL = `${siteURL}/login?token=${encodeURIComponent(token)}`
  return deliverMessage(
    destination,
    `Reset your simplify.pc password using this secure link: ${resetURL}`,
  )
}
