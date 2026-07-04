"use client"

import { motion, type Variants } from "framer-motion"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

type FadeInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FadeIn({ children, className, delay = 0, duration = 0.5 }: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type SectionHeaderProps = {
  label: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({ label, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <FadeIn className={`section-header-spacing space-y-3 sm:space-y-4 ${align === "center" ? "text-center" : ""}`}>
      <p className="section-label">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {label}
      </p>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p
          className={`max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  )
}
