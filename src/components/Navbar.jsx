import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Terminal, Menu, X } from "lucide-react"

const NAV_ITEMS = [
  { label: "Sobre mí", id: "about" },
  { label: "Proyectos", id: "projects" },
  { label: "Contacto", id: "contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToSection = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0B0C15]/80 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative flex items-center justify-center w-10 h-10 bg-indigo-600/20 rounded-lg overflow-hidden group-hover:bg-indigo-600/30 transition-colors border border-indigo-500/30"
              animate={{ y: [0, -4, 0] }}   // Rebote
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Terminal size={20} className="text-indigo-400" />
            </motion.div>
            <span className="font-bold text-slate-100 tracking-tight text-lg md:text-xl">
              FRONTEND<span className="text-indigo-500">.</span>DEV
            </span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-base md:text-lg font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 text-base font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              Hablemos
            </button>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0C15] pt-28 px-6 md:hidden flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-light text-slate-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
