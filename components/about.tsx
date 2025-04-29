"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Code, Coffee, Lightbulb, Users } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const qualities = [
    {
      icon: <Code className="h-6 w-6 text-purple-600" />,
      title: "Clean Code",
      description: "I write clean, maintainable code following best practices and design patterns.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-purple-600" />,
      title: "Problem Solver",
      description: "I enjoy tackling complex problems and finding elegant solutions.",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Team Player",
      description: "I collaborate effectively with teams to achieve project goals.",
    },
    {
      icon: <Coffee className="h-6 w-6 text-purple-600" />,
      title: "Continuous Learner",
      description: "I'm constantly learning new technologies and improving my skills.",
    },
  ]

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100 dark:bg-purple-900/20 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-pink-100 dark:bg-pink-900/20 rounded-tr-full opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Me</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={inView ? { opacity: 1, width: "100px" } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-tl-2xl z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-200 dark:bg-pink-900/30 rounded-br-2xl z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/AGOM1655.png"
                  alt="Sanjaikumar Veerasamy"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Full Stack Developer with a passion for creating impactful applications
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I am a passionate Full Stack Developer with over 4+ years of programming experience and 3+ years of
                professional work. My journey in the world of development has equipped me with a diverse skill set and a
                deep understanding of both frontend and backend technologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                I specialize in building robust web applications using modern technologies like React, Next.js, Node.js,
                and more. I enjoy solving complex problems and creating intuitive, user-friendly interfaces that deliver
                exceptional user experiences.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {qualities.map((quality, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">{quality.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{quality.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{quality.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
