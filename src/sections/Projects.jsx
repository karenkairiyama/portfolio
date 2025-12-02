// src/sections/Projects.jsx
import { useState } from "react";
import ProjectDetails from "../components/ProjectDetails"; 
import { myProjects } from "../constants"; 
import { motion, useMotionValue, useSpring } from "motion/react";

const haulStickers = {
  "E-commerce Platform": "/assets/stickers/zapatos.png",
  "Authentication & Authorization System": "/assets/stickers/laptop.png",
  "Blazor Web App": "/assets/stickers/rhode.png",
  "C++ Game Engine": "/assets/stickers/dolce.png",
  "WordPress Custom Theme": "/assets/stickers/wallet.png",
  "Online Learning Platform": "/assets/stickers/broche.png",
};

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // --- CONFIGURACIÓN DE POSICIONES ---
  const stickerLayouts = {
    "E-commerce Platform": { 
      pos: "top-[30%] left-[80%] md:top-[25%] md:left-[20%]", 
      rotate: 5, 
      width: "w-[120px] md:w-[180px]" 
    },
    "Authentication & Authorization System": { 
      pos: "top-[35%] right-[20%] md:top-[30%] md:right-[20%]", 
      rotate: -10, 
      width: "w-[130px] md:w-[200px]" 
    },
    "Blazor Web App": { 
      pos: "top-[55%] left-[10%] md:top-[50%] md:left-[15%]", 
      rotate: 15, 
      width: "w-[110px] md:w-[160px]" 
    },
    "C++ Game Engine": { 
      pos: "top-[60%] right-[5%] md:top-[55%] md:right-[15%]", 
      rotate: -5, 
      width: "w-[120px] md:w-[190px]" 
    },
    "WordPress Custom Theme": { 
      pos: "top-[15%] left-[40%] md:top-[10%] md:left-[45%]", 
      rotate: 0, 
      width: "w-[100px] md:w-[150px]" 
    },
    "Online Learning Platform": { 
      pos: "top-[40%] left-[5%] md:top-[35%] md:left-[10%]", 
      rotate: 10, 
      width: "w-[120px] md:w-[170px]" 
    },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex justify-center min-h-screen overflow-hidden"
    >
      <div className="relative w-full h-full max-w-6xl mx-auto">

        {/* Título */}
        <div className="absolute top-[10%] left-[10%] z-10">
          <h2 className="text-xl md:text-2xl" style={{ fontFamily: 'Le Jour Serif' }}>Haul de</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-[#5170ff]">EXPERIENCIAS</h1>
        </div>
        
        {/* Bolsa */}
        <img 
          src="/assets/stickers/bag.png" 
          className="absolute z-20 
                     w-[300px] bottom-[10%] left-[50%] -translate-x-1/2
                     md:w-[500px] md:bottom-[30%]"
        />

        {/* Stickers */}
        {myProjects.map((project) => {
          // 1. Busca el layout exacto O usa el primero como respaldo (Safety Fallback)
          const layout = stickerLayouts[project.title] || stickerLayouts["E-commerce Platform"];
          
          const imageSrc = haulStickers[project.title] || "/assets/stickers/zapatos.png";

          return (
            <motion.img
              key={project.id}
              src={imageSrc}
              
              // 2. Construcción de clases limpia
              className={`absolute z-30 cursor-pointer ${layout.width} ${layout.pos}`}
              
              style={{ rotate: layout.rotate }}
              
              onMouseEnter={() => setPreview(project.image)}
              onMouseLeave={() => setPreview(null)}
              onClick={() => setSelectedProject(project)}

              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
      </div>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
      
      {selectedProject && (
        <ProjectDetails
          {...selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
      
    </section>
  );
};

export default Projects;