"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { navItems } from "@/lib/content"
import MagneticButton from "@/components/magnetic-button"
import ThemeToggle from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = ["hero", "about", "skills", "projects", "experience", "education", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 140 && rect.bottom >= 140
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      <div
        className={cn(
          "section-container !px-0 transition-all duration-500",
          scrolled ? "max-w-4xl" : "max-w-6xl"
        )}
      >
        <nav
          className={cn(
            "flex h-12 items-center justify-between rounded-2xl px-3 transition-all duration-500 sm:h-14 sm:px-4 lg:px-6",
            scrolled ? "glass-panel-elevated shadow-glass" : "border border-transparent bg-transparent"
          )}
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="truncate text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary sm:text-base"
          >
            <span className="sm:hidden">PB</span>
            <span className="hidden sm:inline">Pheng Bunath</span>
          </a>

          <div className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors xl:px-3.5",
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <MagneticButton as="a" href="#contact" variant="primary" className="!w-auto !px-4 !py-2 text-xs xl:!px-5 xl:text-sm">
              Contact Me
            </MagneticButton>
          </div>

          <div className="flex items-center gap-1.5 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-2xl glass-panel-elevated lg:hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      activeSection === item.href.slice(1)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center justify-between rounded-xl px-4 py-3">
                  <span className="text-sm font-medium text-muted-foreground">Appearance</span>
                  <ThemeToggle />
                </div>
                <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary mt-2 !w-full text-center">
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
