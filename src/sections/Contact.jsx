import React from "react"
import { motion, useMotionValue } from "framer-motion"
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react"

/* --- INFO DE CONTACTO --- */
const CONTACT = {
  email: "mvergarato@gmail.com",
  whatsapp: "34686861707",
  github: "https://github.com/mvergarato",
  linkedin: "https://linkedin.com/in/mvergarato",
}

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Contact() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <section
      id="contact"
      className="relative min-h-[85vh] flex items-center bg-[#030014] overflow-hidden py-32 font-sans text-left"
      onMouseMove={handleMouseMove}
    >
      {/* Grid de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Ubicación */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6 md:mb-8 text-slate-500 text-sm md:text-base"
          >
            <MapPin size={20} strokeWidth={1.5} />
            <span className="uppercase tracking-[0.2em] md:tracking-[0.4em] font-medium">
              Sevilla · Badajoz · Remote
            </span>
          </motion.div>

          {/* Titular */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[9.5rem] font-black text-white mb-8 md:mb-10 tracking-tighter uppercase italic leading-[1] md:leading-[0.85]"
          >
            <span className="block pb-2 md:pb-7">¿HABLAMOS?</span>
            <span className="lowercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-500 to-cyan-400 font-light tracking-tight block animate-gradient-x bg-[length:200%_auto] leading-tight py-2">
              hungry for real challenges
            </span>
          </motion.h2>

          {/* Texto */}
          <motion.div
            variants={itemVariants}
            className="text-slate-400 text-lg sm:text-xl md:text-2xl mb-12 md:mb-16 max-w-full md:max-w-2xl font-light leading-relaxed"
          >
            <p>Desarrollador web junior con mentalidad de crecimiento.</p>
            <p className="italic text-slate-500 mt-2">
              Busco mi primera oportunidad en IT para aprender, aportar valor real y evolucionar profesionalmente.
            </p>
          </motion.div>

          {/* Iconos */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-start md:justify-end items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          >
            {[
              { icon: <Phone size={30} />, href: `https://wa.me/${CONTACT.whatsapp}`, label: "WhatsApp" },
              { icon: <Github size={30} />, href: CONTACT.github, label: "Github" },
              { icon: <Linkedin size={30} />, href: CONTACT.linkedin, label: "Linkedin" },
              { icon: <Mail size={30} />, href: `mailto:${CONTACT.email}`, label: "Email" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#fff" }}
                className="text-slate-500 transition-colors"
                aria-label={social.label}
              >
                {React.cloneElement(social.icon, { strokeWidth: 1.5 })}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  )
}
