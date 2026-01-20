import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// --- GRADIENTES POR SECCIÓN ---
const backgrounds = {
  hero: "linear-gradient(to bottom right, #1b1a2e, #2c2b4a, #3b3a5f)",
  projects: "linear-gradient(to bottom right, #2c2b4a, #3b3a5f, #1b1a2e)",
  skills: "linear-gradient(to bottom right, #3b3a5f, #4a496f, #2c2b4a)",
  about: "linear-gradient(to bottom right, #1a1825, #262537, #3a3a4d)",
  contact: "linear-gradient(to bottom right, #2c2b4a, #3b3a5f, #1a1825)",
};

const sectionIds = ["hero", "projects", "skills", "about", "contact"];

export default function BackgroundManager() {
  const controls = useAnimation();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // --- OBSERVADOR DE SECCIONES ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // cambia a la sección cuando está al menos 50% visible
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    controls.start({
      background: backgrounds[activeSection],
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  }, [activeSection]);

  return (
    <motion.div
      className="fixed inset-0 -z-20"
      animate={controls}
      initial={{ background: backgrounds.hero }}
    />
  );
}
