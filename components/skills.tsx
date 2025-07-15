"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import  React  from "../portfolio/src/image/React.png"
import  JavaScript  from "../portfolio/src/image/Js.png"
import  HTML  from "../portfolio/src/image/Html.png"
import  CSS  from "../portfolio/src/image/Css.png"
import  Tailwindcss  from "../portfolio/src/image/Tailwind.png"
import  Bootstrap  from "../portfolio/src/image/Bootstrap.png"
import  Git  from "../portfolio/src/image/Git.png"
import  Docker  from "../portfolio/src/image/Docker.png"
import  PostgreSQL  from "../portfolio/src/image/postgres.png"
import  Figma  from "../portfolio/src/image/Figma.png"

export default function Skills() {
  const skills = [
    { name: "React", image: React, level: 90, category: "Frontend" },
    { name: "JavaScript", image: JavaScript, level: 85, category: "Language" },
    { name: "HTML", image: HTML, level: 95, category: "Frontend" },
    { name: "CSS", image: CSS, level: 90, category: "Frontend" },
    { name: "Tailwind CSS", image: Tailwindcss, level: 88, category: "Framework" },
    { name: "Bootstrap", image: Bootstrap, level: 80, category: "Framework" },
    { name: "Git", image: Git, level: 85, category: "Tool" },
    { name: "Docker", image: Docker, level: 75, category: "DevOps" },
    { name: "PostgreSQL", image: PostgreSQL, level: 80, category: "Database" },
    { name: "Figma", image: Figma, level: 85, category: "Design" },
  ]

  const categories = ["All", "Frontend", "Language", "Framework", "Tool", "DevOps", "Database", "Design"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <Image src={skill.image || "/placeholder.svg"} alt={skill.name} fill className="object-contain" />
                  </motion.div>
                </div>

                <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors">{skill.name}</h3>

                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
                </div>

                <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>

              {/* Hover effect overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
