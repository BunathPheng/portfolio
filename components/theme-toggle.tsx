"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Check, Laptop, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  className?: string
}

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop },
] as const

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"
  const activeTheme = theme ?? "system"

  if (!mounted) {
    return (
      <button type="button" aria-label="Toggle theme" className={cn("theme-toggle", className)} />
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Change theme"
          className={cn("theme-toggle text-muted-foreground", className)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-panel-elevated min-w-[140px] border-border/60 p-1">
        {themes.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className="cursor-pointer rounded-lg px-3 py-2 text-sm focus:bg-primary/10 focus:text-primary"
          >
            <Icon className="mr-2 h-4 w-4" />
            {label}
            {activeTheme === value && <Check className="ml-auto h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
