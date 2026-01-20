import React from "react"
import { motion } from "framer-motion"
import { Github, Lock } from "lucide-react" 

const getImageUrl = (name) => `/src/assets/${name}`

const PROJECTS = [
  {
    id: 1,
    title: "AUREL",
    category: "Landing Page Premium",
    description: "Landing de cocinas premium con un enfoque minimalista y lujoso, optimizada para conversión y fluidez visual.",
    stats: ["100/100 SEO", "Full Responsive"],
    tech: [
      { name: "React", img: "react-logo.png" },
      { name: "Vite", img: "vite-logo.png" },
      { name: "TailwindCSS", img: "tailwindcss-logo.png" },
      { name: "CSS3", img: "css3-logo.png" },
    ],
    image: getImageUrl("aurel.png"), 
    links: { code: "https://github.com/mvergarato/aurel" },
  },
  {
    id: 2,
    title: "The Coffee Spot",
    category: "E-Commerce",
    description: "Una tienda online de cafés y accesorios de todo el mundo con carrito funcional y pasarela de pago.",
    stats: ["Dynamic Cart", "Total Calculation"],
    tech: [
      { name: "React", img: "react-logo.png" },
      { name: "Vite", img: "vite-logo.png" },
      { name: "TailwindCSS", img: "tailwindcss-logo.png" },
      { name: "JavaScript", img: "javascript-logo.png" },
    ],
    image: getImageUrl("Coffee-1.png"),
    links: { code: "https://github.com/mvergarato/thecoffespot" },
  },
  {
    id: 3,
    title: "Museo Real",
    category: "Fullstack App",
    description: "Proyecto real para cliente institucional con gestión de inventario, usuarios y multitud de funcionalidades.",
    stats: ["Admin Dashboard", "Auth System"],
    tech: [
      { name: "Angular", img: "angular-logo.png" },
      { name: "TypeScript", img: "typescript-logo.png" },
      { name: "Symfony", img: "symfony-logo.png" },
      { name: "PostgreSQL", img: "postgresql-logo.png" },
      { name: "Docker", img: "docker-logo.png" },
    ],
    image: getImageUrl("museo-1.png"),
    links: { code: null },
  },
]

function ProjectTechBadge({ name, img }) {
  const color = 'bg-indigo-500/30'
  return (
    <motion.div className="relative inline-block group/tech cursor-pointer" whileHover="hover" whileTap={{ scale: 0.95 }}>
      <motion.div
        className={`absolute inset-0 ${color} border border-white/10 rounded-none`}
        initial={{ width: 0 }}
        variants={{ hover: { width: "100%" } }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <span className="relative flex items-center gap-3 px-4 py-2 text-xs font-bold text-slate-300 border border-white/5 backdrop-blur-md rounded-none transition-all duration-300 group-hover/tech:text-white group-hover/tech:border-white/20">
        <img src={getImageUrl(img)} alt={name} className="w-4 h-4 object-contain filter grayscale group-hover/tech:grayscale-0 transition-all duration-300" />
        {name}
      </span>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 border-t border-white/5 bg-[#030014] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Titular con margen inferior reducido */}
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-24 text-center italic"
        >
          Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">Destacados</span>
        </motion.h2>

        {/* Grid con gap reducido (de 60 a 32) */}
        <div className="grid gap-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Contenedor de Imagen */}
                <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
                  <motion.div 
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-none overflow-hidden bg-slate-900 border border-white/10 aspect-video group-hover:border-indigo-500/50 transition-all duration-700 shadow-[0_0_50px_-12px_rgba(79,70,229,0.1)]"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />
                  </motion.div>
                  <div className={`absolute -inset-4 border border-indigo-500/10 -z-10 group-hover:border-indigo-500/30 transition-colors duration-700 ${isEven ? "-rotate-1" : "rotate-1"}`} />
                </div>

                {/* Contenedor de Texto */}
                <div className={`${!isEven ? "lg:order-1" : "lg:pl-10"}`}>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-indigo-500 font-black text-xs tracking-[0.5em] uppercase mb-4 block"
                  >
                    {project.category}
                  </motion.span>
                  
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500 uppercase">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-base leading-relaxed mb-8 font-light max-w-xl">
                    {project.description}
                  </p>
                  
                  {/* Stats con padding reducido */}
                  <div className="grid grid-cols-2 gap-8 mb-8 border-y border-white/5 py-6 relative">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="relative overflow-hidden">
                        <motion.span 
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + (i * 0.1) }}
                          className="block text-white font-black text-2xl tracking-tighter"
                        >
                          {stat.split(" ")[0]}
                        </motion.span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.6 + (i * 0.1) }}
                          className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold"
                        >
                          {stat.split(" ").slice(1).join(" ")}
                        </motion.span>
                      </div>
                    ))}
                  </div>

                  {/* Badges de Tecnología */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((t, i) => (
                      <motion.div
                        key={t.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (i * 0.05) }}
                      >
                        <ProjectTechBadge {...t} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Enlace de Código */}
                  <div className="flex items-center">
                    {project.links.code ? (
                      <a 
                        href={project.links.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-4 text-slate-400 hover:text-white font-black text-xs uppercase tracking-[0.3em] transition-all duration-300"
                      >
                        <div className="relative">
                           <Github size={20} className="text-slate-500 group-hover/link:text-indigo-400 transition-colors duration-300" />
                           <motion.div 
                             className="absolute -inset-2 bg-indigo-500/20 rounded-full blur-md opacity-0 group-hover/link:opacity-100"
                           />
                        </div>
                        <span className="relative">
                          Ver Código
                          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-indigo-500 group-hover/link:w-full transition-all duration-500" />
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 text-slate-600 font-black text-xs uppercase tracking-[0.2em] cursor-not-allowed opacity-50">
                        <Lock size={18} />
                        <span>Código no disponible</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}