// src/components/ParallaxFondo.jsx
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxFondo = () => {
  const { scrollYProgress } = useScroll();

  // Nube del Medio: Se mueve MUY rápido para dar profundidad
  const yNubeFrontal = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);

  return (
    <div className="absolute inset-0">
      
      {/* Nube movida al medio y detrás del collage */}
      <motion.img
        src="/assets/nube-frente-1.png"
        className="absolute 
                   w-[600px] top-[10%] left-[-5%]
                   md:w-[800px] md:top-[10%] md:left-[20%]
                   z-[1]" // <--- Z-INDEX CAMBIADO A 1 (detrás del collage)
        style={{ y: yNubeFrontal }}
        animate={{
          x: ["-10px", "10px"], // Se mueve 10px a la izq y 10px a la der
        }}

        // 3. TRANSICIÓN (para que la animación sea un bucle)
        transition={{
          x: { // Aplicamos la transición solo a 'x'
            repeat: Infinity,       // Repetir por siempre
            repeatType: "reverse",  // Va y vuelve (el efecto "flote")
            duration: 4,            // 4 segundos para un flote suave
            ease: "easeInOut"
          }
        }}
      />
    </div>
  );
};

export default ParallaxFondo;