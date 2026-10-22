"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Sparkles,
  Layers,
  Cpu,
  Cloud,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { resumeUrl } from "@/lib/env";

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const roles = [
      "Senior Full Stack Developer",
      "Software Engineer",
      "Next.js & NestJS Specialist",
      "Distributed Systems & Cloud Builder",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(
            0,
            charIndex - 1,
          );
        }
        charIndex--;
        typingSpeed = 45;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(
            0,
            charIndex + 1,
          );
        }
        charIndex++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1200; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 300;
      }

      timeoutId = setTimeout(type, typingSpeed);
    };

    timeoutId = setTimeout(type, 800);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id='home'
      className='relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden'>
      {/* Decorative ambient gradient glows */}
      <div className='absolute top-16 left-8 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/15 rounded-full filter blur-3xl pointer-events-none animate-blob'></div>
      <div className='absolute top-36 right-8 w-80 h-80 bg-pink-400/20 dark:bg-pink-600/15 rounded-full filter blur-3xl pointer-events-none animate-blob animation-delay-2000'></div>
      <div className='absolute bottom-12 left-1/3 w-80 h-80 bg-indigo-400/15 dark:bg-indigo-600/15 rounded-full filter blur-3xl pointer-events-none animate-blob animation-delay-4000'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
          {/* Left Column: Intro & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className='lg:col-span-7 order-2 lg:order-1'>
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 text-xs md:text-sm font-medium mb-6 backdrop-blur-sm shadow-sm'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
              </span>
              <span>Available for Full-time Roles & High-Impact Projects</span>
            </motion.div>

            {/* Main Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4'>
                Hi, I&apos;m{" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600'>
                  Sanjaikumar
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 flex items-center flex-wrap gap-2'>
                <span>I build as a</span>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-bold'>
                  <span ref={typingRef}>Software Engineer</span>
                </span>
                <span className='animate-blink text-purple-600 font-light'>|</span>
              </h2>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed'>
                With <strong>4+ years of professional engineering</strong>{" "}
                experience (5+ years programming), I specialize in architecting scalable
                full-stack applications, real-time collaboration engines, and
                AI-integrated platforms using <strong>Next.js</strong>,{" "}
                <strong>NestJS</strong>, <strong>React</strong>, <strong>Node.js</strong>, and{" "}
                <strong>AWS</strong>.
              </p>
            </motion.div>

            {/* Resume & Core CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='flex flex-wrap items-center gap-4 mb-8'>
              {resumeUrl && (
                <Link
                  href={resumeUrl}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Button className='gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-7 py-5 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 font-medium'>
                    <Download size={18} />
                    Download Resume
                  </Button>
                </Link>
              )}

              <Link href='#projects'>
                <Button
                  variant='outline'
                  className='gap-2 rounded-full px-6 py-5 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-medium'>
                  Explore Projects
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </motion.div>

            {/* Social & Contact Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='flex flex-wrap items-center gap-3 mb-10'>
              <Link
                href='https://github.com/sanjaikumarv'
                target='_blank'
                rel='noopener noreferrer'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='gap-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300 transition-all'>
                  <Github size={16} />
                  GitHub
                </Button>
              </Link>
              <Link
                href='https://www.linkedin.com/in/sanjaikumarv'
                target='_blank'
                rel='noopener noreferrer'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='gap-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300 transition-all'>
                  <Linkedin size={16} />
                  LinkedIn
                </Button>
              </Link>
              <Link href='mailto:devsanjaikumarv@gmail.com'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='gap-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300 transition-all'>
                  <Mail size={16} />
                  Email
                </Button>
              </Link>
              <Link href='tel:+916383528363'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='gap-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-300 transition-all'>
                  <Phone size={16} />
                  Call
                </Button>
              </Link>
            </motion.div>

            {/* Quick Modern Metric Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200/80 dark:border-gray-800/80'>
              <div className='p-3.5 rounded-2xl bg-white/70 dark:bg-gray-900/70 border border-gray-200/70 dark:border-gray-800/70 backdrop-blur-sm shadow-sm'>
                <div className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  4+
                </div>
                <div className='text-xs text-gray-600 dark:text-gray-400 mt-0.5 font-medium'>
                  Years Experience
                </div>
              </div>
              <div className='p-3.5 rounded-2xl bg-white/70 dark:bg-gray-900/70 border border-gray-200/70 dark:border-gray-800/70 backdrop-blur-sm shadow-sm'>
                <div className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  20+
                </div>
                <div className='text-xs text-gray-600 dark:text-gray-400 mt-0.5 font-medium'>
                  Projects Shipped
                </div>
              </div>
              <div className='p-3.5 rounded-2xl bg-white/70 dark:bg-gray-900/70 border border-gray-200/70 dark:border-gray-800/70 backdrop-blur-sm shadow-sm'>
                <div className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  5+
                </div>
                <div className='text-xs text-gray-600 dark:text-gray-400 mt-0.5 font-medium'>
                  NPM Packages
                </div>
              </div>
              <div className='p-3.5 rounded-2xl bg-white/70 dark:bg-gray-900/70 border border-gray-200/70 dark:border-gray-800/70 backdrop-blur-sm shadow-sm'>
                <div className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  10+
                </div>
                <div className='text-xs text-gray-600 dark:text-gray-400 mt-0.5 font-medium'>
                  Core Technologies
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-End Avatar with Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='lg:col-span-5 order-1 lg:order-2 flex justify-center relative'>
            <div className='relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96'>
              {/* Outer Glow Ring */}
              <div className='absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 opacity-40 blur-xl animate-pulse'></div>

              {/* Avatar Frame */}
              <div className='relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/50 dark:border-gray-700/60 shadow-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm'>
                <Image
                  src='/avator.png'
                  alt='Sanjaikumar Veerasamy'
                  fill
                  priority
                  className='object-cover object-top hover:scale-105 transition-transform duration-500'
                />
              </div>

              {/* Floating Badge 1: Next.js & React */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className='absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-800 shadow-xl backdrop-blur-md flex items-center gap-2'>
                <div className='p-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600'>
                  <Layers className='h-4 w-4' />
                </div>
                <div className='text-xs font-bold text-gray-900 dark:text-white leading-tight'>
                  Next.js • React
                  <span className='block text-[10px] font-normal text-gray-500'>
                    SSR & Microfrontends
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 2: NestJS & Cloud */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className='absolute -bottom-4 -right-2 sm:-right-6 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-800 shadow-xl backdrop-blur-md flex items-center gap-2'>
                <div className='p-1.5 rounded-lg bg-pink-100 dark:bg-pink-900/40 text-pink-600'>
                  <Cpu className='h-4 w-4' />
                </div>
                <div className='text-xs font-bold text-gray-900 dark:text-white leading-tight'>
                  NestJS • AWS
                  <span className='block text-[10px] font-normal text-gray-500'>
                    Scalable Microservices
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Cloud & Docker */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className='absolute bottom-8 -left-6 sm:-left-8 px-3 py-1.5 rounded-2xl bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-800 shadow-lg backdrop-blur-md flex items-center gap-1.5'>
                <div className='p-1 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600'>
                  <Cloud className='h-3.5 w-3.5' />
                </div>
                <span className='text-xs font-semibold text-gray-800 dark:text-gray-200'>
                  Docker • CI/CD
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6 }}
          className='flex justify-center mt-12'>
          <Link href='#about' aria-label='Scroll to About section'>
            <Button
              variant='ghost'
              size='icon'
              className='rounded-full border border-gray-200 dark:border-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-300'>
              <ArrowDown className='h-5 w-5' />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
