import Image from "next/image"
import nath  from "../portfolio/src/image/boynath.jpg"
export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am?</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              My name is Pheng Bunath, and I am a dedicated and passionate Full-Stack Developer with a strong foundation
              in both front-end and back-end technologies. As a student at CSTAD, I have honed my skills in web
              development, programming, and problem-solving through hands-on projects and real-world applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm passionate about creating digital solutions that not only look great but also provide exceptional user
              experiences. My journey in technology is driven by curiosity and a constant desire to learn and grow.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "2+", label: "Years Experience" },
                { number: "10+", label: "Technologies" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                <Image
                  src={nath}
                  alt="Pheng Bunath"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
