import About from "@/components/About"
import BackgroundAnimation from "@/components/BackgroundAnimation"
import Certificates from "@/components/Cerfificates"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <BackgroundAnimation />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
