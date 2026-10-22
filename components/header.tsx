"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Packages", href: "#npm-packages" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50 py-3"
          : "bg-transparent py-4",
      )}>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <Link
          href='/'
          className='text-xl font-extrabold tracking-tight text-gray-900 dark:text-white group'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-500 group-hover:to-pink-500 transition-all'>
            Sanjai
          </span>
          kumar V
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex items-center space-x-6 text-sm'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors'>
              {item.name}
            </Link>
          ))}

          {/* Theme Toggle */}
          <Button
            variant='ghost'
            size='icon'
            className='rounded-full'
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label='Toggle theme'>
            <Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className='flex items-center lg:hidden gap-1.5'>
          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 rounded-full'
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label='Toggle theme'>
            <Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          </Button>

          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'>
            {isMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-xl border-b border-gray-200 dark:border-gray-800'>
          <nav className='flex flex-col py-3 px-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors'
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
