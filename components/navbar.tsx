"use client"

import { useEffect, useState } from "react"
import {
  Briefcase,
  FolderKanban,
  GraduationCap,
  Home,
  Layers,
  Mail,
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
  { href: "#contact", id: "contact", label: "Contact", icon: Mail },
] as const

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "education", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= window.innerHeight * 0.42 && rect.bottom >= window.innerHeight * 0.28
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mobileActive =
    activeSection === "experience" || activeSection === "education"
      ? "projects"
      : activeSection

  return (
    <header className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:px-4">
      <div className="mx-auto w-full max-w-lg pointer-events-auto md:max-w-3xl lg:max-w-4xl">
        {/* Mobile / tablet icon dock */}
        <nav
          className="glass-panel-elevated flex h-[4.25rem] items-stretch justify-between rounded-2xl px-1 shadow-glass sm:h-[4.5rem] sm:px-2 md:hidden"
          aria-label="Mobile navigation"
        >
          {mobileTabs.map(({ href, id, label, icon: Icon }) => {
            const isActive = mobileActive === id
            return (
              <a
                key={id}
                href={href}
                className={cn(
                  "relative flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 text-[10px] font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-pill"
                    className="absolute inset-1 rounded-xl bg-primary/10"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <Icon className="relative h-[18px] w-[18px] sm:h-5 sm:w-5" />
                <span className="relative truncate">{label}</span>
              </a>
            )
          })}
          <div className="flex items-center px-1">
            <ThemeToggle className="!h-9 !w-9" />
          </div>
        </nav>

        {/* Desktop dock */}
        <nav
          className="glass-panel-elevated hidden h-16 items-center justify-between gap-2 rounded-2xl px-3 shadow-glass md:flex"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
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
                    "relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-xs font-medium transition-colors lg:px-3 lg:text-sm",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktop-nav-pill"
                      className="absolute inset-0 rounded-xl bg-primary/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="relative h-4 w-4 shrink-0" />
                  <span className="relative hidden lg:inline">{label}</span>
                </a>
              )
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="btn-primary !w-auto !px-4 !py-2 text-xs lg:text-sm">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
