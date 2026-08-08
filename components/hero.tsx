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
      className="relative flex min-h-[100svh] items-center pt-8 pb-[7.5rem] sm:pt-12 sm:pb-32 lg:min-h-[100dvh]"
    >
      <div className="section-container w-full">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-2 space-y-5 text-center sm:space-y-7 lg:order-1 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur-sm sm:px-4 sm:text-sm"
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
              <p className="text-sm font-medium text-muted-foreground sm:text-lg md:text-xl">
                Hi, I&apos;m{" "}
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
                Pheng Bunath
              </h1>

              <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:mx-0">
                I build reliable cloud infrastructure, automate delivery pipelines, and ship
                production-grade applications. From Kubernetes clusters to polished React interfaces
                — I help teams move faster with confidence.
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
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 via-indigo-400/10 to-transparent blur-2xl sm:-inset-4" />
              <div className="relative glass-frame">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={profile}
                    alt="Pheng Bunath — DevOps Engineer & Full-Stack Developer"
                    fill
                    className="profile-image"
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 448px"
                  />
                  <div className="profile-image-overlay" aria-hidden />
                </div>
                <div className="absolute bottom-3 left-3 right-3 glass-panel !rounded-xl px-3 py-2.5 sm:bottom-5 sm:left-5 sm:right-5 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-9 sm:w-9">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-muted-foreground sm:text-xs">Specializing in</p>
                      <p className="truncate text-xs font-semibold text-foreground sm:text-sm">
                        CI/CD · Kubernetes · Next.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
