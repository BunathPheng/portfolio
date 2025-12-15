"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  const validate = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) return "Please enter your name."
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email.trim())) return "Please enter a valid email."
    if (!formData.subject.trim() || formData.subject.trim().length < 3) return "Subject should be at least 3 characters."
    if (!formData.message.trim() || formData.message.trim().length < 10) return "Message should be at least 10 characters."
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const validationError = validate()
    if (validationError) {
      setStatus("error")
      setError(validationError)
      return
    }

    setStatus("loading")

    try {
      // Replace with your Formspree endpoint, e.g., https://formspree.io/f/abcdwxyz
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrbnvzrz"

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to send")

      setStatus("sent")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setStatus("error")
      setError("Unable to send message. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
              <p className="text-gray-400 leading-relaxed">
                Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
                together!
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "bunath45@gmail.com",
                  href: "mailto:bunath45@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+855 12 345 678",
                  href: "tel:+85512345678",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Phnom Penh, Cambodia",
                  href: "#",
                },
              ].map((contact) => (
                <div key={contact.title} className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] rounded-xl">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{contact.title}</h4>
                    <a href={contact.href} className="text-gray-400 hover:text-[#22d3ee] transition-colors">
                      {contact.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <form noValidate onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#22d3ee]"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#22d3ee]"
                    required
                  />
                </div>
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 resize-none"
                  required
                />
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] hover:from-[#38bdf8] hover:to-[#9ef27a] text-white py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 disabled:opacity-60"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
                {status === "sent" && (
                  <p className="text-sm text-green-400">Message sent! I’ll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">{error || "Something went wrong. Please try again."}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
