"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--color-primary),0.15),transparent_50%)]" />

      <div className="container px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-500">
                MD Abdur Rahman
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-foreground/80 mb-8">Full Stack Developer & UI/UX Designer</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-violet-500 hover:from-teal-600 hover:to-violet-600"
              onClick={scrollToContact}
            >
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border"
        >
          <ArrowDown className="h-5 w-5 text-foreground/70" />
        </a>
      </div>
    </section>
  )
}
