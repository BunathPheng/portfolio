"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface FloatingElement {
  id: number
  size: number
  x: number
  y: number
  duration: number
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Generate elements only on the client side after component mounts
    const generatedElements: FloatingElement[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
    }))
    setElements(generatedElements)
    setMounted(true) // Mark component as mounted
  }, [])

  if (!mounted) {
    // Render nothing on the server or until mounted on client
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
