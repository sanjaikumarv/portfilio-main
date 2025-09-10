"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import certificates from '@/components/datas/certificates.json'

const getLevelColor = (level: string) => {
    switch (level) {
        case "Basic":
            return "bg-green-100 text-green-800 hover:bg-green-200"
        case "Intermediate":
            return "bg-blue-100 text-blue-800 hover:bg-blue-200"
        case "Advanced":
            return "bg-purple-100 text-purple-800 hover:bg-purple-200"
        default:
            return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
}

export default function Certificates() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return (
        <section id="certificates" className="py-20">
            <div className="mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block"
                        >
                            My{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                Certifications
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6"
                        >
                            Professional certifications demonstrating technical expertise and problem-solving abilities
                        </motion.p>
                    </div>

                    {/* Certificates Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <Card className="group hover:shadow-xl border-2 hover:border-purple-200 dark:hover:border-purple-800 bg-white dark:bg-gray-800 h-full">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-start gap-3">
                                                    <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white flex-shrink-0">
                                                        <Award className="h-5 w-5" />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <CardTitle className="text-xl mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-gray-900 dark:text-white">
                                                            {cert.title}
                                                        </CardTitle>
                                                        <CardDescription className="text-base font-medium text-purple-600 dark:text-purple-400">
                                                            {cert.issuer}
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                            </div>
                                            <Badge className={getLevelColor(cert.level)}>{cert.level}</Badge>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-3 ml-11">
                                            <Calendar className="w-4 h-4" />
                                            <span>{cert.date}</span>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{cert.description}</p>

                                        <div className="space-y-2">
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Skills Demonstrated:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {cert.skills.map((skill, skillIndex) => (
                                                    <Badge
                                                        key={skillIndex}
                                                        variant="secondary"
                                                        className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {cert.credentialUrl && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all duration-300 bg-transparent border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400"
                                                asChild
                                            >
                                                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    View Credential
                                                </a>
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                className="space-y-2"
                            >
                                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Award className="h-8 w-8" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">{certificates.length}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Certificates Earned</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                className="space-y-2"
                            >
                                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Calendar className="h-8 w-8" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {certificates.reduce((acc, cert) => acc + cert.skills.length, 0)}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Skills Validated</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                                className="space-y-2"
                            >
                                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Star className="h-8 w-8" />
                                </div>
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                        HackerRank
                                    </span>
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Certified Developer</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    )
}
