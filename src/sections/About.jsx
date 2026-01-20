import React from "react"
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"
import { Layers, Database, Cpu, PenTool, Globe, Code } from "lucide-react"

const getImageUrl = (name) => `/src/assets/${name}`

const SKILLS = [
  {
    category: "Lenguajes & Frontend",
    icon: <Layers size={28} />,
    description: "Frameworks y tecnologías para interfaces modernas.",
    techs: [
      { name: "React", level: 90, img: "react-logo.png" },
      { name: "Angular", level: 80, img: "angular-logo.png" },
      { name: "TypeScript", level: 70, img: "typescript-logo.png" },
      { name: "JavaScript", level: 70, img: "javascript-logo.png" },
      { name: "Vite", level: 80, img: "vite-logo.png" },
      { name: "HTML5", level: 90, img: "html5-logo.png" },
      { name: "CSS3", level: 85, img: "css3-logo.png" },
      { name: "TailwindCSS", level: 85, img: "tailwindcss-logo.png" },
    ],
  },
  {
    category: "Backend & Bases de Datos",
    icon: <Database size={28} />,
    description: "Tecnologías para servidores y almacenamiento de datos.",
    techs: [
      { name: "Node.js", level: 75, img: "nodejs-logo.png" },
      { name: "Express.js", level: 70, img: "express-logo.png" },
      { name: "Symfony", level: 65, img: "symfony-logo.png" },
      { name: "PostgreSQL", level: 80, img: "postgresql-logo.png" },
      { name: "MySQL", level: 75, img: "mysql-logo.png" },
      { name: "SQLite", level: 75, img: "sqlite-logo.png" },
      { name: "Prisma", level: 70, img: "prisma-logo.png" },
    ],
  },
  {
    category: "Herramientas & Deploy",
    icon: <Cpu size={28} />,
    description: "Automatización, versionado y despliegue continuo.",
    techs: [
      { name: "Git", level: 80, img: "git-logo.png" },
      { name: "GitHub", level: 80, img: "github-logo.png" },
      { name: "Docker", level: 65, img: "docker-logo.png" },
      { name: "VSCode", level: 80, img: "vscode-logo.png" },
      { name: "Postman", level: 60, img: "postman-logo.png" },
      { name: "Vercel", level: 85, img: "vercel-logo.png" },
      { name: "Netlify", level: 85, img: "netlify-logo.png" },
    ],
  },
  {
    category: "Diseño, Comunicación & IA",
    icon: <PenTool size={28} />,
    description: "Diseño, colaboración y soporte de inteligencia artificial.",
    techs: [
      { name: "Responsive Design", level: 90, img: "responsive-logo.png" },
      { name: "Figma", level: 80, img: "figma-logo.png" },
      { name: "Canva", level: 100, img: "canva-logo.png" },
      { name: "Slack", level: 100, img: "slack-logo.png" },
      { name: "ChatGPT", level: 95, img: "chatgpt-logo.png" },
      { name: "Gemini", level: 95, img: "gemini-icon.png" },
      { name: "DeepSeek", level: 90, img: "deepseek-logo.png" },
    ],
  },
]

/* --- VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
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
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}

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
      className="group/card relative rounded-2xl border border-violet-500/20 bg-[#0E0B1F]/90 p-8 overflow-hidden w-full shadow-[0_0_50px_-15px_rgba(88,28,135,0.4)]"
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
      <span className="relative flex items-center gap-4 px-3 py-2 text-sm font-medium text-slate-200 border border-white/10 backdrop-blur-sm transition-colors group-hover/tech:text-white">
        <img src={getImageUrl(img)} alt={name} className="w-3.5 h-3.5 object-contain filter grayscale group-hover/tech:grayscale-0 transition-all duration-300" />
        {name}
      </span>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-32 border-t border-white/5 overflow-hidden flex items-center bg-[#030014]">
      {/* Luces de fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-8 w-full">
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-12 gap-20 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* TEXTO IZQUIERDA */}
          <div className="xl:col-span-5 sticky top-32">
            <motion.span variants={textRevealVariants} className="text-indigo-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block">
              Detrás del código
            </motion.span>

            <motion.h2 variants={textRevealVariants} className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 italic leading-[0.85]">
              Aprender & <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">Construir.</span>
            </motion.h2>

            <motion.p variants={textRevealVariants} className="text-xl md:text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
              Estoy dando mis primeros pasos como desarrollador web, construyendo proyectos, aprendiendo buenas prácticas y mejorando cada día.
              Me interesa el frontend, el diseño y la experiencia de usuario, y estoy motivado por seguir creciendo en un entorno profesional.
              Busco una oportunidad donde aprender haciendo y aportar con compromiso y actitud.
            </motion.p>

            <motion.div variants={containerVariants} className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Globe size={20} />, title: "Mentalidad de crecimiento", sub: "Aprendizaje continuo" },
                { icon: <Code size={20} />, title: "Atención al detalle", sub: "Compromiso visual" }
              ].map((item, i) => (
                <motion.div key={i} variants={textRevealVariants} className="p-6 bg-white/[0.02] rounded-xl border border-white/5 flex gap-4 hover:bg-white/[0.05] transition-colors duration-500">
                  <div className="text-indigo-400">{item.icon}</div>
                  <div>
                    <span className="text-white text-sm font-bold block mb-0.5">{item.title}</span>
                    <span className="text-slate-500 text-[9px] uppercase font-black tracking-widest">{item.sub}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CARDS DERECHA */}
          <motion.div 
            variants={containerVariants}
            className="xl:col-span-7 grid sm:grid-cols-2 gap-6"
          >
            {SKILLS.map((skill, idx) => (
              <SpotlightCard key={idx}>
                <div className="flex flex-col gap-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover/card:scale-110 group-hover/card:bg-indigo-500/20 transition-all duration-500">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{skill.category}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">{skill.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
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