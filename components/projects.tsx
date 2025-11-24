"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import projects from "@/components/datas/projects.json";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [slice, setSlice] = useState<{
    id: null | number;
    length: null | number;
  }>({
    id: null,
    length: null,
  });
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);
  return (
    <section id='projects' className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block'>
              My{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                Projects
              </span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={
                inView
                  ? { opacity: 1, width: "100px" }
                  : { opacity: 0, width: 0 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              className='h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4'></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex justify-center mb-12'>
            <div className='inline-flex bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md'>
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === "all"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}>
                All Projects
              </button>
              <button
                onClick={() => setFilter("frontend")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === "frontend"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}>
                Frontend
              </button>
              <button
                onClick={() => setFilter("backend")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === "backend"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}>
                Backend
              </button>
              <button
                onClick={() => setFilter("fullstack")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === "fullstack"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}>
                Full Stack
              </button>
            </div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {[...filteredProjects].reverse().map((project, index) => {
              const isExpanded = slice.id === project.id ? slice.length : 3;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
                  <div className='relative h-64 overflow-hidden'>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className='object-cover transition-transform duration-500 hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end'>
                      <div className='p-6'>
                        <h3 className='text-2xl font-bold text-white mb-1'>
                          {project.title}
                        </h3>
                        <div className='flex items-center text-gray-300 mb-2'>
                          <Calendar className='h-4 w-4 mr-2' />
                          <span className='text-sm'>{project.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='p-6'>
                    <p className='text-gray-700 dark:text-gray-300 mb-4'>
                      {project.description}
                    </p>

                    <div className='mb-4'>
                      <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                        Technologies Used:
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm'>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className='mb-6'>
                      <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                        Key Features:
                      </h4>
                      <ul className='space-y-1 text-gray-700 dark:text-gray-300'>
                        {project.features
                          .slice(0, isExpanded ?? 3)
                          .map((feature, featureIndex) => (
                            <li key={featureIndex} className='flex items-start'>
                              <div className='mt-1.5 mr-2 w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full'></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        <div
                          onClick={() => {
                            if (slice.id === project.id) {
                              setSlice({ id: null, length: null });
                            } else
                              setSlice({
                                id: project.id,
                                length: project.features.length,
                              });
                          }}
                          className='cursor-pointer'>
                          {project.features.length > 3 && (
                            <li className='text-purple-600 dark:text-purple-400 text-sm mt-1'>
                              {slice.id === project.id
                                ? "Hide"
                                : `${project.features.length - 3} + more`}{" "}
                              features
                            </li>
                          )}
                        </div>
                      </ul>
                    </div>

                    <div className='flex gap-3'>
                      <Link
                        href={project.links.demo ? project.links.demo : "#"}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Button className='gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'>
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                      </Link>
                      {/* <Link href={project?.links?.github || ""} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        <Github size={16} />
                        Code
                      </Button>
                    </Link> */}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
