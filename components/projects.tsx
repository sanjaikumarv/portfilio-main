"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink, Calendar, Github, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import projects from "@/components/datas/projects.json";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [slice, setSlice] = useState<{ id: null | number; length: null | number }>({
    id: null,
    length: null,
  });
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id='projects' className='py-24 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden'>
      {/* Decorative gradient blur */}
      <div className='absolute bottom-10 right-0 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3'>
              <Sparkles className='h-3.5 w-3.5' />
              Featured Creations
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white'>
              Featured{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600'>
                Projects
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={
                inView
                  ? { opacity: 1, width: "80px" }
                  : { opacity: 0, width: 0 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              className='h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full'></motion.div>
          </div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex justify-center mb-12'>
            <div className='inline-flex p-1.5 rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-md gap-1'>
              {[
                { label: "All Projects", val: "all" },
                { label: "Full Stack", val: "fullstack" },
                { label: "Frontend", val: "frontend" },
                { label: "Backend", val: "backend" },
              ].map((f) => (
                <button
                  key={f.val}
                  onClick={() => setFilter(f.val)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    filter === f.val
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/20"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/60"
                  }`}>
                  {f.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[...filteredProjects].reverse().map((project, index) => {
              const isExpanded = slice.id === project.id ? slice.length : 3;
              return (
                <motion.div
                  key={project.id || index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: 0.15 + (index % 4) * 0.1 }}
                  className='group bg-white dark:bg-gray-800/90 rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-700/80 shadow-lg hover:shadow-2xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 flex flex-col transform hover:-translate-y-1.5'>
                  {/* Image & Title Banner */}
                  <div className='relative h-60 sm:h-64 overflow-hidden bg-gray-100 dark:bg-gray-900'>
                    <Image
                      src={project?.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent flex items-end p-6'>
                      <div>
                        <div className='inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md mb-2'>
                          {project.category}
                        </div>
                        <h3 className='text-xl sm:text-2xl font-bold text-white'>
                          {project.title}
                        </h3>
                        <div className='flex items-center text-gray-300 text-xs mt-1'>
                          <Calendar className='h-3.5 w-3.5 mr-1.5 text-purple-400' />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className='p-6 flex-1 flex flex-col justify-between'>
                    <div>
                      <p className='text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className='mb-5'>
                        <h4 className='text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-200 mb-2'>
                          Tech Stack:
                        </h4>
                        <div className='flex flex-wrap gap-1.5'>
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className='px-2.5 py-0.5 bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 rounded-md text-xs font-medium border border-purple-200/60 dark:border-purple-800/40'>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className='mb-6'>
                        <h4 className='text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-200 mb-2'>
                          Key Architecture & Features:
                        </h4>
                        <ul className='space-y-1.5 text-xs text-gray-600 dark:text-gray-300'>
                          {project.features
                            .slice(0, isExpanded ?? 3)
                            .map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className='flex items-start gap-2'>
                                <div className='mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex-shrink-0'></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                        </ul>

                        {project.features.length > 3 && (
                          <button
                            type='button'
                            onClick={() => {
                              if (slice.id === project.id) {
                                setSlice({ id: null, length: null });
                              } else {
                                setSlice({
                                  id: project.id,
                                  length: project.features.length,
                                });
                              }
                            }}
                            className='inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 text-xs font-semibold mt-2 hover:underline'>
                            {slice.id === project.id ? (
                              <>
                                Show less <ChevronUp className='h-3.5 w-3.5' />
                              </>
                            ) : (
                              <>
                                + {project.features.length - 3} more features{" "}
                                <ChevronDown className='h-3.5 w-3.5' />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className='flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-gray-700/60'>
                      {project?.links?.demo && (
                        <Link
                          href={project.links.demo}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Button
                            size='sm'
                            className='gap-1.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full text-xs font-semibold shadow-md shadow-purple-500/20'>
                            <ExternalLink size={14} />
                            Live Demo
                          </Button>
                        </Link>
                      )}

                      {project?.links?.github && (
                        <Link
                          href={project.links.github}
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Button
                            variant='outline'
                            size='sm'
                            className='gap-1.5 rounded-full text-xs font-medium border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'>
                            <Github size={14} />
                            Source Code
                          </Button>
                        </Link>
                      )}
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