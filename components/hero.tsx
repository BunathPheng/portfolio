"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Download, Facebook, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, type Variants } from "framer-motion" // Import Variants
import Image from "next/image"
import profile from "../portfolio/src/image/Nath.jpg";


export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["DevOps Engineer", "Problem Solver", "Full-Stack Developer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleDownloadCV = () => {
    const pdfUrl = "/cv/Pheng%20Bunath.pdf"
    const anchor = document.createElement("a")
    anchor.href = pdfUrl
    anchor.download = "Pheng-Bunath-CV.pdf"
    anchor.rel = "noopener"
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  const containerVariants: Variants = {
    // Explicitly type containerVariants
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    // Explicitly type itemVariants
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-8 text-center lg:text-left">
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-[#22d3ee] font-medium flex items-center justify-center lg:justify-start gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Hello, I'm
            </motion.p>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Pheng{" "}
              <span className="gradient-text">
                Bunath
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-2xl lg:text-3xl text-gray-300">
              And I'm a{" "}
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-[#22d3ee] font-semibold"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            A passionate DevOps Engineer and Full-Stack Developer focused on cloud, CI/CD, and reliable delivery. I build
            pipelines, ship resilient services, and create user-centered experiences that make a difference.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start space-x-6">
            {[
              {
                icon: Facebook,
                href: "https://web.facebook.com/profile.php?id=100027603155423",
                label: "Facebook",
                color: "hover:bg-blue-600",
              },
              { icon: Send, href: "https://t.me/pheng_bunath", label: "Telegram", color: "hover:bg-blue-500" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/bunath-pheng-71a41b318",
                label: "LinkedIn",
                color: "hover:bg-blue-700",
              },
              { icon: Github, href: "https://github.com/BunathPheng", label: "GitHub", color: "hover:bg-gray-700" },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 glass-subtle rounded-full hover:glass transition-all duration-300 group ${color}`}
              >
                <Icon className="w-6 h-6 text-[#22d3ee] group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-[#22d3ee] via-[#3b82f6] to-[#7ce94f] hover:from-[#38bdf8] hover:via-[#60a5fa] hover:to-[#9ef27a] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#22d3ee]/25 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#22d3ee] via-[#7ce94f] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </span>
            </Button>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm lg:max-w-none">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#22d3ee] via-[#3b82f6] to-[#7ce94f] rounded-full blur-3xl opacity-30"
            />

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative glass rounded-3xl p-8 hover:border-[#22d3ee]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/10 to-[#7ce94f]/10 rounded-3xl animate-pulse" />
              <div className="relative w-full h-96 lg:h-[500px]">
                {" "}
                {/* Responsive height */}
                <Image
                  src={profile}
                  alt="Pheng Bunath"
                  fill
                  className="rounded-2xl object-cover relative z-10"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg glass"
              >
                Available for work
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
