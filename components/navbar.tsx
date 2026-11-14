"use client"

import { useEffect, useState } from "react"
import {
  Briefcase,
  FolderKanban,
  GraduationCap,
  Home,
  Layers,
  Mail,
  Map,
  User,
} from "lucide-react"
import { motion } from "framer-motion"
import ThemeToggle from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const mobileTabs = [
  { href: "#hero", id: "hero", label: "Home", icon: Home },
  { href: "#about", id: "about", label: "About", icon: User },
  { href: "#skills", id: "skills", label: "Skills", icon: Layers },
  { href: "#projects", id: "projects", label: "Work", icon: FolderKanban },
  { href: "#contact", id: "contact", label: "Contact", icon: Mail },
] as const

const desktopItems = [
  { href: "#about", id: "about", label: "About", icon: User },
  { href: "#skills", id: "skills", label: "Skills", icon: Layers },
  { href: "#projects", id: "projects", label: "Projects", icon: FolderKanban },
  { href: "#experience", id: "experience", label: "Experience", icon: Briefcase },
  { href: "#education", id: "education", label: "Education", icon: GraduationCap },
  { href: "#roadmap", id: "roadmap", label: "Roadmap", icon: Map },
  { href: "#contact", id: "contact", label: "Contact", icon: Mail },
] as const

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "skills",
      "projects",
      "experience",
      "education",
      "roadmap",
      "ui-playground",
      "contact",
    ]
    let frame = 0

    const handleScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.38
        const sections = sectionIds
          .map((id) => {
            const element = document.getElementById(id)
            if (!element) return null
            const rect = element.getBoundingClientRect()
            return { id, distance: Math.abs(rect.top - marker), top: rect.top, bottom: rect.bottom }
          })
          .filter((section): section is { id: string; distance: number; top: number; bottom: number } => section !== null)

        const current =
          sections.find((section) => section.top <= marker && section.bottom > marker) ??
          sections.filter((section) => section.top <= marker).at(-1) ??
          sections[0]

        if (current) setActiveSection(current.id)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    handleScroll()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const mobileActive =
    activeSection === "experience" ||
    activeSection === "education" ||
    activeSection === "roadmap" ||
    activeSection === "ui-playground"
      ? "projects"
      : activeSection

  return (
    <header className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:px-4">
      <div className="pointer-events-auto mx-auto w-full max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        {/* Mobile / tablet icon dock */}
        <nav
          className="glass-panel-elevated isolate flex h-[4.25rem] items-stretch justify-between rounded-2xl px-1 shadow-glass sm:h-[4.5rem] sm:px-2 md:hidden"
          aria-label="Mobile navigation"
        >
          {mobileTabs.map(({ href, id, label, icon: Icon }) => {
            const isActive = mobileActive === id
            return (
              <a
                key={id}
                href={href}
                className={cn(
                  "relative isolate flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 text-[10px] font-medium leading-none antialiased transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-pill"
                    aria-hidden
                    className="pointer-events-none absolute inset-1 z-0 rounded-xl bg-primary/10"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <Icon className="relative z-10 h-[18px] w-[18px] sm:h-5 sm:w-5" />
                <span className="relative z-10 truncate">{label}</span>
              </a>
            )
          })}
          <div className="flex items-center px-1">
            <ThemeToggle className="!h-9 !w-9" />
          </div>
        </nav>

        {/* Desktop dock */}
        <nav
          className="glass-panel-elevated isolate hidden h-16 items-center justify-between gap-2 rounded-2xl px-3 shadow-glass md:flex"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold leading-none antialiased text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            Pheng Bunath
          </a>

          <div className="flex min-w-0 flex-1 items-center justify-center gap-0.5 lg:gap-1">
            {desktopItems.map(({ href, id, label, icon: Icon }) => {
              const isActive = activeSection === id
              return (
                <a
                  key={id}
                  href={href}
                  className={cn(
                    "relative isolate flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-2 text-xs font-medium leading-none antialiased transition-colors lg:px-3 lg:text-sm",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktop-nav-pill"
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-0 rounded-xl bg-primary/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10 h-4 w-4 shrink-0" />
                  <span className="relative z-10 hidden whitespace-nowrap xl:inline">{label}</span>
                </a>
              )
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="btn-primary btn-sm">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
