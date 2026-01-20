import React from "react"
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"
import { Layers, Database, Cpu, PenTool, Globe, Code } from "lucide-react"

// --- IMPORTACIÓN DE IMÁGENES ---
import reactLogo from "./assets/react-logo.png"
import angularLogo from "./assets/angular-logo.png"
import typescriptLogo from "./assets/typescript-logo.png"
import javascriptLogo from "./assets/javascript-logo.png"
import viteLogo from "./assets/vite-logo.png"
import html5Logo from "./assets/html5-logo.png"
import css3Logo from "./assets/css3-logo.png"
import tailwindcssLogo from "./assets/tailwindcss-logo.png"

import nodejsLogo from "./assets/nodejs-logo.png"
import expressLogo from "./assets/express-logo.png"
import symfonyLogo from "./assets/symfony-logo.png"
import postgresqlLogo from "./assets/postgresql-logo.png"
import mysqlLogo from "./assets/mysql-logo.png"
import sqliteLogo from "./assets/sqlite-logo.png"
import prismaLogo from "./assets/prisma-logo.png"

import gitLogo from "./assets/git-logo.png"
import githubLogo from "./assets/github-logo.png"
import dockerLogo from "./assets/docker-logo.png"
import vscodeLogo from "./assets/vscode-logo.png"
import postmanLogo from "./assets/postman-logo.png"
import vercelLogo from "./assets/vercel-logo.png"
import netlifyLogo from "./assets/netlify-logo.png"

import responsiveLogo from "./assets/responsive-logo.png"
import figmaLogo from "./assets/figma-logo.png"
import canvaLogo from "./assets/canva-logo.png"
import slackLogo from "./assets/slack-logo.png"
import chatgptLogo from "./assets/chatgpt-logo.png"
import geminiIcon from "./assets/gemini-icon.png"
import deepseekLogo from "./assets/deepseek-logo.png"

const SKILLS = [
  {
    category: "Lenguajes & Frontend",
    icon: <Layers size={28} />,
    description: "Frameworks y tecnologías para interfaces modernas.",
    techs: [
      { name: "React", level: 90, img: reactLogo },
      { name: "Angular", level: 80, img: angularLogo },
      { name: "TypeScript", level: 70, img: typescriptLogo },
      { name: "JavaScript", level: 70, img: javascriptLogo },
      { name: "Vite", level: 80, img: viteLogo },
      { name: "HTML5", level: 90, img: html5Logo },
      { name: "CSS3", level: 85, img: css3Logo },
      { name: "TailwindCSS", level: 85, img: tailwindcssLogo },
    ],
  },
  {
    category: "Backend & Bases de Datos",
    icon: <Database size={28} />,
    description: "Tecnologías para servidores y almacenamiento de datos.",
    techs: [
      { name: "Node.js", level: 75, img: nodejsLogo },
      { name: "Express.js", level: 70, img: expressLogo },
      { name: "Symfony", level: 65, img: symfonyLogo },
      { name: "PostgreSQL", level: 80, img: postgresqlLogo },
      { name: "MySQL", level: 75, img: mysqlLogo },
      { name: "SQLite", level: 75, img: sqliteLogo },
      { name: "Prisma", level: 70, img: prismaLogo },
    ],
  },
  {
    category: "Herramientas & Deploy",
    icon: <Cpu size={28} />,
    description: "Automatización, versionado y despliegue continuo.",
    techs: [
      { name: "Git", level: 80, img: gitLogo },
      { name: "GitHub", level: 80, img: githubLogo },
      { name: "Docker", level: 65, img: dockerLogo },
      { name: "VSCode", level: 80, img: vscodeLogo },
      { name: "Postman", level: 60, img: postmanLogo },
      { name: "Vercel", level: 85, img: vercelLogo },
      { name: "Netlify", level: 85, img: netlifyLogo },
    ],
  },
  {
    category: "Diseño, Comunicación & IA",
    icon: <PenTool size={28} />,
    description: "Diseño, colaboración y soporte de inteligencia artificial.",
    techs: [
      { name: "Responsive Design", level: 90, img: responsiveLogo },
      { name: "Figma", level: 80, img: figmaLogo },
      { name: "Canva", level: 100, img: canvaLogo },
      { name: "Slack", level: 100, img: slackLogo },
      { name: "ChatGPT", level: 95, img: chatgptLogo },
      { name: "Gemini", level: 95, img: geminiIcon },
      { name: "DeepSeek", level: 90, img: deepseekLogo },
    ],
  },
]

/* --- VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.97 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 15 }
  }
}

const textRevealVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

/* --- COMPONENTES --- */
function SpotlightCard({ children }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      className="group/card relative rounded-2xl border border-violet-500/20 bg-[#0E0B1F]/90 p-6 sm:p-8 overflow-hidden w-full shadow-[0_0_50px_-15px_rgba(88,28,135,0.4)]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(139,92,246,0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

function TechProgress({ name, level, img }) {
  const color = level < 50 ? 'bg-red-500/30' : level < 75 ? 'bg-yellow-400/30' : 'bg-green-400/30'
  
  return (
    <motion.div className="relative inline-block group/tech cursor-pointer mb-2" whileHover="hover">
      <motion.div
        className={`absolute inset-0 ${color} border border-white/5`}
        initial={{ width: 0 }}
        variants={{ hover: { width: `${level}%` } }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <span className="relative flex items-center gap-3 px-3 py-2 text-sm sm:text-base font-medium text-slate-200 border border-white/10 backdrop-blur-sm transition-colors group-hover/tech:text-white">
        {/* Aquí la prop img ya trae la URL procesada por Vite */}
        <img src={img} alt={name} className="w-4 h-4 sm:w-5 sm:h-5 object-contain filter grayscale group-hover/tech:grayscale-0 transition-all duration-300" />
        {name}
      </span>
    </motion.div>
  )
}

/* --- COMPONENTE PRINCIPAL --- */
export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-32 border-t border-white/5 overflow-hidden flex items-center bg-[#030014]">
      {/* Luces de fondo */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-violet-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 w-full">
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* TEXTO IZQUIERDA */}
          <div className="xl:col-span-5 xl:sticky xl:top-32">
            <motion.span variants={textRevealVariants} className="text-indigo-500 font-black text-xs uppercase tracking-[0.5em] mb-4 sm:mb-6 block">
              Detrás del código
            </motion.span>

            <motion.h2 variants={textRevealVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter mb-6 md:mb-8 italic leading-[1] md:leading-[0.85]">
              Aprender & <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">Construir.</span>
            </motion.h2>

            <motion.p variants={textRevealVariants} className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 md:mb-12 max-w-full md:max-w-xl leading-relaxed font-light">
              Estoy dando mis primeros pasos como desarrollador web, construyendo proyectos, aprendiendo buenas prácticas y mejorando cada día.
              Me interesa el frontend, el diseño y la experiencia de usuario, y estoy motivado por seguir creciendo en un entorno profesional.
              Busco una oportunidad donde aprender haciendo y aportar con compromiso y actitud.
            </motion.p>

            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Globe size={20} />, title: "Mentalidad de crecimiento", sub: "Aprendizaje continuo" },
                { icon: <Code size={20} />, title: "Atención al detalle", sub: "Compromiso visual" }
              ].map((item, i) => (
                <motion.div key={i} variants={textRevealVariants} className="p-4 sm:p-6 bg-white/[0.02] rounded-xl border border-white/5 flex gap-4 hover:bg-white/[0.05] transition-colors duration-500">
                  <div className="text-indigo-400">{item.icon}</div>
                  <div>
                    <span className="text-white text-sm sm:text-base font-bold block mb-0.5">{item.title}</span>
                    <span className="text-slate-500 text-[9px] sm:text-xs uppercase font-black tracking-widest">{item.sub}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CARDS DERECHA */}
          <motion.div 
            variants={containerVariants}
            className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {SKILLS.map((skill, idx) => (
              <SpotlightCard key={idx}>
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover/card:scale-110 group-hover/card:bg-indigo-500/20 transition-all duration-500">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 tracking-tight">{skill.category}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">{skill.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {skill.techs.map((tech) => (
                      <TechProgress key={tech.name} {...tech} />
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}