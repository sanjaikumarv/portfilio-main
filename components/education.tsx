"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, BookOpen, Calendar, Award, Sparkles, CheckCircle2 } from "lucide-react";
import education from "@/components/datas/education.json";

const courses = [
  {
    title: "Full Stack Web Development",
    provider: "Udemy",
    description: "Junior to Senior Modern Web Development with Andrei Neagoie",
    date: "January 2021",
    certificate: true,
  },
  {
    title: "Advanced JavaScript & Architecture",
    provider: "Udemy",
    description: "Deep dive into JS internals, closures, prototype chain, and event loop",
    date: "November 2021",
    certificate: true,
  },
  {
    title: "Node.js Backend Engineering",
    provider: "Learn Code Online",
    description: "Backend architecture and REST API development with Hitesh Choudhary",
    date: "March 2021",
    certificate: true,
  },
  {
    title: "Modern HTML5 & CSS3 Design",
    provider: "Udemy",
    description: "Responsive web design, modern CSS grid and flexbox with John Smilga",
    date: "October 2020",
    certificate: false,
  },
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='education' className='py-24 relative overflow-hidden'>
      {/* Background ambient accent */}
      <div className='absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-5xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3'>
              <Sparkles className='h-3.5 w-3.5' />
              Academic Foundations
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white'>
              Education &{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600'>
                Learning
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={inView ? { opacity: 1, width: "80px" } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full'></motion.div>
          </div>

          {/* Main Degree Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-white/80 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 rounded-3xl shadow-xl hover:shadow-2xl hover:border-purple-500/50 dark:hover:border-purple-500/50 backdrop-blur-xl p-8 mb-16 transform hover:-translate-y-1 transition-all duration-300'>
            <div className='flex flex-col md:flex-row md:items-start gap-6'>
              <div className='p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white shadow-lg shadow-purple-500/25 flex-shrink-0'>
                <GraduationCap className='h-10 w-10' />
              </div>
              <div className='flex-grow'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1'>
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                    {education.degree}
                  </h3>
                  <div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-xs font-semibold w-fit border border-purple-200 dark:border-purple-800/40'>
                    <Calendar className='h-3.5 w-3.5' />
                    {education.period}
                  </div>
                </div>
                <h4 className='text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3'>
                  {education.institution}
                </h4>
                <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5 leading-relaxed'>
                  {education.description}
                </p>

                <div className='pt-4 border-t border-gray-100 dark:border-gray-700/60'>
                  <h5 className='text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-200 mb-2'>
                    Key Highlights & Capstone Project:
                  </h5>
                  <ul className='space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300'>
                    {education.achievements.map((item, i) => (
                      <li key={i} className='flex items-start gap-2'>
                        <CheckCircle2 className='h-4 w-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Courses Grid */}
          <h3 className='text-xl font-bold text-center text-gray-900 dark:text-white mb-8'>
            Specialized Coursework & Continuous Training
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className='bg-white/80 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 rounded-2xl p-6 backdrop-blur-xl shadow-md hover:shadow-xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transform hover:-translate-y-1 transition-all duration-300'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white shadow-md shadow-purple-500/20 flex-shrink-0'>
                    <BookOpen className='h-5 w-5' />
                  </div>
                  <div className='flex-grow'>
                    <div className='flex justify-between items-start gap-2'>
                      <h4 className='text-base font-bold text-gray-900 dark:text-white'>
                        {course.title}
                      </h4>
                      {course.certificate && (
                        <span className='px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40 flex-shrink-0'>
                          Completed
                        </span>
                      )}
                    </div>
                    <p className='text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5'>
                      {course.provider} • {course.date}
                    </p>
                    <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed'>
                      {course.description}
                    </p>
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
