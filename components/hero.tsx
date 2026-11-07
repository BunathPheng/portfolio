"use client"

import { useState, useEffect } from "react"
import { Download, Github, Linkedin, Facebook, Send, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import profile from "../portfolio/src/image/Nath.jpg"
import MagneticButton from "@/components/magnetic-button"
import { FadeIn } from "@/components/section-header"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/bunath-pheng-71a41b318", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/BunathPheng", label: "GitHub" },
  { icon: Send, href: "https://t.me/pheng_bunath", label: "Telegram" },
  { icon: Facebook, href: "https://web.facebook.com/profile.php?id=100027603155423", label: "Facebook" },
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["DevOps Engineer", "Full-Stack Developer", "Cloud Architect"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [roles.length])

  const handleDownloadCV = () => {
    const anchor = document.createElement("a")
    anchor.href = "/cv/Pheng%20Bunath.pdf"
    anchor.download = "Pheng-Bunath-CV.pdf"
    anchor.rel = "noopener"
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  return (
    <section
      id="hero"
      className="hero-section relative flex min-h-[100svh] items-center pt-8 pb-28 sm:pt-12 sm:pb-32 lg:min-h-[100dvh]"
    >
      <div className="section-container w-full">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-2 space-y-5 text-center sm:space-y-7 lg:order-1 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-status inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium sm:px-4 sm:text-sm"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="truncate">Available for opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 sm:space-y-5"
            >
              <p className="hero-kicker text-sm font-medium sm:text-lg md:text-xl">
                I am a{" "}
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="gradient-text font-semibold"
                >
                  {roles[currentRole]}
                </motion.span>
              </p>

              <h1 className="text-[2.35rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Reliable systems.
                <span className="block nature-text">Beautiful products.</span>
              </h1>

              <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:mx-0">
                I&apos;m Pheng Bunath, a DevOps engineer and full-stack developer focused on
                cloud infrastructure, delivery automation, and production-ready web experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            >
              <MagneticButton onClick={handleDownloadCV} variant="primary" block className="sm:!w-auto">
                <Download className="h-4 w-4" />
                Download CV
              </MagneticButton>
              <MagneticButton as="a" href="#projects" variant="secondary" block className="sm:!w-auto">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton as="a" href="#contact" variant="ghost" block className="sm:!w-auto">
                Contact Me
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center justify-center gap-2.5 pt-1 sm:gap-3 lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
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
            </motion.div>
          </div>

          <FadeIn
            delay={0.15}
            className="order-1 mx-auto w-full max-w-[300px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-sm lg:order-2 lg:mx-0 lg:max-w-md"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 4, 0, -4, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 via-indigo-400/10 to-transparent blur-2xl sm:-inset-4"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="hero-photo-frame relative glass-frame"
              >
                <div className="hero-photo-inner relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={profile}
                    alt="Pheng Bunath — DevOps Engineer & Full-Stack Developer"
                    fill
                    className="hero-profile-image"
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 448px"
                  />
                  <div className="profile-image-overlay" aria-hidden />
                </div>
                <div className="hero-photo-caption absolute -bottom-5 left-5 right-5 !rounded-2xl px-3 py-2.5 sm:left-8 sm:right-8 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-9 sm:w-9">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-muted-foreground sm:text-xs">Currently building with</p>
                      <p className="truncate text-xs font-semibold text-foreground sm:text-sm">
                        Docker · Kubernetes · Next.js
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hero-photo-badge absolute -right-3 top-8 hidden rounded-xl border border-emerald-400/20 bg-background/85 px-3 py-2 font-mono text-[10px] text-emerald-400 shadow-lg backdrop-blur-xl sm:block">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_currentColor]" />
                  systems.online
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="hero-scroll absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/70 sm:flex"
      >
        <span>Scroll to explore</span>
        <span className="h-8 w-px bg-gradient-to-b from-primary/70 to-transparent" />
      </motion.a>
    </section>
  )
}
