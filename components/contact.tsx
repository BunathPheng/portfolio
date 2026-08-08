"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader, FadeIn } from "@/components/section-header"
import MagneticButton from "@/components/magnetic-button"

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || "0x4AAAAAACZIH5_69MTJqFPN"

type TurnstileApi = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string
      theme?: "light" | "dark" | "auto"
      callback: (token: string) => void
      "expired-callback": () => void
      "error-callback": () => void
    }
  ) => string
  reset: (widgetId: string) => void
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")
  const [error, setError] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileState, setTurnstileState] = useState<"loading" | "ready" | "failed">("loading")
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const win = window as { turnstile?: TurnstileApi }
    const markReady = () => setTurnstileState((prev) => (prev === "failed" ? prev : "ready"))

    if (win.turnstile) {
      markReady()
      return
    }

    const src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)

    if (existing) {
      existing.addEventListener("load", markReady, { once: true })
      existing.addEventListener("error", () => setTurnstileState("failed"), { once: true })
      return
    }

    const script = document.createElement("script")
    script.src = src
    script.async = true
    script.defer = true
    script.onload = markReady
    script.onerror = () => setTurnstileState("failed")
    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    if (turnstileState !== "ready" || !turnstileRef.current || widgetIdRef.current != null) return

    const win = window as { turnstile?: TurnstileApi }
    if (!win.turnstile) {
      setTurnstileState("failed")
      return
    }

    try {
      widgetIdRef.current = win.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "auto",
        callback: (token: string) => {
          setTurnstileToken(token)
          setTurnstileState("ready")
        },
        "expired-callback": () => setTurnstileToken(null),
        "error-callback": () => {
          setTurnstileToken(null)
          setTurnstileState("failed")
        },
      })
    } catch {
      setTurnstileState("failed")
    }
  }, [turnstileState])

  const validate = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) return "Please enter your name."
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email.trim())) return "Please enter a valid email."
    if (!formData.subject.trim() || formData.subject.trim().length < 3)
      return "Subject should be at least 3 characters."
    if (!formData.message.trim() || formData.message.trim().length < 10)
      return "Message should be at least 10 characters."
    if (turnstileState === "failed")
      return "Cloudflare verification is not set up for this domain yet. Add bunath.me in Turnstile Hostname Management."
    if (turnstileState !== "ready" || !turnstileToken)
      return "Please complete the Cloudflare verification check."
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const validationError = validate()
    if (validationError) {
      setStatus("error")
      setError(validationError)
      return
    }

    setStatus("loading")

    try {
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrbnvzrz"

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          "cf-turnstile-response": turnstileToken,
        }),
      })

      if (!res.ok) throw new Error("Failed to send")

      setStatus("sent")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTurnstileToken(null)
      if (widgetIdRef.current != null) {
        const w = window as { turnstile?: TurnstileApi }
        w.turnstile?.reset(widgetIdRef.current)
      }
    } catch {
      setStatus("error")
      setError("Unable to send message. Please try again or email bunath45@gmail.com.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section-spacing !pb-8 sm:!pb-12">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <FadeIn className="space-y-6 lg:col-span-2">
            <div className="glass-panel !p-5 sm:!p-7">
              <h3 className="mb-6 text-lg font-semibold text-foreground">Get in touch</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "bunath45@gmail.com",
                    href: "mailto:bunath45@gmail.com",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "Phnom Penh, Cambodia",
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3 border-t border-border/60 pt-6">
                {[
                  { icon: Github, href: "https://github.com/BunathPheng", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/bunath-pheng-71a41b318", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="glass-icon-btn h-10 w-10 text-muted-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="glass-panel-elevated !p-5 sm:!p-8">
              <form noValidate onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                    required
                  />
                </div>

                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                  required
                />

                <Textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-input resize-none text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                  required
                />

                <div ref={turnstileRef} className="min-h-[65px] overflow-x-auto" />

                {turnstileState === "failed" && (
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-3 text-sm text-amber-800 dark:text-amber-200">
                    <p className="font-medium">Cloudflare Turnstile is blocked for this domain.</p>
                    <p className="mt-1 text-amber-700/90 dark:text-amber-200/90">
                      In Cloudflare Dashboard → Turnstile → your widget → Hostname Management, add{" "}
                      <strong>bunath.me</strong> (and www.bunath.me if needed), then refresh this page.
                    </p>
                  </div>
                )}

                <MagneticButton
                  type="submit"
                  variant="primary"
                  disabled={status === "loading" || turnstileState !== "ready" || !turnstileToken}
                  className="w-full disabled:cursor-not-allowed disabled:opacity-50 sm:!w-full"
                >
                  <Send className="h-4 w-4" />
                  {status === "loading" ? "Sending..." : "Send Message"}
                </MagneticButton>

                {status === "sent" && (
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Message sent! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {error || "Something went wrong. Please try again."}
                  </p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
