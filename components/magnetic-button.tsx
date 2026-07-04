"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type MagneticButtonProps = {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  as?: "button" | "a"
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  as = "button",
  href,
  target,
  rel,
  disabled,
  type = "button",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  }[variant]

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15
    setPosition({ x, y })
  }

  const handleLeave = () => setPosition({ x: 0, y: 0 })

  const sharedClass = cn(variantClass, className)

  if (as === "a" && href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
        className={sharedClass}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
      className={sharedClass}
    >
      {children}
    </motion.button>
  )
}
