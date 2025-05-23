"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-violet-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 border-primary/20 rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <Image
                src="./images/profile.png"
                alt="abdur rahman"
                width={600}
                height={600}
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer & UI/UX Designer</h3>
            <p className="text-foreground/80 mb-6">
              I'm a passionate developer with over 5 years of experience creating beautiful, functional, and
              user-centered digital experiences. I am constantly learning and keeping up with the latest technologies
              and trends.
            </p>
            <p className="text-foreground/80 mb-6">
              With a strong foundation in both front-end and back-end development, I enjoy bringing ideas to life
              through clean code and thoughtful design. I believe in creating solutions that are not only visually
              appealing but also provide real value to users.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold mb-2">Name:</h4>
                <p className="text-foreground/80">MD. Abdur Rahman</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email:</h4>
                <p className="text-foreground/80">hello@rahman011.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Location:</h4>
                <p className="text-foreground/80">Barisal, Bangaldesh</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Availability:</h4>
                <p className="text-foreground/80">Freelance & Full-time</p>
              </div>
            </div>

            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
