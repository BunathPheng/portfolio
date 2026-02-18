"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null
    timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (timer) clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Always hide loading after 4s so the portfolio shows even if progress gets stuck
    const fallback = setTimeout(() => setLoading(false), 4000)
    return () => {
      if (timer) clearInterval(timer)
      clearTimeout(fallback)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0b1220] via-[#0f1729] to-[#0b1220]"
        >
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-32 h-32 border-4 border-[#22d3ee]/25 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-transparent border-t-[#22d3ee] border-l-[#7ce94f] rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{progress}%</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] bg-clip-text text-transparent">
                DevOps Pipeline
              </h2>
              <p className="text-gray-400">Initializing services...</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
