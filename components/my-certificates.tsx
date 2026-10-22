"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  Calendar,
  ExternalLink,
  Star,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import certificates from "@/components/datas/certificates.json";

const getLevelColor = (level: string) => {
  switch (level) {
    case "Basic":
      return "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";
    case "Intermediate":
      return "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800";
    case "Advanced":
      return "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='certificates' className='py-24 relative overflow-hidden'>
      {/* Background ambient accent */}
      <div className='absolute top-1/3 left-0 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none'></div>

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
              Verified Credentials
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white'>
              Professional{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600'>
                Certifications
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4'>
              Industry certifications validating algorithmic problem-solving,
              frontend frameworks, and full-stack capabilities.
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

          {/* Certificates Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
            {certificates.reverse().map((cert, index) => (
              <motion.div
                key={cert.id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className='transform hover:-translate-y-1.5 transition-all duration-300'>
                <Card className='group bg-white/80 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 hover:border-purple-500/50 dark:hover:border-purple-500/50 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between'>
                  <CardHeader className='pb-3'>
                    <div className='flex items-start justify-between gap-3'>
                      <div className='flex items-start gap-3'>
                        <div className='p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white shadow-md shadow-purple-500/20'>
                          <Award className='h-5 w-5' />
                        </div>
                        <div>
                          <CardTitle className='text-lg font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-gray-900 dark:text-white leading-snug'>
                            {cert.title}
                          </CardTitle>
                          <CardDescription className='text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5'>
                            {cert.issuer}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge
                        className={`text-[10px] font-medium border ${getLevelColor(cert.level)}`}>
                        {cert.level}
                      </Badge>
                    </div>

                    <div className='flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-3 pt-2 border-t border-gray-100 dark:border-gray-700/50'>
                      <Calendar className='w-3.5 h-3.5 text-purple-500' />
                      <span>Issued: {cert.date}</span>
                    </div>
                  </CardHeader>

                  <CardContent className='space-y-4 pt-0'>
                    <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                      {cert.description}
                    </p>

                    <div>
                      <h4 className='text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-200 mb-2'>
                        Skills Validated:
                      </h4>
                      <div className='flex flex-wrap gap-1.5'>
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className='px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40'>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {cert.credentialUrl && (
                      <div className='pt-2'>
                        <Button
                          variant='outline'
                          size='sm'
                          className='w-full text-xs rounded-full border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300'
                          asChild>
                          <a
                            href={cert.credentialUrl}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <ExternalLink className='w-3.5 h-3.5 mr-1.5' />
                            Verify Credential
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='rounded-3xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 backdrop-blur-xl shadow-xl p-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700'>
              <div className='pt-4 md:pt-0'>
                <div className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  {certificates.length}
                </div>
                <div className='text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1'>
                  Certifications Earned
                </div>
              </div>
              <div className='pt-4 md:pt-0'>
                <div className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  {certificates.reduce(
                    (acc, cert) => acc + cert.skills.length,
                    0,
                  )}
                  +
                </div>
                <div className='text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1'>
                  Validated Skills
                </div>
              </div>
              <div className='pt-4 md:pt-0'>
                <div className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  Top 5%
                </div>
                <div className='text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1'>
                  Problem Solving Proficiency
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
