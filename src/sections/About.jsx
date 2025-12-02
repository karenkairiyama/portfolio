import { useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const sectionRef = useRef(null);

  // Animación suave para los stickers
  const stickerAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    inView: { opacity: 1, scale: 1 },
  };

  return (
    <section 
      ref={sectionRef}
      className="relative flex justify-center items-center min-h-screen overflow-hidden py-10"
    >
      
      <div className="relative w-full h-full flex items-center justify-center">

        {/* ========================================================
            CAPA 0: STICKERS DE FONDO (Detrás del cuaderno)
           ======================================================== */}
        

        {/* Estrellas decorativas en el fondo */}
        <motion.img 
          src="/assets/stickers/stars.png" 
          className="absolute z-0 w-[200px] top-[5%] right-[10%] opacity-60"
          animate={{ rotate: [0, 10, -10, 0] }} // Pequeña animación continua
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* ========================================================
            CAPA 1: EL CUADERNO GIGANTE
           ======================================================== */}
        <motion.div 
            className="relative z-10 w-[95%] h-[90vh] md:h-[85vh] flex rounded-lg perspective-1000 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* --- PÁGINA IZQUIERDA --- */}
            <div className="relative w-1/2 h-full bg-[#fdfbf7] rounded-l-lg border-l border-t border-b border-gray-200 overflow-hidden shadow-[-5px_0_15px_rgba(0,0,0,0.1)]">
                {/* Sombra del pliegue */}
                <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-black/10 to-transparent z-10 pointer-events-none" />
                
                {/* Renglones */}
                <div 
                    className="w-full h-full pt-10 px-4 md:px-8 flex flex-col items-center"
                    style={{
                        backgroundImage: "linear-gradient(#e5e7eb 1px, transparent 1px)",
                        backgroundSize: "100% 40px"
                    }}
                >
                    {/* Margen rojo */}
                    <div className="absolute top-0 left-6 md:left-12 w-[1px] h-full bg-red-300/50" />

                    {/* TÍTULO "About Me" (Posicionado libremente arriba) */}
                    <h3 className="font-handwriting text-4xl md:text-6xl text-gray-400 -rotate-6 mt-8 mb-6 self-start ml-8 md:ml-16">
                        About Me
                    </h3>

                    {/* FOTO POLAROID (Annie) pegada con cinta */}
                    <div className="relative rotate-3 mt-4 hover:rotate-0 transition-transform duration-300">
                        {/* La Cinta sosteniendo la foto */}
                        <img 
                            src="/assets/stickers/cinta-caritas.png" 
                            className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 md:w-32 z-20 opacity-90" 
                            alt="tape"
                        />
                        {/* La Foto */}
                        <div className="p-2 bg-white shadow-md border border-gray-200 rounded-sm">
                             <img 
                                src="/assets/stickers/yo.png" 
                                className="w-[150px] md:w-[250px] object-cover rounded-sm filter sepia-[0.2]" 
                                alt="Profile"
                            />
                        </div>
                         {/* Sticker "Princess" decorando la foto */}
                         <img 
                            src="/assets/stickers/mono.png" 
                            className="absolute -bottom-10 -right-6 w-20 md:w-28 z-20" 
                            alt="sticker"
                        />
                    </div>

                </div>
            </div>

            {/* --- ESPIRAL CENTRAL --- */}
            <div className="absolute left-1/2 top-4 bottom-4 w-10 -translate-x-1/2 z-20 flex flex-col justify-between py-4">
                {[...Array(24)].map((_, i) => (
                    <div key={i} className="w-full h-2 bg-gray-300 rounded-full shadow-inner border border-gray-400 relative">
                        <div className="absolute top-[3px] left-[3px] right-[3px] h-[4px] bg-white/60 rounded-full" />
                    </div>
                ))}
            </div>

            {/* --- PÁGINA DERECHA --- */}
            <div className="relative w-1/2 h-full bg-[#fdfbf7] rounded-r-lg border-r border-t border-b border-gray-200 overflow-hidden shadow-[5px_0_15px_rgba(0,0,0,0.1)]">
                {/* Sombra del pliegue */}
                <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-black/10 to-transparent z-10 pointer-events-none" />

                {/* Renglones */}
                <div 
                    className="w-full h-full pt-16 px-6 md:px-14"
                    style={{
                        backgroundImage: "linear-gradient(#e5e7eb 1px, transparent 1px)",
                        backgroundSize: "100% 40px"
                    }}
                >
                     {/* Margen rojo */}
                     <div className="absolute top-0 right-6 md:right-12 w-[1px] h-full bg-red-300/50" />

                     {/* TEXTO DE BIOGRAFÍA */}
                     <div className="relative z-20 mt-2 font-handwriting text-gray-800 text-lg md:text-2xl leading-[40px]">
                        <TypeAnimation
                            sequence={[
                            "I'm a software developer in training, but I come from a non-traditional background.\n\nMy experience as a content creator and advertising model has given me a strong foundation in communication, project management, and, above all, a sensitivity for aesthetics and design.\n\nI'm passionate about creating interfaces that look and feel great."
                            ]}
                            wrapper="p"
                            speed={60}
                            style={{ whiteSpace: 'pre-line', display: 'block' }}
                            repeat={0}
                            cursor={true}
                        />
                     </div>
                     
                     {/* Sticker pequeño al final del texto */}
                     <img src="/assets/stickers/corazon.png" className="absolute bottom-0 right-10 w-16 opacity-80 rotate-12" alt="heart" />
                </div>
            </div>

        </motion.div>
        
        {/* ========================================================
            CAPA 2: STICKERS EN PRIMER PLANO (Encima del cuaderno)
           ======================================================== */}
        
        {/* Café (Esquina inferior derecha) */}
        <motion.img 
          src="/assets/stickers/matcha.png" 
          className="absolute z-10 w-[100px] bottom-[15%] left-[5%] md:w-[120px] md:bottom-[8%] md:right-[8%]"
          style={{ rotate: 15 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          variants={stickerAnimation}
          initial="initial"
          whileInView="inView"
          transition={{ delay: 0.5 }}
        />

        {/* Avión (Volando arriba a la derecha) */}
        <motion.img 
          src="/assets/stickers/avion.png" 
          className="absolute z-10 w-[100px] top-[2%] right-[10%] md:w-[200px] md:bottom-[25%] md:left-[30%]"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }} // Flotando suavemente
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pastelito (Decoración extra izquierda) */}
        <motion.img 
          src="/assets/stickers/cute-cake.png" 
          className="absolute z-10 w-[80px] top-[20%] left-[0%] md:w-[200px] md:bottom-[25%] md:left-[5%]"
          style={{ rotate: -5 }}
          variants={stickerAnimation}
          initial="initial"
          whileInView="inView"
          transition={{ delay: 0.2 }}
        />
        <motion.img 
          src="/assets/stickers/cake-cherries.png" 
          className="absolute z-10 w-[80px] bottom-[0%] left-[20%] md:w-[100px] md:top-[55%] md:left-[10%]"
          style={{ rotate: -5 }}
          variants={stickerAnimation}
          initial="initial"
          whileInView="inView"
          transition={{ delay: 0.3 }}
        />
        <motion.img 
          src="/assets/stickers/star.png" 
          className="absolute z-10 w-[70px] top-[5%] left-[35%] md:w-[100px] md:top-[5%] md:left-[25%]"
          style={{ rotate: -5 }}
          variants={stickerAnimation}
          initial="initial"
          whileInView="inView"
          transition={{ delay: 0.4 }}
        />
        <motion.img 
          src="/assets/stickers/pancake.png" 
          className="absolute z-10 w-[90px] bottom-[20%] left-[30%] md:w-[150px] md:top-[65%] md:left-[35%]"
          style={{ rotate: -5 }}
          variants={stickerAnimation}
          initial="initial"
          whileInView="inView"
          transition={{ delay: 0.5 }}
        />
        <motion.img 
          src="/assets/stickers/paper1.png" 
          className="absolute z-1 w-[80px] bottom-[5%] left-[20%] md:w-[300px] md:bottom-[-10%] md:left-[-1%]"
          
          variants={stickerAnimation}
        />
        <motion.img 
          src="/assets/stickers/sky.png" 
          className="absolute z-1 w-[100px] bottom-[5%] right-[10%] md:w-[400px] md:top-[-10%] md:right-[-10%]"
          
          variants={stickerAnimation}
        />


      </div>
    </section>
  );
};

export default About;