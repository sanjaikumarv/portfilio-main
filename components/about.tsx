"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  MapPin,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <Layers className='h-5 w-5 text-purple-500' />,
      title: "Clean Modular Architecture",
      description:
        "Building reusable design systems and maintainable microservices with Next.js, NestJS, and TypeScript.",
    },
    {
      icon: <Cpu className='h-5 w-5 text-pink-500' />,
      title: "AI & Real-Time Engineering",
      description:
        "Experienced in integrating LLM tutoring, automated evaluations, WebRTC live video classrooms, and collaborative tools.",
    },
    {
      icon: <Terminal className='h-5 w-5 text-indigo-500' />,
      title: "Open-Source Toolmaker",
      description:
        "Published multiple utility NPM packages helping developers streamline database queries and application workflows.",
    },
    {
      icon: <Zap className='h-5 w-5 text-amber-500' />,
      title: "High Performance & Scalability",
      description:
        "Optimizing bundle sizes, database indexing, caching strategies, and API latencies for 40%+ performance gains.",
    },
  ];

  return (
    <section id='about' className='relative py-24 overflow-hidden'>
      {/* Background ambient accents */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-10 left-0 w-80 h-80 bg-pink-500/10 dark:bg-pink-600/10 rounded-full filter blur-3xl pointer-events-none'></div>

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
              Get To Know Me
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white'>
              About{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600'>
                Sanjaikumar
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

          {/* Bento Grid Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch'>
            {/* Bento 1: Profile Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='lg:col-span-5 rounded-3xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 p-6 md:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between relative overflow-hidden group'>
              {/* Subtle gradient backdrop */}
              <div className='absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500'></div>

              <div>
                <div className='relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 shadow-md'>
                  <Image
                    src='/AGOM1655.png'
                    alt='Sanjaikumar Veerasamy'
                    fill
                    className='object-cover object-top group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-gray-950/70 backdrop-blur-md text-white text-xs'>
                    <span className='flex items-center gap-1.5 font-medium'>
                      <MapPin className='h-3.5 w-3.5 text-pink-400' />
                      Tamil Nadu, India
                    </span>
                    <span className='text-purple-300 font-semibold'>
                      Open to Remote / On-site
                    </span>
                  </div>
                </div>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                  Sanjaikumar Veerasamy
                </h3>
                <p className='text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1'>
                  Senior Full Stack Developer & Software Engineer
                </p>
              </div>

              <div className='mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 gap-4 text-center'>
                <div className='p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40'>
                  <div className='text-xl font-extrabold text-purple-600 dark:text-purple-400'>
                    4+ Years
                  </div>
                  <div className='text-xs text-gray-600 dark:text-gray-400 font-medium'>
                    Industry Experience
                  </div>
                </div>
                <div className='p-3 rounded-xl bg-pink-50 dark:bg-pink-950/30 border border-pink-100 dark:border-pink-900/40'>
                  <div className='text-xl font-extrabold text-pink-600 dark:text-pink-400'>
                    5+ Years
                  </div>
                  <div className='text-xs text-gray-600 dark:text-gray-400 font-medium'>
                    Programming
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bento 2: Bio & Engineering Pillars (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='lg:col-span-7 flex flex-col justify-between gap-6'>
              {/* Bio Card */}
              <div className='rounded-3xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 p-6 md:p-8 backdrop-blur-xl shadow-xl'>
                <h3 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-snug'>
                  Transforming Complex System Requirements into Elegant, High-Performance Software
                </h3>
                <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
                  I am a passionate Full Stack Developer with over{" "}
                  <strong className='text-purple-600 dark:text-purple-400'>
                    4+ years of professional engineering
                  </strong>{" "}
                  experience and 5+ years of programming. My journey spans
                  contributing to enterprise-scale AI-powered Learning Management
                  Systems (LMS), cross-platform desktop automation tools with
                  Electron, and full-stack web applications for global companies in
                  Australia, Malaysia, and India.
                </p>
                <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                  I specialize in modern JavaScript and TypeScript architectures—specifically{" "}
                  <strong>Next.js</strong>, <strong>NestJS</strong>,{" "}
                  <strong>React</strong>, <strong>Node.js</strong>, and{" "}
                  <strong>AWS</strong>. Whether designing low-latency REST/WebSocket
                  APIs or building pixel-perfect, accessible user interfaces, I
                  focus on writing clean, scalable, and testable code.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className='group p-5 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-xl shadow-md hover:shadow-xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 w-fit mb-3 group-hover:scale-110 transition-transform'>
                      {item.icon}
                    </div>
                    <h4 className='font-bold text-gray-900 dark:text-white text-sm mb-1.5'>
                      {item.title}
                    </h4>
                    <p className='text-xs text-gray-600 dark:text-gray-400 leading-relaxed'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
