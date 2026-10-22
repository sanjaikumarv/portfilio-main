"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase, ChevronRight, Sparkles } from "lucide-react";
import experiences from "@/components/datas/experience.json";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='experience' className='py-24 relative overflow-hidden'>
      {/* Background ambient accents */}
      <div className='absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-5xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3'>
              <Sparkles className='h-3.5 w-3.5' />
              Career Journey
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white'>
              Work{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600'>
                Experience
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-4'>
              A track record of engineering scalable platforms, AI-driven LMS architectures, desktop tools, and client web solutions.
            </motion.p>

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

          {/* Timeline Layout */}
          <div className='relative'>
            {/* Center Timeline line with glow */}
            <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-indigo-600 transform md:-translate-x-1/2 opacity-70'></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0
                    ? "md:ml-auto md:pl-10 md:pr-0"
                    : "md:mr-auto md:pr-10 md:pl-0"
                } pl-10 md:w-[calc(50%-16px)]`}>
                {/* Timeline node */}
                <div className='absolute left-4 md:left-[calc(0%-16px)] top-6 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-4 border-purple-600 shadow-md shadow-purple-500/50 z-10 transform -translate-x-1/2'></div>

                {/* Content Card */}
                <div className='group bg-white/80 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-gray-700/80 shadow-lg hover:shadow-2xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 p-6 md:p-7 transform hover:-translate-y-1.5'>
                  {/* Role & Company Header */}
                  <div className='flex items-start gap-4 mb-4'>
                    <div className='p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300'>
                      <Briefcase className='h-5 w-5' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-snug'>
                        {exp.title}
                      </h3>
                      <h4 className='text-sm md:text-base font-semibold text-purple-600 dark:text-purple-400'>
                        {exp.company}
                      </h4>
                    </div>
                  </div>

                  {/* Date & Location Pills */}
                  <div className='flex flex-wrap items-center text-xs text-gray-600 dark:text-gray-400 mb-4 gap-2.5'>
                    <div className='flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700/60 font-medium'>
                      <Calendar className='h-3.5 w-3.5 text-purple-600 dark:text-purple-400' />
                      <span>{exp.period}</span>
                    </div>
                    <div className='flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700/60 font-medium'>
                      <MapPin className='h-3.5 w-3.5 text-pink-600 dark:text-pink-400' />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Technologies Tags */}
                  {exp.technologies && (
                    <div className='flex flex-wrap gap-1.5 mb-4'>
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className='px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40'>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className='text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className='pt-3 border-t border-gray-100 dark:border-gray-700/60'>
                    <h5 className='text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-200 mb-2'>
                      Key Highlights & Impact:
                    </h5>
                    <ul className='space-y-1.5 text-xs md:text-sm text-gray-600 dark:text-gray-300'>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className='flex items-start gap-2'>
                          <ChevronRight className='h-3.5 w-3.5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0' />
                          <span className='leading-relaxed'>{achievement}</span>
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
  );
}
