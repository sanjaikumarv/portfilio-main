"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Server, Layout, Terminal, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: [
      { name: "React JS", level: 90 },
      { name: "React Native", level: 80 },
      { name: "Next JS", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "SCSS / Tailwind", level: 90 },
      { name: "Storybook JS", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Nest.js", level: 80 },
      { name: "Express.js", level: 90 },
      { name: "Fastify", level: 75 },
    ],
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose ODM", level: 85 },
      { name: "PostgreSQL", level: 50 },
      { name: "Redis", level: 50 },
    ],
  },
  {
    title: "DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: "GitHub Actions", level: 50 },
      { name: "AWS", level: 50 },
      { name: "Docker", level: 50 },
      { name: "Nginx", level: 50 },
    ],
  },
  {
    title: "Tools",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Subabase", level: 50 },
    ],
  },
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 80 },
    ],
  },
  // {
  //   title: "Testing",
  //   icon: <Cpu className="h-6 w-6" />,
  //   skills: [
  //     { name: "Jest", level: 75 },
  //     { name: "React Testing Library", level: 70 },
  //     { name: "Cypress", level: 65 },
  //   ],
  // },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block"
            >
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={inView ? { opacity: 1, width: "100px" } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4"
            ></motion.div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mr-4 text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-purple-600 dark:text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Languages I Speak</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Tamil", level: "Native" },
                { name: "English", level: "Fluent" },
                { name: "Kanada", level: "Conversational" },
                { name: "Malayalam", level: "Basic" },
              ].map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-md flex items-center"
                >
                  <span className="font-semibold mr-2">{language.name}</span>
                  <span className="text-xs px-2 py-1 bg-white/20 rounded-full">{language.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
