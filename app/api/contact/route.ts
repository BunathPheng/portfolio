import { NextResponse } from "next/server"
import { rateLimit } from "@/lib/rate-limit"

const FORMSPREE_ENDPOINT =
  process.env.FORMSPREE_ENDPOINT?.trim() || "https://formspree.io/f/xrbnvzrz"

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY?.trim()

type ContactBody = {
  name?: string
  email?: string
  subject?: string
  message?: string
  website?: string
  turnstileToken?: string
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown"
  return request.headers.get("x-real-ip") || "unknown"
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function verifyTurnstile(token: string, ip: string) {
  if (!TURNSTILE_SECRET) {
    // Secret not configured yet — reject in production-like environments
    if (process.env.NODE_ENV === "production") {
      return { success: false, reason: "Turnstile is not configured on the server." }
    }
    return { success: true, reason: null }
  }

  const body = new URLSearchParams()
  body.set("secret", TURNSTILE_SECRET)
  body.set("response", token)
  if (ip && ip !== "unknown") body.set("remoteip", ip)

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  })

  if (!res.ok) {
    return { success: false, reason: "Unable to verify Cloudflare challenge." }
  }

  const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] }
  if (!data.success) {
    return { success: false, reason: "Cloudflare verification failed. Please try again." }
  }

  return { success: true, reason: null }
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)
    const limited = rateLimit(`contact:${ip}`, 5, 60_000)
    if (!limited.success) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      )
    }

    const data = (await request.json()) as ContactBody

    // Honeypot — bots often fill hidden fields
    if (data.website?.trim()) {
      return NextResponse.json({ ok: true })
    }

    const name = data.name?.trim() || ""
    const email = data.email?.trim() || ""
    const subject = data.subject?.trim() || ""
    const message = data.message?.trim() || ""
    const turnstileToken = data.turnstileToken?.trim() || ""

    if (name.length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 })
    }
    if (subject.length < 3) {
      return NextResponse.json({ error: "Subject should be at least 3 characters." }, { status: 400 })
    }
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Message length is invalid." }, { status: 400 })
    }
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Please complete the Cloudflare verification check." },
        { status: 400 }
      )
    }

    const turnstile = await verifyTurnstile(turnstileToken, ip)
    if (!turnstile.success) {
      return NextResponse.json(
        { error: turnstile.reason || "Cloudflare verification failed." },
        { status: 400 }
      )
    }

    const formspreeRes = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    })

    if (!formspreeRes.ok) {
      return NextResponse.json(
        { error: "Unable to send message right now. Please email bunath45@gmail.com." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}
