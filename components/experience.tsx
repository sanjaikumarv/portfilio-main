"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import experiences from '@/components/datas/experience.json'
export default function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="experience" className="py-20">
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
                            Work{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                Experience
                            </span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={inView ? { opacity: 1, width: "100px" } : { opacity: 0, width: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4"
                        ></motion.div>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 transform md:translate-x-[-50%]"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? "md:ml-auto md:pl-12 md:pr-0" : "md:mr-auto md:pr-12 md:pl-0"
                                    } pl-12 md:w-[calc(50%-24px)]`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[-8px] md:left-[calc(0%-8px)] top-0 w-4 h-4 rounded-full bg-white border-4 border-purple-600 z-10 transform md:translate-x-[-50%]"></div>

                                {/* Content card */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mr-4 text-white">
                                            <Briefcase className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                                            <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">{exp.company}</h4>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-4 gap-4">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                                    <div className="mt-4">
                                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className="mt-1 mr-2 w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                                                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
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
