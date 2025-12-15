"use client"

import { useState } from "react"
import { ExternalLink, Github, Eye, Code, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import englishImage from "../portfolio/src/image/English.jpg"
import portfolioImage from "../portfolio/src/image/portfolio.jpg"
import selamontyImage from "../portfolio/src/image/selamonty.png"
import smartopsImage from "../portfolio/src/image/Final.png"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "English Club: E-Learning Management System",
      description:
        "E2E learning flow: register, dashboard, learn via courses, quizzes, track progress; JWT-authenticated with REST APIs.",
      longDescription:
        "Integrated frontend with backend RESTful APIs, implemented JWT authentication (NextAuth), and collaborated closely with backend to ensure smooth data flow. Covers user onboarding, course consumption, quizzes, and progress tracking with clear data movement across services.",
      image: englishImage,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "JWT"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 67, forks: 23, views: 2100 },
    },
    {
      id: 2,
      title: "SmartOps: Automation Platform",
      description:
        "Automates the deployment lifecycle from repo to production with GitOps-first workflows.",
      longDescription:
        "CI/CD pipelines with Jenkins and GitHub Actions, GitOps delivery with Argo CD, containerized workloads on Docker/Kubernetes, and infrastructure automation with Ansible. Emphasizes reliability, speed, and traceability of releases.",
      image: smartopsImage,
      technologies: ["Jenkins", "GitHub Actions", "Argo CD", "Docker", "Kubernetes", "Ansible"],
      category: "DevOps",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 45, forks: 12, views: 1200 },
    },
    {
      id: 3,
      title: "Selamounty: Digital Cultural & Educational Hub",
      description:
        "Virtual museum platform bringing global history, art, and heritage into one experience.",
      longDescription:
        "Backend and platform work for content delivery, automated deployments, and scalable APIs serving global visitors. Focused on reliable rollout and performance for media-rich experiences.",
      image: selamontyImage,
      technologies: ["Java", "Spring Boot", "MySQL", "Jenkins", "Docker", "Nginx"],
      category: "Platform",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 34, forks: 10, views: 1800 },
    },
  ]

  const categories = ["All", "Frontend", "Full Stack", "DevOps", "Platform"]
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] text-white shadow-lg"
                  : "glass-subtle text-gray-300 hover:glass"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative glass-subtle rounded-2xl overflow-hidden hover:glass hover:border-[#22d3ee]/50 transition-all duration-300"
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#22d3ee]/20 flex items-center justify-center space-x-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </motion.button>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass rounded-full hover:glass-strong transition-colors"
                    >
                      <Code className="w-5 h-5 text-white" />
                    </motion.a>
                  </motion.div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#22d3ee] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-[#22d3ee]">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">{project.stats.stars}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#22d3ee]/20 text-[#22d3ee] rounded-full text-xs font-medium hover:bg-[#22d3ee]/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] hover:from-[#38bdf8] hover:to-[#9ef27a] text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>

                    <div className="text-xs text-gray-500">{project.stats.views} views</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-strong rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                {(() => {
                  const project = projects.find((p) => p.id === selectedProject)
                  if (!project) return null

                  return (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="relative h-64 rounded-xl overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-[#22d3ee]/20 text-[#22d3ee] rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <Button className="bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] hover:from-[#38bdf8] hover:to-[#9ef27a]">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
