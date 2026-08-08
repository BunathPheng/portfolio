"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck } from "lucide-react"

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || "0x4AAAAAACZIH5_69MTJqFPN"

const GATE_STORAGE_KEY = "bunath_cf_human_verified"

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
}

type CloudflareGateProps = {
  children: React.ReactNode
}

export default function CloudflareGate({ children }: CloudflareGateProps) {
  const [verified, setVerified] = useState(false)
  const [checking, setChecking] = useState(true)
  const [widgetFailed, setWidgetFailed] = useState(false)
  const [scriptReady, setScriptReady] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(GATE_STORAGE_KEY) === "1") {
        setVerified(true)
      }
    } catch {
      // ignore storage errors
    }
    setChecking(false)
  }, [])

  useEffect(() => {
    if (checking || verified) return

    const win = window as { turnstile?: TurnstileApi }
    if (win.turnstile) {
      setScriptReady(true)
      return
    }

    const src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    if (existing) {
      existing.addEventListener("load", () => setScriptReady(true), { once: true })
      existing.addEventListener("error", () => setWidgetFailed(true), { once: true })
      return
    }

    const script = document.createElement("script")
    script.src = src
    script.async = true
    script.defer = true
    script.onload = () => setScriptReady(true)
    script.onerror = () => setWidgetFailed(true)
    document.body.appendChild(script)
  }, [checking, verified])

  useEffect(() => {
    if (!scriptReady || verified || widgetFailed || !widgetRef.current || widgetIdRef.current != null) {
      return
    }

    const win = window as { turnstile?: TurnstileApi }
    if (!win.turnstile) {
      setWidgetFailed(true)
      return
    }

    try {
      widgetIdRef.current = win.turnstile.render(widgetRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "auto",
        callback: () => {
          try {
            sessionStorage.setItem(GATE_STORAGE_KEY, "1")
          } catch {
            // ignore
          }
          setVerified(true)
        },
        "expired-callback": () => setVerified(false),
        "error-callback": () => setWidgetFailed(true),
      })
    } catch {
      setWidgetFailed(true)
    }
  }, [scriptReady, verified, widgetFailed])

  if (checking) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-background">
        <div className="h-8 w-8 animate-pulse rounded-full bg-primary/30" />
      </div>
    )
  }

  if (verified) return <>{children}</>

  return (
    <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl" />
      </div>

      <div className="glass-panel-elevated w-full max-w-md p-6 text-center sm:p-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Human verification
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Please complete the Cloudflare check to enter Pheng Bunath&apos;s portfolio.
        </p>

        <div className="mt-6 flex min-h-[65px] justify-center overflow-x-auto">
          <div ref={widgetRef} />
        </div>

        {widgetFailed && (
          <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-3 text-left text-sm text-amber-800 dark:text-amber-200">
            <p className="font-medium">Turnstile couldn&apos;t load for this domain.</p>
            <p className="mt-1 opacity-90">
              In Cloudflare → Turnstile → Hostname Management, add <strong>bunath.me</strong>, then
              refresh.
            </p>
            <button
              type="button"
              className="btn-secondary btn-block mt-3"
              onClick={() => {
                try {
                  sessionStorage.setItem(GATE_STORAGE_KEY, "1")
                } catch {
                  // ignore
                }
                setVerified(true)
              }}
            >
              Continue anyway
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
