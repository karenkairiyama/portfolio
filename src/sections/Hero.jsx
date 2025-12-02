// src/sections/Hero.jsx
import HeroCollage from "../components/HeroCollage";
import ParallaxFondo from "../components/ParallaxFondo"; // <-- Nuevo
import ParallaxFrente from "../components/ParallaxFrente"; // <-- Nuevo
import HeroText from "../components/HeroText";
const Hero = () => {
  return (
    // 'relative' es clave para que las capas 'absolute' funcionen
    <section 
      className="relative flex item-start justify-center min-h-screen overflow-hidden"
    >
      {/* CAPA 1: El fondo (z-index bajo) */}
      <ParallaxFondo /> 

      <div className="z-10">
        <HeroText />
      </div>

      {/* CAPA 2: Tu collage (z-index medio) */}
      <HeroCollage />

      {/* CAPA 3: Las nubes del frente (z-index alto) */}
      <ParallaxFrente />
      
    </section>
  );
};

export default Hero;