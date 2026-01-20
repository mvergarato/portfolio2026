import React from "react"
import { Github, Linkedin, ChevronUp } from "lucide-react"

/* --- INFO DE CONTACTO --- */
const PROFILE = {
  name: "MANUEL VERGARA",
  github: "https://github.com/mvergarato",
  linkedin: "https://linkedin.com/in/mvergarato",
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-white/5 bg-[#05060a] text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex items-center justify-center">

        {/* Izquierda: Logo + Links */}
        <div className="hidden md:flex items-center gap-6 absolute left-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <span className="text-white font-bold tracking-tight">
              {PROFILE.name}
            </span>
          </div>

          <nav className="flex gap-6">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>

        {/* Centro: Copyright */}
        <span className="text-slate-500 text-xs text-center pointer-events-none">
          © {currentYear} {PROFILE.name}. All rights reserved
        </span>

        {/* Derecha: Volver arriba */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
            absolute right-12 flex items-center gap-2
            text-slate-400 font-semibold text-base
            transition-all duration-300
            hover:text-white hover:-translate-y-0.5
          "
        >
          Volver arriba <ChevronUp size={18} />
        </button>
      </div>
    </footer>
  )
}
