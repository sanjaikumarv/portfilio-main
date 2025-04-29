"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react"

const education = {
  degree: "Bachelor of Computer Applications (B.C.A)",
  institution: "Dr SNS Rajalakshmi College of Arts and Science",
  period: "2019 - 2022",
  description:
    "Completed Bachelor of Computer Applications at Dr SNS Rajalakshmi College of Arts and Science with CGPA 6.5",
  achievements: [
    "Participated in college-level coding competitions",
    "Developed a stock market forcasting as final year project",
  ],
}

const courses = [
  {
    title: "Full stack course",
    provider: "Udemy",
    description: "The complete Junior to senior web development by Andrei Neagoie",
    date: "January 2021",
    certificate: false,
  },
  {
    title: "HTML & CSS",
    provider: "Udemy",
    description: "Learned full HTML & CSS from the course of John Smilga",
    date: "October 2020",
    certificate: false,
  },
  {
    title: "Node.js Backend development",
    provider: "Learn Code Online",
    description: "Completed backend course by Hitesh Choudhary",
    date: "March 2021",
    certificate: false,
  },
  {
    title: "Advanced JavaScript Concepts",
    provider: "Udemy",
    description: "Deep dive into JavaScript concepts like closures, prototypes, and async programming",
    date: "November 2021",
    certificate: false,
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
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
                Education
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
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16 transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white">
                  <GraduationCap className="h-10 w-10" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{education.degree}</h3>
                <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  {education.institution}
                </h4>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{education.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{education.description}</p>

                <div className="mt-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h5>
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mt-1.5 mr-2 w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Additional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Courses</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mr-4 text-white">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{course.title}</h4>
                      {course.certificate && (
                        <div className="flex items-center text-yellow-500 ml-2">
                          <Award className="h-4 w-4 mr-1" />
                          <span className="text-xs">Certified</span>
                        </div>
                      )}
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 text-sm mb-1">{course.provider}</p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-xs mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{course.date}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{course.description}</p>
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
