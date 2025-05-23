"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Database, Layout, Server, Smartphone, Figma } from "lucide-react"

type Skill = {
  name: string
  level: number
  category: string
}

type SkillCategory = {
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Layout className="h-8 w-8" />,
    skills: [
      { name: "HTML/CSS", level: 95, category: "Frontend" },
      { name: "JavaScript", level: 90, category: "Frontend" },
      { name: "React", level: 90, category: "Frontend" },
      { name: "Next.js", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 90, category: "Frontend" },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-8 w-8" />,
    skills: [
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "Express", level: 80, category: "Backend" },
      { name: "Python", level: 75, category: "Backend" },
      { name: "GraphQL", level: 70, category: "Backend" },
    ],
  },
  {
    name: "Database",
    icon: <Database className="h-8 w-8" />,
    skills: [
      { name: "MongoDB", level: 85, category: "Database" },
      { name: "PostgreSQL", level: 80, category: "Database" },
      { name: "Firebase", level: 75, category: "Database" },
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone className="h-8 w-8" />,
    skills: [
      { name: "React Native", level: 80, category: "Mobile" },
      { name: "Flutter", level: 65, category: "Mobile" },
    ],
  },
  {
    name: "Design",
    icon: <Figma className="h-8 w-8" />,
    skills: [
      { name: "Figma", level: 85, category: "Design" },
      { name: "Adobe XD", level: 75, category: "Design" },
      { name: "UI/UX", level: 80, category: "Design" },
    ],
  },
  {
    name: "Other",
    icon: <Code className="h-8 w-8" />,
    skills: [
      { name: "Git", level: 90, category: "Other" },
      { name: "Docker", level: 75, category: "Other" },
      { name: "AWS", level: 70, category: "Other" },
      { name: "Testing", level: 80, category: "Other" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-violet-500 mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical
            skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 shadow-sm border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-md bg-primary/10 text-primary">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-teal-500 to-violet-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
