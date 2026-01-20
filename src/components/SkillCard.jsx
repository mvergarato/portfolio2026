// src/components/SkillCard.jsx
import React from "react";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div className="relative group p-1 rounded-[2.5rem] overflow-visible transition-all duration-500 hover:scale-[1.02]">
      {/* Gradiente de fondo */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`}
      />

      {/* Contenido de la tarjeta */}
      <div className="relative min-h-[350px] bg-slate-950 p-10 rounded-[2.2rem] flex flex-col">
        {/* Icono principal */}
        <div
          className={`w-14 h-14 mb-8 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg`}
        >
          <Icon className="w-7 h-7" />
        </div>

        {/* Título de la categoría */}
        <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
          {skill.category}
        </h3>

        {/* Lista de items */}
        <div className="space-y-4 mt-auto">
          {skill.items.map((item) => (
            <div key={item} className="flex items-center gap-3 group/item">
              <div
                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color} opacity-50 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all`}
              />
              <span className="text-slate-400 group-hover/item:text-white transition-colors font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
