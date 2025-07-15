"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Download, Facebook, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, type Variants } from "framer-motion" // Import Variants
import Image from "next/image"
import profile from "../portfolio/src/image/Nath.jpg";


export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Software Engineer", "Web Developer", "Problem Solver", "Full Stack Developer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleDownloadCV = () => {
    const pdfUrl = "https://drive.google.com/file/d/1x7fqFM2auMSS8N_KpNKfw_-bYdfVGHRf/view"
    window.open(pdfUrl, "_blank")
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
              className="text-lg text-purple-400 font-medium flex items-center justify-center lg:justify-start gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Hello, I'm
            </motion.p>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Pheng{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
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
                className="text-yellow-400 font-semibold"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            A passionate Full-Stack Developer with expertise in modern web technologies. I create beautiful, functional,
            and user-centered digital experiences that make a difference.
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
                className={`p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group ${color}`}
              >
                <Icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 hover:from-purple-700 hover:via-pink-700 hover:to-yellow-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 rounded-full blur-3xl opacity-30"
            />

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl animate-pulse" />
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
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
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
