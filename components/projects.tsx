"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "Used Computer (UDC) Rewamp",
    period: "March 2025 - Till Now",
    description:
      "Used Computer was a Malaysian E-waste platform. The platform is used for Malaysian people to sell their E-waste products. The platform is used for Malaysian people to buy used computers.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Nest JS"],
    features: [
      "Rewamped all UI components with React for all types of form inputs",
      "Rewamped all API's for projects",
      "Node mailer SMTP setup for mail notification",
      "Twilio SMS API setup for OTP verification",
      "Rewamped Billplz gateway for payments",
      "Code review and complete testing",
    ],
    image: "/udc.png",
    category: "fullstack",
    links: {
      demo: "https://usedcomputer.com.my",
      Github: "https://github.com/Santheepkumar/udc-frontend.git"
    },
  },
  {
    title: "Mobilab2u",
    period: "July 2024 - Till Now",
    description:
      "Mobilab2U is a new on - demand application that matches our willing partners with customers and patients who are looking to take time sensitive medical tests without having to track to hospitals, labs and clinics.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Fastify JS"],
    features: [
      "Created all UI components with React for all types of form inputs",
      "Storybook implementation for individual UI components",
      "Created all API's for projects",
      "Node mailer SMTP setup for mail notification",
      "Twilio SMS API setup for OTP verification",
      "Implemented Stripe gateway for payments",
      "Code review and complete testing",
    ],
    image: "/m2u.png",
    category: "backend",
    links: {
      demo: "https://mobilab2u.com",
      Github: "https://github.com/Santheepkumar/mobilab2u.git"
    },
  },
  {
    title: "NCER web (NEST)",
    period: "September 2023 - November 2024",
    description:
      "Ncer Web is a Malaysian business management platform that is being handled by the government.This platform helps the government verify and validate business peoples applications and assists them by providing business ideas.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express JS"],
    features: [
      "Created all UI components with React for all types of form inputs",
      "Storybook implementation for individual UI components",
      "Created all API's for projects",
      "Node mailer SMTP setup for mail notification",
      "Code review and complete testing",
    ],
    image: "/nest.png",
    category: "backend",
    links: {
      demo: "https://nest.ncer.com.my",
      Github: "https://github.com/sanjaikumarv/ncer-web.git"
    },
  },
  {
    title: "Awan BMS",
    period: "November 2022 - May 2023",
    description:
      "Awan BMS was an automated building management application. It created building blocks and assigned each house to an individual owner. The application automatically sent payment links and collected the owners' monthly rent.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express", "Storybook"],
    features: [
      "Created all UI components with React for all types of form inputs",
      "Storybook implementation for individual UI components",
      "Implemented contexts API for state management and authentication",
      "Nodemailer SMTP setup for mail notification",
      "Implemented Stripe gateway for payments",
      "Code review and complete testing",
    ],
    image: "/awan.png",
    category: "fullstack",
    links: {
      demo: "https://awan.vercel.app/",
      github: "https://github.com/sanjaikumarv/awan-bms.git",
    },
  },
  {
    title: "Slot booking",
    period: "November 2022 - July 2023",
    description: "Slot booking is a booking- based application.People can book the multipurpose hall for their events or ceremonies, etc.The hall details and services are shown on the booking page.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express", "Storybook"],
    features: [
      "Created all UI components with React for all types of form inputs",
      "Storybook implementation for individual UI components",
      "Implemented contexts API for state management and authentication",
      "Nodemailer SMTP setup for mail notification",
      "Code review and complete testing",
    ],
    image: "/bms-property-dashboard.png",
    category: "fullstack",
    links: {
      demo: "https://booking.sjktsaraswathy.com/",
      github: "https://github.com/sanjaikumarv/awan-bms",
    },
  },
  {
    title: "Locum Zone",
    period: "July 2022 - November 2022",
    description:
      "Locum Zone was a Malaysian business and doctor employment-focused platform. The platform is used for Malaysian hospitals or medical centers to create their profiles and post their available doctor jobs. Doctors can apply to these jobs.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express", "Storybook"],
    features: [
      "Created all UI components with React for all types of form inputs",
      "Storybook implementation for individual UI components",
      "Created all API's for projects",
      "Node mailer SMTP setup for mail notification",
      "Twilio SMS API setup for OTP verification",
      "Implemented Stripe gateway for payments",
    ],
    image: "/lz.png",
    category: "fullstack",
    links: {
      demo: "https://locumzone.vercel.app/",
      github: "https://github.com/sanjaikumarv/locum-zone",
    },
  },
  {
    title: "Tailwood UI",
    period: "October 2021 - January 2022",
    description:
      "Tailwood UI is a free Tailwind CSS component library that provides reusable styled components in HTML and Tailwind CSS.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express", "Storybook"],
    features: [
      "Created all UI components with React for all types of form inputs",
      "Storybook implementation for individual UI components",
      "Created all API's for projects",
      "Node mailer SMTP setup for mail notification",
      "Twilio SMS API setup for OTP verification",
      "Implemented Stripe gateway for payments",
    ],
    image: "/tailwood.png",
    category: "frontend",
    links: {
      demo: "https://tailwoodui.vercel.app/",
      github: "https://github.com/Santheepkumar/tailwood.git",
    },
  },
  {
    title: "Dev converter",
    period: "July 2021 - August 2021",
    description:
      "Dev Converter is made for developers.The app provides features like transforming word collections from one case to another and converting JSON to CSV.",
    technologies: ["Next.js", "Storybook"],
    features: [
      "Created all UI components with React for all types of form inputs",
      "Storybook implementation for individual UI components",
      "Created all API's for projects",
      "Node mailer SMTP setup for mail notification",
      "Twilio SMS API setup for OTP verification",
      "Implemented Stripe gateway for payments",
    ],
    image: "/devc.png",
    category: "frontend",
    links: {
      demo: "https://devconverter.vercel.app",
      github: "https://github.com/sanjaikumarv/locum-zone",
    },
  },

]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Projects
              </span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={inView ? { opacity: 1, width: "100px" } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4"
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === "all"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter("frontend")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === "frontend"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                Frontend
              </button>
              <button
                onClick={() => setFilter("backend")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === "backend"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                Backend
              </button>
              <button
                onClick={() => setFilter("fullstack")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === "fullstack"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                Full Stack
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <div className="flex items-center text-gray-300 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{project.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="mt-1.5 mr-2 w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-purple-600 dark:text-purple-400 text-sm mt-1">
                          + {project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    </Link>
                    <Link href={project?.links?.github || ""} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        <Github size={16} />
                        Code
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
