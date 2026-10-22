import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeProvider from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanjaikumar Veerasamy | Senior Full Stack Developer & Software Engineer",
  description: "Senior Full Stack Developer specializing in Next.js, NestJS, TypeScript, React, Node.js, and AWS with 4+ years of professional engineering experience building scalable web and AI-driven platforms.",
  keywords: ["Sanjaikumar Veerasamy", "Full Stack Developer", "Software Engineer", "Next.js", "NestJS", "React", "TypeScript", "Node.js", "AWS", "LMS", "Portfolio"],
  authors: [{ name: "Sanjaikumar Veerasamy" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
