"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Database,
  Server,
  Layout,
  Terminal,
  Cloud,
  Cpu,
  Sparkles,
  Globe,
  Layers,
  Star,
} from "lucide-react";
import skillCategories from "@/components/datas/skills.json";

// Map icon strings from JSON to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  Code,
  Server,
  Layout,
  Database,
  Cpu,
  Cloud,
  Terminal,
};

const spokenLanguages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Professional Working (Fluent)" },
  { name: "Kannada", level: "Conversational" },
  { name: "Malayalam", level: "Conversational" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter(
          (cat) => cat.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0,
  );

  return (
    <section
      id='skills'
      className='py-24 bg-gray-50/60 dark:bg-gray-900/40 relative overflow-hidden'>
      {/* Background ambient accents */}
      <div className='absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-10 right-0 w-80 h-80 bg-pink-500/10 dark:bg-pink-600/10 rounded-full filter blur-3xl pointer-events-none'></div>

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
              Technical Arsenal
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white'>
              Skills &{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600'>
                Technologies
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4'>
              A comprehensive taxonomy of frameworks, backend architectures,
              databases, cloud DevOps, and development tooling.
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

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-wrap justify-center gap-2 mb-12'>
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700/60"
              }`}>
              All Domains ({totalSkillsCount})
            </button>

            {skillCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Layers;
              const isActive =
                activeCategory.toLowerCase() === cat.category.toLowerCase();
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700/60"
                  }`}>
                  <Icon className='h-3.5 w-3.5' />
                  {cat.category}
                </button>
              );
            })}
          </motion.div>

          {/* Skills Category Grid */}
          <motion.div
            layout
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <AnimatePresence>
              {filteredCategories.map((category, index) => {
                const IconComponent = iconMap[category.icon] || Code;
                return (
                  <motion.div
                    layout
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className='group bg-white/80 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 hover:border-purple-500/50 dark:hover:border-purple-500/50 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5'>
                    <div>
                      {/* Category Header */}
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-3'>
                          <div className='p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform'>
                            <IconComponent className='h-5 w-5' />
                          </div>
                          <div>
                            <h3 className='text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>
                              {category.category}
                            </h3>
                          </div>
                        </div>

                        <span className='px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40'>
                          {category.skills.length} skills
                        </span>
                      </div>

                      <p className='text-xs text-gray-500 dark:text-gray-400 mb-5 leading-relaxed'>
                        {category.description}
                      </p>

                      {/* Skills List with Progress */}
                      <div className='space-y-3.5'>
                        {category.skills.map((skill, sIdx) => (
                          <div key={skill.name} className='group/item'>
                            <div className='flex items-center justify-between text-xs mb-1.5'>
                              <span className='font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5'>
                                {skill.name}
                                {skill.highlight && (
                                  <span
                                    title='Primary Production Stack'
                                    className='inline-flex items-center text-[10px] text-amber-500'>
                                    <Star className='h-3 w-3 fill-amber-400' />
                                  </span>
                                )}
                              </span>
                              <span className='font-mono font-medium text-purple-600 dark:text-purple-400'>
                                {skill.level}%
                              </span>
                            </div>

                            <div className='w-full bg-gray-100 dark:bg-gray-700/60 rounded-full h-2 overflow-hidden'>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={
                                  inView
                                    ? { width: `${skill.level}%` }
                                    : { width: 0 }
                                }
                                transition={{
                                  duration: 0.8,
                                  delay: 0.2 + sIdx * 0.05,
                                  ease: "easeOut",
                                }}
                                className='h-full rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600'></motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Languages I Speak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='mt-16 text-center'>
            <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-2'>
              <Globe className='h-5 w-5 text-purple-600 dark:text-purple-400' />
              Spoken Languages
            </h3>
            <div className='flex flex-wrap justify-center gap-4'>
              {spokenLanguages.map((lang, index) => (
                <div
                  key={index}
                  className='px-5 py-2.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md flex items-center gap-3'>
                  <span className='font-bold text-sm text-gray-900 dark:text-white'>
                    {lang.name}
                  </span>
                  <span className='text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50'>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
