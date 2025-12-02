// src/components/HeroCollage.jsx
import { motion, useAnimation } from "framer-motion"; // <-- 1. IMPORTAMOS useAnimation


// --- Variantes (Las mismas que tenías) ---
const fotoGinghamVariants = {
  rest: { 
    opacity: 1, 
    scale: 0.95, 
    rotate: -10, 
    y: 0 
  },
  hover: { 
    opacity: 1, 
    scale: 1.1, 
    rotate: -5,
    y: -70, // ¡Tu salto!
    transition: { type: "spring", stiffness: 400, damping: 12 }
  }
};

const fotoNormalVariants = {
  rest: { 
    opacity: 1, 
    scale: 0.8, 
    rotate: -30, 
    y: 0 
  },
  hover: { 
    opacity: 1, 
    scale: 1.1, 
    rotate: 3,
    y: -30, // ¡Tu salto!
    transition: { type: "spring", stiffness: 400, damping: 12 }
  }
};
// --- Fin de Variantes ---

const HeroCollage = () => {
  // 2. CREAMOS LOS "CONTROLES" DE ANIMACIÓN
  const ginghamControls = useAnimation();
  const normalControls = useAnimation();

  // 3. CREAMOS LAS FUNCIONES QUE "DISPARAN" LA ANIMACIÓN
  const handleHoverStart = () => {
    ginghamControls.start("hover");
    normalControls.start("hover");
  };

  const handleHoverEnd = () => {
    ginghamControls.start("rest");
    normalControls.start("rest");
  };

  return (
    // Ya no necesitamos 'initial' o 'whileHover' aquí
    <motion.div
      className="absolute inset-0 w-full h-full"
    >
      
      {/* CAPA 1: Tostada de Atrás (con tus estilos) */}
      <motion.img
        src="/assets/tostada-sola.png"
        className="absolute z-[2] 
                   w-[300px] top-[30%] left-[15%] 
                   md:w-[380px] md:top-[35%] md:left-[38%]"
        style={{ rotate: -15 }}
      />
      
      {/* CAPA 2: Foto Gingham (AHORA USA LOS CONTROLES) */}
      <motion.img
        src="/assets/foto-gingham.png"
        className="absolute z-[3] 
                   w-[250px] top-[35%] left-[40%] 
                   md:w-[380px] md:top-[15%] md:left-[50%]"
        variants={fotoGinghamVariants}
        animate={ginghamControls} // <-- 4. ASIGNAMOS EL CONTROL
        initial="rest"
      />
      
      {/* CAPA 3: Foto Normal (AHORA USA LOS CONTROLES) */}
      <motion.img
        src="/assets/foto-normal.png"
        className="absolute z-[4] 
                   w-[550px] top-[10%] left-[-5%] 
                   md:w-[700px] md:top-[-10%] md:left-[25%]"
        style={{ rotate: -15 }}
        variants={fotoNormalVariants}
        animate={normalControls} // <-- 4. ASIGNAMOS EL CONTROL
        initial="rest"
      />

      {/* CAPA 4: Tostada de Manteca (¡EL DISPARADOR!) */}
      <motion.img
        src="/assets/tostada-manteca.png"
        className="absolute z-[15] cursor-pointer
                   w-[300px] top-[54%] right-[5%] 
                   md:w-[400px] md:top-[45%] md:right-[22%]"
        style={{ rotate: 15 }}
        // Esta animación crea el "pulso" constante
        animate={{
          scale: [1, 1.03, 1], // Crece un 5% y vuelve a la normalidad
        }}
        transition={{
          duration: 2, // 2 segundos por pulso
          repeat: Infinity, // Repetir por siempre
          ease: "easeInOut"
        }}
        
        // 5. ASIGNAMOS LOS "DISPARADORES" DE EVENTOS
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        onTapStart={handleHoverStart} 
        onTap={handleHoverEnd}
        onTapCancel={handleHoverEnd}
      />

      
    </motion.div>
  );
};

export default HeroCollage;