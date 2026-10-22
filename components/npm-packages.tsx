"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Calendar, ExternalLink, Github, Download, Star, Copy, Check, Terminal, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface NpmPackageData {
  downloads: {
    monthly: number;
    weekly: number;
  };
  dependents: number;
  updated: string;
  searchScore: number;
  package: {
    name: string;
    keywords: string[];
    version: string;
    description: string;
    sanitized_name: string;
    publisher: {
      actor: {
        name: string;
        type: string;
        email: string;
      };
      email: string;
      username: string;
    };
    maintainers: Array<{
      email: string;
      username: string;
    }>;
    license: string;
    date: string;
    links: {
      npm: string;
      homepage?: string;
      repository?: string;
      bugs?: string;
    };
  };
  score: {
    final: number;
    detail: {
      popularity: number;
      quality: number;
      maintenance: number;
    };
  };
  flags: {
    insecure: number;
  };
}

const getCategoryFromKeywords = (keywords: string[] = []): string => {
  const keywordStr = keywords.join(" ").toLowerCase();

  if (keywordStr.includes("mongodb") || keywordStr.includes("database") || keywordStr.includes("aggregation")) {
    return "Database Utility";
  } else if (keywordStr.includes("react") || keywordStr.includes("vue") || keywordStr.includes("angular")) {
    return "UI Framework";
  } else if (keywordStr.includes("typescript") || keywordStr.includes("utils") || keywordStr.includes("helpers")) {
    return "Developer Tool";
  } else if (keywordStr.includes("tool") || keywordStr.includes("cli") || keywordStr.includes("generator")) {
    return "CLI / Tool";
  } else {
    return "Open Source Lib";
  }
};

const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  } catch {
    return "Recent";
  }
};

export default function NpmPackages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [npmPackages, setNpmPackages] = useState<{ objects: NpmPackageData[] }>({ objects: [] });
  const [copiedPkg, setCopiedPkg] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://registry.npmjs.org/-/v1/search?text=maintainer:sanjaikumarv&size=250");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        if (data?.objects && data.objects.length > 0) {
          setNpmPackages(data);
        }
      } catch (err) {
        console.error("NPM fetch error:", err);
      }
    };
    fetchData();
  }, []);

  const handleCopy = (pkgName: string) => {
    navigator.clipboard.writeText(`npm i ${pkgName}`);
    setCopiedPkg(pkgName);
    setTimeout(() => setCopiedPkg(null), 2000);
  };

  const totalWeekly = npmPackages.objects.reduce((acc, p) => acc + (p?.downloads?.weekly || 0), 0);

  return (
    <section id='npm-packages' className='py-24 bg-gray-50/50 dark:bg-gray-900/40 relative overflow-hidden'>
      {/* Background ambient accent */}
      <div className='absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none'></div>

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
              Open Source Contributions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white'>
              Published{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600'>
                NPM Packages
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4'>
              Publicly available utilities built to streamline query generation, state utilities, and full-stack developer ergonomics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={inView ? { opacity: 1, width: "80px" } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full'></motion.div>
          </div>

          {/* Packages Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
            {npmPackages.objects.map((pkgData, index) => {
              const pkg = pkgData.package;
              const category = getCategoryFromKeywords(pkg.keywords || []);
              const isCopied = copiedPkg === pkg.name;

              return (
                <motion.div
                  key={pkg.name || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className='transform hover:-translate-y-1.5 transition-all duration-300'>
                  <Card className='group bg-white/80 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 hover:border-purple-500/50 dark:hover:border-purple-500/50 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between'>
                    <CardHeader className='pb-3'>
                      <div className='flex items-start justify-between gap-3'>
                        <div className='flex items-center gap-3'>
                          <div className='p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white shadow-md shadow-purple-500/20'>
                            <Package className='h-5 w-5' />
                          </div>
                          <div>
                            <CardTitle className='text-lg font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-gray-900 dark:text-white'>
                              {pkg.name}
                            </CardTitle>
                            <CardDescription className='text-xs font-semibold text-purple-600 dark:text-purple-400'>
                              v{pkg.version} • {category}
                            </CardDescription>
                          </div>
                        </div>

                        <Badge className='text-[10px] font-medium bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40'>
                          MIT
                        </Badge>
                      </div>

                      <div className='flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-3 pt-2 border-t border-gray-100 dark:border-gray-700/50'>
                        <div className='flex items-center gap-1.5'>
                          <Calendar className='w-3.5 h-3.5 text-purple-500' />
                          <span>{formatDate(pkg.date)}</span>
                        </div>
                        {pkgData?.downloads?.weekly !== undefined && (
                          <div className='flex items-center gap-1.5 font-medium text-purple-600 dark:text-purple-400'>
                            <Download className='w-3.5 h-3.5' />
                            <span>{pkgData.downloads.weekly.toLocaleString()} / week</span>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className='space-y-4 pt-0'>
                      <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                        {pkg.description || "A lightweight npm package designed for developer productivity and clean architecture."}
                      </p>

                      {/* Install Command One-Click Copy */}
                      <div className='flex items-center justify-between p-2 rounded-xl bg-gray-100 dark:bg-gray-950/70 border border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-700 dark:text-gray-300'>
                        <div className='flex items-center gap-2 overflow-hidden text-ellipsis'>
                          <Terminal className='h-3.5 w-3.5 text-purple-500 flex-shrink-0' />
                          <span className='truncate'>npm i {pkg.name}</span>
                        </div>
                        <button
                          type='button'
                          onClick={() => handleCopy(pkg.name)}
                          className='p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ml-2 flex-shrink-0'
                          title='Copy install command'>
                          {isCopied ? (
                            <Check className='h-3.5 w-3.5 text-emerald-500' />
                          ) : (
                            <Copy className='h-3.5 w-3.5 text-gray-500' />
                          )}
                        </button>
                      </div>

                      {/* Keywords */}
                      {pkg.keywords && pkg.keywords.length > 0 && (
                        <div className='flex flex-wrap gap-1'>
                          {pkg.keywords.slice(0, 5).map((keyword, kIdx) => (
                            <span
                              key={kIdx}
                              className='px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'>
                              #{keyword}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Action Links */}
                      <div className='flex gap-2 pt-2'>
                        {pkg.links?.npm && (
                          <Button
                            variant='outline'
                            size='sm'
                            className='flex-1 h-8 text-xs rounded-lg border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/40'
                            asChild>
                            <a href={pkg.links.npm} target='_blank' rel='noopener noreferrer'>
                              <ExternalLink className='w-3 h-3 mr-1.5' />
                              NPM Page
                            </a>
                          </Button>
                        )}
                        {pkg.links?.repository && (
                          <Button
                            variant='outline'
                            size='sm'
                            className='flex-1 h-8 text-xs rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                            asChild>
                            <a href={pkg.links.repository} target='_blank' rel='noopener noreferrer'>
                              <Github className='w-3 h-3 mr-1.5' />
                              Source
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='rounded-3xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 backdrop-blur-xl shadow-xl p-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700'>
              <div className='pt-4 md:pt-0'>
                <div className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  {npmPackages.objects.length || 5}
                </div>
                <div className='text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1'>
                  Published Packages
                </div>
              </div>
              <div className='pt-4 md:pt-0'>
                <div className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  {totalWeekly > 0 ? `${totalWeekly.toLocaleString()}+` : "Active"}
                </div>
                <div className='text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1'>
                  Weekly Downloads
                </div>
              </div>
              <div className='pt-4 md:pt-0'>
                <div className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                  100%
                </div>
                <div className='text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1'>
                  Open-Source (MIT)
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
