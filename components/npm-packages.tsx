"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Calendar, ExternalLink, Github, Download, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

interface NpmPackageData {
    downloads: {
        monthly: number
        weekly: number
    }
    dependents: number
    updated: string
    searchScore: number
    package: {
        name: string
        keywords: string[]
        version: string
        description: string
        sanitized_name: string
        publisher: {
            actor: {
                name: string
                type: string
                email: string
            }
            email: string
            username: string
        }
        maintainers: Array<{
            email: string
            username: string
        }>
        license: string
        date: string
        links: {
            npm: string
            homepage?: string
            repository?: string
            bugs?: string
        }
    }
    score: {
        final: number
        detail: {
            popularity: number
            quality: number
            maintenance: number
        }
    }
    flags: {
        insecure: number
    }
}


const getCategoryFromKeywords = (keywords: string[]): string => {
    const keywordStr = keywords.join(" ").toLowerCase()

    if (keywordStr.includes("mongodb") || keywordStr.includes("database") || keywordStr.includes("aggregation")) {
        return "Query Utills"
    } else if (keywordStr.includes("react") || keywordStr.includes("vue") || keywordStr.includes("angular")) {
        return "Framework"
    } else if (keywordStr.includes("typescript") || keywordStr.includes("utils") || keywordStr.includes("helpers")) {
        return "Utility"
    } else if (keywordStr.includes("tool") || keywordStr.includes("cli") || keywordStr.includes("generator")) {
        return "Tool"
    } else {
        return "Library"
    }
}

const getCategoryColor = (category: string) => {
    switch (category) {
        case "Utility":
            return "bg-green-100 text-green-800 hover:bg-green-200"
        case "Library":
            return "bg-blue-100 text-blue-800 hover:bg-blue-200"
        case "Framework":
            return "bg-purple-100 text-purple-800 hover:bg-purple-200"
        case "Tool":
            return "bg-orange-100 text-orange-800 hover:bg-orange-200"
        case "Database":
            return "bg-teal-100 text-teal-800 hover:bg-teal-200"
        default:
            return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
}

interface PackageStatsProps {
    weeklyDownloads: number
    monthlyDownloads: number
}

function PackageStats({ weeklyDownloads }: PackageStatsProps) {
    return (
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Download className="w-4 h-4" />
            <span>{weeklyDownloads.toLocaleString()} downloads/week</span>
        </div>
    )
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
    })
}

export default function NpmPackages() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    const [npmPackages, setNpmPackages] = useState<{ objects: NpmPackageData[] }>({ objects: [] })
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://registry.npmjs.org/-/v1/search?text=maintainer:sanjaikumarv&size=250")
            const data = await response.json()
            setNpmPackages(data)
        }
        fetchData()
    }, [])

    return (
        <section id="npm-packages" className="py-20">
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
                                NPM Packages
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6"
                        >
                            Open-source packages and utilities built to solve real-world development challenges
                        </motion.p>
                    </div>

                    {/* Packages Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {npmPackages.objects.map((pkgData, index) => {
                            const pkg = pkgData.package
                            const category = getCategoryFromKeywords(pkg.keywords)

                            return (
                                <motion.div
                                    key={pkg.name}
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
                                                            <Package className="h-5 w-5" />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <CardTitle className="text-xl mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-gray-900 dark:text-white">
                                                                {pkg.name}
                                                            </CardTitle>
                                                            <CardDescription className="text-base font-medium text-purple-600 dark:text-purple-400">
                                                                v{pkg.version}
                                                            </CardDescription>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Badge className={getCategoryColor(category)}>{category}</Badge>
                                            </div>
                                            <div className="flex items-center justify-between mt-3 ml-11">
                                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{formatDate(pkg.date)}</span>
                                                </div>
                                                <PackageStats
                                                    weeklyDownloads={pkgData.downloads.weekly}
                                                    monthlyDownloads={pkgData.downloads.monthly}
                                                />
                                            </div>
                                        </CardHeader>

                                        <CardContent className="space-y-4">
                                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{pkg.description}</p>

                                            <div className="space-y-2">
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Keywords:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {pkg.keywords.slice(0, 6).map((keyword, tagIndex) => (
                                                        <Badge
                                                            key={tagIndex}
                                                            variant="secondary"
                                                            className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                                                        >
                                                            {keyword}
                                                        </Badge>
                                                    ))}
                                                    {pkg.keywords.length > 6 && (
                                                        <Badge
                                                            variant="secondary"
                                                            className="text-xs bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                                                        >
                                                            +{pkg.keywords.length - 6} more
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="flex-1 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all duration-300 bg-transparent border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400"
                                                    asChild
                                                >
                                                    <a href={pkg.links.npm} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        NPM
                                                    </a>
                                                </Button>
                                                {pkg.links.repository && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="flex-1 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all duration-300 bg-transparent border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400"
                                                        asChild
                                                    >
                                                        <a href={pkg.links.repository} target="_blank" rel="noopener noreferrer">
                                                            <Github className="w-4 h-4 mr-2" />
                                                            GitHub
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
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
                                    <Package className="h-8 w-8" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">{npmPackages.objects.length}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Published Packages</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                className="space-y-2"
                            >
                                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Download className="h-8 w-8" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {npmPackages.objects.reduce((acc, pkg) => acc + pkg.downloads.weekly, 0)}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Weekly Downloads</div>
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
                                        MIT
                                    </span>
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Open Source License</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

