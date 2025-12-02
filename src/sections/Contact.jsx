import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
// Importamos los hooks de animación
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Contact = () => {
  // ==========================================
  // 1. LÓGICA DE ANIMACIÓN (PARALLAX)
  // ==========================================
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Suavizamos el movimiento
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove(event) {
    const { clientX, clientY } = event;
    x.set(clientX);
    y.set(clientY);
  }

  // Transformaciones para las nubes
  const cloud1X = useTransform(mouseX, [0, window.innerWidth], [20, -20]);
  const cloud1Y = useTransform(mouseY, [0, window.innerHeight], [20, -20]);
  const cloud2X = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);
  const cloud2Y = useTransform(mouseY, [0, window.innerHeight], [-30, 30]);

  // ==========================================
  // 2. LÓGICA DEL FORMULARIO
  // ==========================================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_1a0obpo",
        "template_oah3aoo",
        {
          from_name: formData.name,
          to_name: "Karen",
          from_email: formData.email,
          to_email: "kairiyamakaren@gmail.com",
          message: formData.message,
        },
        "2bScMXkBKKTTeZWsK"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Message sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section 
      className="relative flex items-center justify-center min-h-screen overflow-hidden py-10"
      onMouseMove={handleMouseMove} 
    >
      
      {/* ==========================================
          FONDO INTERACTIVO (CIELO)
         ========================================== */}
      <div className="absolute inset-0 -z-50 bg-gradient-to-b from-[#87CEEB] to-[#E0F6FF]" />

      <motion.img 
        src="/assets/stickers/cloud1.png" 
        className="absolute top-[10%] left-[2%] w-[500px] opacity-80 -z-40 pointer-events-none"
        style={{ x: cloud1X, y: cloud1Y }}
      />

      <motion.img 
        src="/assets/stickers/clouds2.png" 
        className="absolute bottom-[20%] right-[5%] w-[350px] opacity-60 -z-40 pointer-events-none"
        style={{ x: cloud2X, y: cloud2Y, rotate: 0 }} 
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      {/* ==========================================
          LA CARTA / POSTAL
         ========================================== */}
      <div className="relative w-full max-w-lg mx-auto px-4 z-10">
        
        {/* Sticker: Cinta Adhesiva (Tape) - Arriba al centro */}
        <img 
            src="/assets/stickers/stamp.png" 
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 z-20"
            alt="tape"
        />

        {/* Papel de la carta */}
        <div className="relative bg-[#fffdf0] p-8 md:p-10 shadow-2xl transform -rotate-1 rounded-sm border border-gray-200 text-gray-800">
            
            {/* Sticker: Estampilla (Stamp) - Esquina derecha */}
            <div className="absolute top-5 right-5 w-20 h-24 border-4 border-dotted border-gray-300 flex items-center justify-center opacity-80 rotate-3 bg-white">
                <img src="/assets/stickers/corazon.png" className="w-12 opacity-90" alt="stamp" />
            </div>

            {/* Encabezado */}
            <div className="mb-6 mt-2">
                <h2 className="text-3xl font-serif font-bold italic text-gray-800">Dear Karen,</h2>
                <p className="text-gray-500 text-sm mt-1 ml-1">I would love to get in touch...</p>
            </div>

            <form className="w-full space-y-6" onSubmit={handleSubmit}>
                
                {/* Input: Nombre */}
                <div className="relative">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        // Estilo renglón: solo border-bottom
                        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-700 placeholder-gray-400 font-handwriting"
                        placeholder="My name is..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Input: Email */}
                <div className="relative">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-700 placeholder-gray-400 font-handwriting"
                        placeholder="My email is..."
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Textarea: Mensaje con renglones dibujados con CSS */}
                <div className="relative mt-4">
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-700 placeholder-gray-400 resize-none leading-8 font-handwriting"
                        placeholder="I'm writing to you because..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        // Truco CSS para dibujar las líneas del papel
                        style={{
                            backgroundImage: "linear-gradient(transparent, transparent 31px, #e5e7eb 31px)",
                            backgroundSize: "100% 32px",
                            lineHeight: "32px"
                        }}
                    />
                </div>

                {/* Botón de enviar */}
                <div className="pt-2 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-indigo-600 text-white font-serif italic text-lg rounded-sm shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all transform hover:-translate-y-1"
                    >
                        {!isLoading ? "Send Letter" : "Sending..."}
                    </button>
                </div>
            </form>

            <p className="text-right text-xs text-gray-400 mt-4 font-serif italic">
                Sent via Portfolio Post
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;