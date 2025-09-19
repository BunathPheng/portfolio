import { MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "CSTAD",
      location: "Phnom Penh, Cambodia",
      period: "2023 - Present",
      description:
        "Developing modern web applications using React, Node.js, and various databases. Working on real-world projects and collaborating with teams.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      title: "Web Developer Intern",
      company: "Tech Startup",
      location: "Phnom Penh, Cambodia",
      period: "2023 - 2023",
      description:
        "Assisted in developing responsive websites and web applications. Gained experience in modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2022 - Present",
      description:
        "Creating custom websites and web applications for small businesses and individuals. Focus on modern, responsive design.",
      technologies: ["React", "Tailwind CSS", "Next.js"],
    },
  ]

  return (
    <section id="experience" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical timeline line, hidden on mobile */}
          <div className="hidden sm:block absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-start sm:items-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} relative`}
              >
                {/* Timeline marker */}
                <div className="relative z-10 flex items-center justify-center w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-slate-900 ml-3.5 sm:ml-0 sm:mx-8 my-4 sm:my-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="flex-1 pl-10 sm:pl-0 sm:pr-8 w-full">
                  <div
                    className={`bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 ${
                      index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-purple-400">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm font-medium">{exp.period}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-gray-400">
                        <span className="font-medium">{exp.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 sm:pl-8 hidden sm:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}