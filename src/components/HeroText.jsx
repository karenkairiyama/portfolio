// src/components/HeroText.jsx
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  
  const words = ["Creative", "Engaging", "Pixel-Perfect", "Aesthetic"];
  
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="absolute z-10 
                top-[8%] left-0 right-0 text-center 
                md:top-[15%] md:left-[5%] md:right-auto md:text-left 
                rounded-3xl bg-clip-text">
      
      {/* --- 2. TEXTO DE DESKTOP MODIFICADO --- */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-black  text-[#fff0b4]"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Karen
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-[#fff0b4] text-6xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            {/* Cambiamos el texto para que sea más "tú" */}
            A Developer <br /> with an eye for
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words} // Usa tus nuevas palabras
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-white "
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Design
          </motion.p>
        </div>
      </div>
      
      {/* --- 3. TEXTO DE MÓVIL MODIFICADO --- */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium text-[#51b7ff] "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Karen
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words} // Usa tus nuevas palabras
              className="font-bold text-[#51b7ff] text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Interfaces
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;