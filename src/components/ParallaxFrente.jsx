import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxFrente = () => {
  const { scrollYProgress } = useScroll();

  // Nube 1: Se mueve lento
  const yNube1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // NUEVA: Animación horizontal (se mueve a la izquierda)
  const xNube1 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  // NUEVA: Animación de opacidad (se desvanece)
  const opacityNube1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
// --- Nube 2 (Derecha) ---
  const yNube2 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  // NUEVA: Animación horizontal (se mueve a la derecha)
  const xNube2 = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  // NUEVA: Animación de opacidad (se desvanece)
  const opacityNube2 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="absolute inset-0">
      
      {/* Nube 1 (Movida abajo a la izquierda) */}
      <motion.img
        src="/assets/nube-fondo-1.png"
        className="absolute 
                   w-[500px] bottom-0 left-0
                   md:w-[800px] md:bottom-0 md:left-[0%] z-[3]"
        style={{ y: yNube1,
                x: xNube1,
                opacity: opacityNube1
        }}
        animate={{
          x: ["-10px", "10px"], // Se mueve 10px a la izq y 10px a la der
        }}

        // 3. TRANSICIÓN (para que la animación sea un bucle)
      /*  transition={{
          x: { // Aplicamos la transición solo a 'x'
            repeat: Infinity,       // Repetir por siempre
            repeatType: "reverse",  // Va y vuelve (el efecto "flote")
            duration: 3,            // 4 segundos para un flote suave
            ease: "easeInOut"
          }
        }}*/
      />

      {/* Nube 2 (Movida abajo a la derecha) */}
      <motion.img
        src="/assets/nube-fondo-2.png"
        className="absolute 
                   w-[400px] bottom-0 right-[0%]
                   md:w-[600px] md:bottom-0 md:right-0 z-[3]"
        style={{ y: yNube2,
          x: xNube2,
          opacity: opacityNube2 }}
        
        animate={{
          x: ["0px", "50px"], 
        }}

        // 3. TRANSICIÓN (para que la animación sea un bucle)
       /* transition={{
          x: { // Aplicamos la transición solo a 'x'
            repeat: Infinity,       // Repetir por siempre
            repeatType: "reverse",  // Va y vuelve (el efecto "flote")
            duration: 4,            // 4 segundos para un flote suave
            ease: "easeInOut"
          }
        }}*/
      />
    </div>
  );
};

export default ParallaxFrente;