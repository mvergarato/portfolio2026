import React from "react"
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"
import { Layers, Database, Cpu, PenTool } from "lucide-react"

// 1. IMPORTACIÓN DINÁMICA DE VITE
// Esto busca todos los .png y .jpg en tu carpeta assets y los prepara para usar.
const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });

// Función auxiliar para obtener la URL procesada por Vite
const getImageUrl = (name) => {
  // Buscamos en el objeto 'images' la ruta que coincida con el nombre del archivo
  const path = Object.keys(images).find((key) => key.endsWith(name));
  return path ? images[path].default : "";
};

/* --- SKILLS DATA --- */
const SKILLS = [
  {
    category: "Lenguajes & Frontend",
    icon: <Layers size={28} />,
    description: "Frameworks y tecnologías para interfaces modernas.",
    techs: [
      { name: "React", level: 90, img: "react-logo.png" },
      { name: "Angular", level: 70, img: "angular-logo.png" },
      { name: "TypeScript", level: 85, img: "typescript-logo.png" },
      { name: "JavaScript", level: 95, img: "javascript-logo.png" },
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
      { name: "Symfony", level: 60, img: "symfony-logo.png" },
      { name: "PostgreSQL", level: 80, img: "postgresql-logo.png" },
      { name: "MySQL", level: 75, img: "mysql-logo.png" },
      { name: "SQLite", level: 65, img: "sqlite-logo.png" },
      { name: "Prisma", level: 70, img: "prisma-logo.png" },
    ],
  },
  {
    category: "Herramientas & Deploy",
    icon: <Cpu size={28} />,
    description: "Automatización, versionado y despliegue continuo.",
    techs: [
      { name: "Git", level: 90, img: "git-logo.png" },
      { name: "GitHub", level: 85, img: "github-logo.png" },
      { name: "Docker", level: 70, img: "docker-logo.png" },
      { name: "VSCode", level: 95, img: "vscode-logo.png" },
      { name: "Postman", level: 80, img: "postman-logo.png" },
      { name: "Vercel", level: 75, img: "vercel-logo.png" },
      { name: "Netlify", level: 70, img: "netlify-logo.png" },
    ],
  },
  {
    category: "Diseño, Comunicación & IA",
    icon: <PenTool size={28} />,
    description: "Diseño, colaboración y soporte de inteligencia artificial.",
    techs: [
      { name: "Responsive Design", level: 90, img: "responsive-logo.png" },
      { name: "Figma", level: 80, img: "figma-logo.png" },
      { name: "Canva", level: 70, img: "canva-logo.png" },
      { name: "Slack", level: 80, img: "slack-logo.png" },
      { name: "ChatGPT", level: 95, img: "chatgpt-logo.png" },
      { name: "DeepSeek", level: 60, img: "deepseek-logo.png" },
      { name: "Gemini", level: 85, img: "chatgpt-logo.png" }, 
    ],
  },
]

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
    <div
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-violet-500/10 bg-[#0E0B1F]/80 p-6 md:p-8 overflow-hidden shadow-2xl"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.1), transparent 80%)
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

function TechProgress({ name, level, img }) {
  const finalSrc = getImageUrl(img);

  return (
    <motion.div
      className="relative flex items-center group cursor-pointer h-12 w-full bg-white/5 rounded-xl border border-white/5 overflow-hidden px-3"
      whileHover="hover"
    >
      {/* Barra de progreso */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 bg-indigo-500/20"
        initial={{ width: 0 }}
        variants={{ hover: { width: `${level}%` } }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="relative z-10 flex items-center gap-3 w-full">
        <div className="w-6 h-6 shrink-0 flex items-center justify-center">
          {finalSrc ? (
            <img 
              src={finalSrc} 
              alt="" 
              className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          ) : (
             <div className="w-2 h-2 bg-white/20 rounded-full" /> // Círculo si no hay imagen
          )}
        </div>
        <span className="text-sm font-medium text-slate-200 truncate">{name}</span>
        <span className="ml-auto text-[10px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#030014] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Stack <span className="text-indigo-500">Tecnológico</span>
          </h2>
          <p className="text-slate-400">Herramientas y tecnologías que utilizo en mis proyectos.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SKILLS.map((skill, idx) => (
            <SpotlightCard key={idx}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                    <p className="text-xs text-slate-500">{skill.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {skill.techs.map((tech) => (
                    <TechProgress 
                      key={tech.name} 
                      name={tech.name} 
                      level={tech.level} 
                      img={tech.img}
                    />
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}