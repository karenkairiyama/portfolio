import { mySocials } from "../constants";

const Footer = () => {
  return (
    // 1. Fondo: Continuación del cielo (De azul muy claro a azul cielo estándar)
    <section className="relative pt-12 pb-8 bg-gradient-to-b from-[#E0F6FF] to-[#87CEEB] overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-5 text-sm font-medium text-indigo-900">
        
        {/* Línea divisoria: Ahora es azulada en lugar de gris */}
        <div className="absolute top-0 left-0 right-0 h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-50" />
        
        {/* Links Legales */}
        <div className="flex gap-4  text-base md:text-sm opacity-80">
          <p className="hover:text-indigo-600 transition-colors cursor-pointer">Terms & Conditions</p>
          <p className="opacity-50">|</p>
          <p className="hover:text-indigo-600 transition-colors cursor-pointer">Privacy Policy</p>
        </div>

        {/* Iconos Sociales (Burbujas flotantes) */}
        <div className="flex gap-4">
          {mySocials.map((social, index) => (
            <a href={social.href} key={index} className="group relative">
              <div className="p-3 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-sm transition-all duration-300 group-hover:bg-white/60 group-hover:-translate-y-2 group-hover:shadow-lg">
                <img src={social.icon} className="w-5 h-5 opacity-80 group-hover:opacity-100" alt={social.name} />
              </div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className=" text-base md:text-sm opacity-70">© 2025 Karen. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;