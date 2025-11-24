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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const roles = [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(
            0,
            charIndex - 1
          );
        }
        charIndex--;
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(
            0,
            charIndex + 1
          );
        }
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(type, typingSpeed);
    };

    const typingTimeout = setTimeout(type, 1000);
    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <section
      id='home'
      className='relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute top-20 left-10 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
      <div className='absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
      <div className='absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className='order-2 lg:order-1'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4'>
                Hi, I&apos;m{" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  Sanjaikumar
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <h2 className='text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6'>
                I&apos;m a{" "}
                <span ref={typingRef} className='text-purple-600'></span>
                <span className='animate-blink'>|</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <p className='text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl'>
                With 4+ years of programming experience and 3+ years of
                professional work, I&apos;m passionate about exploring new
                technologies and collaborating with enthusiastic, innovative
                people. Let&apos;s build and create together!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='flex flex-wrap gap-4 mb-10'>
              <Link
                href='https://github.com/sanjaikumarv'
                target='_blank'
                rel='noopener noreferrer'>
                <Button
                  variant='outline'
                  className='gap-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300 hover:scale-105'>
                  <Github size={18} />
                  GitHub
                </Button>
              </Link>
              <Link
                href='https://www.linkedin.com/in/sanjaikumarv'
                target='_blank'
                rel='noopener noreferrer'>
                <Button
                  variant='outline'
                  className='gap-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300 hover:scale-105'>
                  <Linkedin size={18} />
                  LinkedIn
                </Button>
              </Link>
              <Link href='mailto:devsanjaikumarv@gmail.com'>
                <Button
                  variant='outline'
                  className='gap-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300 hover:scale-105'>
                  <Mail size={18} />
                  Email
                </Button>
              </Link>
              <Link href='tel:+916383528363'>
                <Button
                  variant='outline'
                  className='gap-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300 hover:scale-105'>
                  <Phone size={18} />
                  Call
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <Link
                href='https://drive.google.com/file/d/1iQ2upc4ydrZfy_62GJNC-vkfeCo3DOLt/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'>
                <Button className='gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 hover:scale-105'>
                  <Download size={18} />
                  Download Resume
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='order-1 lg:order-2 flex justify-center'>
            <div className='relative w-64 h-64 md:w-80 md:h-80'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse'></div>
              <div className='absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-gray-900'>
                <Image
                  src='/avator.png'
                  alt='Sanjaikumar Veerasamy'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className='flex justify-center mt-10'>
          <Link href='#about'>
            <Button
              variant='ghost'
              size='icon'
              className='rounded-full border border-gray-200 dark:border-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-300'>
              <ArrowDown className='h-6 w-6' />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
