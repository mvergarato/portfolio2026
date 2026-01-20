// src/sections/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import TipewriterName from "../components/TipewriterName";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import ManuelImg from "../assets/manuel.jpg"; 

// --- INFO PERSONAL ---
const PERSONAL_INFO = {
  name: "MANUEL VERGARA",
  role: "Junior Frontend Developer",
  tagline: "Aprendiendo buenas prácticas. Cuidando los detalles. Mejorando cada día.",
  bio: "Ingeniero de software obsesionado con la perfección del píxel y la eficiencia del frontend. Transformo ideas complejas en productos digitales elegantes y robustos.",
  email: "mvergarato@gmail.com",
  whatsapp: "+34686861707",
  location: "Remote / Global",
  image: ManuelImg,
  github: "https://github.com/mvergarato",
  linkedin: "https://www.linkedin.com/in/mvergarato/"
};

export default function Hero({ scrollTo }) {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 relative overflow-hidden
                        pt-[100px] md:pt-[120px] 
                        bg-gradient-to-b from-[#0a081f] to-[#030014]"> 
      {/* Explicación del fondo:
          #0a081f: Lila/Azul muy oscuro para la parte superior.
          #030014: Tu color de la sección About para la base (transición perfecta).
      */}

      {/* --- ANIMATED BACKGROUND GRADIENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-30">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" 
        />
      </div>

      {/* --- GRID CONTENIDO --- */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* --- TEXTO IZQUIERDA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">
              Disponible para nuevos proyectos
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 tracking-tighter leading-[0.9]">
            <TipewriterName text={PERSONAL_INFO.name} />
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
            {PERSONAL_INFO.tagline}
            <br />
            <span className="text-indigo-400 font-normal">Creciendo como desarrollador web, línea a línea.</span>
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-8">
            <button 
              onClick={() => scrollTo && scrollTo("projects")}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2 group shadow-lg shadow-white/5"
            >
              Ver Proyectos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* --- ICONOS DE CONTACTO --- */}
            <div className="flex gap-4 items-center">
              {[
                { icon: <Github size={20} />, href: PERSONAL_INFO.github },
                { icon: <Linkedin size={20} />, href: PERSONAL_INFO.linkedin },
                { icon: <Mail size={20} />, href: `mailto:${PERSONAL_INFO.email}` },
                { icon: <Phone size={20} />, href: `https://wa.me/${PERSONAL_INFO.whatsapp.replace(/\D/g,'')}` }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" 
                   className="p-3 text-slate-400 hover:text-white transition-all bg-white/5 rounded-full hover:bg-white/10 hover:-translate-y-1">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- FOTO DERECHA --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative group w-full max-w-md mx-auto mt-12 md:mt-0"
        >
          {/* Fondo blur más acorde al lila */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />

          {/* Imagen con zoom y efecto grayscale → color */}
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl bg-[#0a081f]">
            <motion.img
              src={PERSONAL_INFO.image}
              alt={PERSONAL_INFO.name}
              initial={{ scale: 1.15 }}       
              whileHover={{ scale: 1.25 }}      
              transition={{ duration: 0.7 }}    
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}