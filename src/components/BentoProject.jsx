// src/components/BentoProject.jsx
import React from "react";
import { Github, ArrowUpRight } from "lucide-react";

const BentoProject = ({ project }) => (
  <div className={`group relative bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500 ${project.featured ? 'md:col-span-2' : ''}`}>
    
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-70" />
    
    <div className="aspect-[16/10] overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
    </div>
    
    <div className="absolute bottom-0 left-0 w-full p-8 z-20">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(t => (
          <span key={t} className="text-[10px] font-bold px-3 py-1 bg-indigo-500/20 backdrop-blur-md text-indigo-300 rounded-full border border-indigo-500/30">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm max-w-sm">{project.desc}</p>
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white shadow-lg shadow-indigo-600/20">
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default BentoProject;
