import { motion } from "framer-motion";
import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Me from "@/assets/images/me.png";
import CV from "@/assets/docs/CV_Anmer.pdf";

export default function HeroBanner() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV_Anmer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    window.location.href = "mailto:tuemail@ejemplo.com"; // Reemplaza con tu email real
  };

  return (
    <div className="relative min-h-[72vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-900 text-white px-8 md:px-16 py-12 md:py-20 gap-10">
      {/* Contenido Principal */}
      <motion.div
        className="relative w-full md:w-1/2 text-center md:text-left max-w-2xl z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          ¡Hola! Soy <span className="text-orange-400">Anmer</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-6">
          Ingeniero de Sistemas apasionado por la ciberseguridad, el desarrollo
          web front-end y el análisis de datos. Me encanta aprender y aplicar
          nuevas tecnologías para crear soluciones innovadoras y eficientes.
        </p>

        {/* Tecnologías */}
        <div className="flex justify-center md:justify-start space-x-6 text-4xl mb-6">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaPython className="text-yellow-400" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaJs className="text-yellow-300" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaReact className="text-cyan-400" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaNodeJs className="text-green-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaHtml5 className="text-orange-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaCss3Alt className="text-blue-400" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaDatabase className="text-gray-300" />
          </motion.div>
        </div>

        {/* Botones */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-orange-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-lg shadow-xl z-10 relative flex items-center gap-2"
              onClick={handleDownloadCV}
            >
              <FaDownload className="text-lg" />
              Descargar CV
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-orange-500 hover:text-white hover:border-orange-700 px-6 py-3 text-lg rounded-lg shadow-xl z-10 relative flex items-center gap-2"
              onClick={handleContactClick}
            >
              <FaEnvelope className="text-lg" />
              Contactar
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Sección Derecha */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={Me}
          alt="Engineer Anmer"
          className="w-80 md:w-[1650px] h-auto rounded-full"
        />
      </motion.div>

      {/* Wave Separator */}
      <svg
        className="absolute bottom-0 left-0 w-full h-auto z-0"
        viewBox="0 0 1440 150"
      >
        <path
          fill="#FFFFFF"
          fillOpacity="1"
          d="M0,120L60,124C120,128,240,136,360,124C480,112,600,80,720,76C840,72,960,96,1080,104C1200,112,1320,104,1380,100L1440,96L1440,150L0,150Z"
        ></path>
      </svg>
    </div>
  );
}