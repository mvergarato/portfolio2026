import React from "react"

// --- GLOBAL EFFECTS ---
import BackgroundManager from "./components/BackGroundManager"
import MouseFollower from "./components/MouseFollower"
import ScrollProgress from "./components/ScrollProgress"

// --- COMPONENTS ---
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// --- SECTIONS ---
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

export default function App() {
  // --- FUNCIÓN PARA SCROLL SUAVE ---
  const scrollTo = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* BARRA DE SCROLL ARRIBA */}
      <ScrollProgress />

      {/* EFECTOS GLOBALES */}
      <BackgroundManager />
      <MouseFollower />

      {/* NAVBAR */}
      <Navbar />

      {/* SECCIONES */}
      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}
