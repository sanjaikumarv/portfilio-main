import About from "@/components/about";
import BackgroundAnimation from "@/components/background-animation";
import Certificates from "@/components/my-certificates";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

import NpmPackages from "@/components/npm-packages";
import Skills from "@/components/skills";

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
      <NpmPackages />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
