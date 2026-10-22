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
    <main className="min-h-screen bg-white dark:bg-gray-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] overflow-hidden">
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
