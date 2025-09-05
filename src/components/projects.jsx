import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFigma } from "react-icons/fi";
import proyecto1Img from "../assets/images/projects/proyecto1.jpg";
import proyecto2Img from "../assets/images/projects/proyecto2.jpg";
import proyecto3Img from "../assets/images/projects/proyecto3.jpg";
import proyecto4Img from "../assets/images/projects/proyecto4.jpg";
import proyecto5Img from "../assets/images/projects/proyecto5.png";
import proyecto6Img from "../assets/images/projects/proyecto6.png";
import proyecto7Img from "../assets/images/projects/proyecto7.png";
import proyecto8Img from "../assets/images/projects/proyecto8.png";
import proyecto9Img from "../assets/images/projects/proyecto9.png";
import figma1Img from "../assets/images/designs/figma1.png";
import figma2Img from "../assets/images/designs/figma2.png";
import proyecto10Img from "../assets/images/projects/proyecto10.png"; // Asegúrate de tener esta imagen
import proyecto11Img from "../assets/images/projects/proyecto11.png"; // Asegúrate de tener esta imagen
import proyecto12Img from "../assets/images/projects/proyecto12.png"; // Asegúrate de tener esta imagen
import proyecto13Img from "../assets/images/projects/proyecto13.png"; // Asegúrate de tener esta imagen

const proyectos = [
  // Proyectos de desarrollo
  {
    titulo: "Pokedex React",
    descripcion:
      "Aplicación web desarrollada con React.js que permite explorar Pokémon. Utiliza la PokéAPI para obtener datos en tiempo real.",
    imagen: proyecto1Img,
    codigo: "https://github.com/Anmer07x/Pokedex-React.git",
    tecnologias: "React, Tailwind, API",
    tipo: "desarrollo",
  },
  {
    titulo: "Dashboard Interactivo ",
    descripcion:
      "Dashboard que permite filtrar clientes según su estado. Desarrollado con Tailwind CSS.",
    imagen: proyecto2Img,
    demo: "https://dashboardreactt.netlify.app/",
    codigo: "https://github.com/Anmer07x/Dashboard-React-.git",
    tecnologias: "React, Tailwind, JSON",
    tipo: "desarrollo",
  },

  {
    titulo: "Indetech Website (Proyecto privado)",
    descripcion:
      "Página web oficial de Indetech, una empresa enfocada en el desarrollo de soluciones tecnológicas, innovación y automatización de procesos.",
    imagen: proyecto3Img,
    tecnologias: "React, Tailwind, Node.js, Express",
    tipo: "desarrollo",
  },
  {
    titulo: "Daily Byte",
    descripcion:
      "Plataforma web con quizzes diarios de HTML, CSS, Figma y UX/UI. Aprende, practica y seguí tu progreso con una barra visual.",
    imagen: proyecto4Img,
    codigo: "https://github.com/Anmer07x/Daily-bite",
    tecnologias: "JavaScript, CSS, HTML",
    tipo: "desarrollo",
  },
  {
    titulo: "Sistema de cubicaje (Proyecto privado)",
    descripcion:
      "Aplicación web para calcular y gestionar cubicajes de carga, desarrollada con PHP y CodeIgniter 4. Ideal para optimizar espacio y logística.",
    imagen: proyecto5Img,
    tecnologias: "PHP, CodeIgniter, MySQL",
    tipo: "desarrollo",
  },
  {
    titulo: "Hotel White",
    descripcion:
      "Proyecto universitario de gestión hotelera desarrollado con Laravel. Incluye funcionalidades para reservas, administración de habitaciones.",
    imagen: proyecto6Img,
    demo: "https://sunny-tiramisu-e6c570.netlify.app/",
    codigo: "https://github.com/Anmer07x/Hotel-Winter",
    tecnologias: "Laravel, PHP, MySQL",
    tipo: "desarrollo",
  },
  {
    titulo: "Yamaha Web",
    descripcion:
      "Página web de Yamaha, diseñada para mostrar productos y servicios de la marca. Desarrollada con HTML, CSS y JavaScript.",
    imagen: proyecto7Img,
    demo: "https://yamahaweb.netlify.app/",
    codigo: "https://github.com/Anmer07x/YamahaWeb",
    tecnologias: "HTML, CSS, JavaScript",
    tipo: "desarrollo",
  },
  {
    titulo: "Farmaciapp",
    descripcion:
      "Aplicación web para farmacias, desarrollada con HTML, CSS y JavaScript. Fue desarrollada en el 2021 como parte de una hackathon.",
    imagen: proyecto8Img,
    demo: "https://farmaciawebb.netlify.app/",
    codigo: "https://github.com/Anmer07x/Hackathon-2021",
    tecnologias: "HTML, CSS, JavaScript",
    tipo: "desarrollo",
  },
  {
    titulo: "Systurism",
    descripcion:
      "Aplicación web para sitios de turismo, desarrollada con HTML, CSS, JavaScript, PHP y MySQL. Proyecto universitario de gestión hotelera.",
    imagen: proyecto9Img,
    demo: "https://systurism.netlify.app/",
    codigo: "https://github.com/Anmer07x/Systurism",
    tecnologias: "PHP, MySQL, JavaScript",
  },
  {
    titulo: "Rediseño Sistema de Gestión Documental",
    descripcion:
      "Rediseño de un sistema de gestión documental para una empresa, mejorando la experiencia del usuario y la usabilidad del sistema.",
    imagen: figma1Img,
    figma:
      "https://www.figma.com/design/T5hSmMrFbhdIoySH9w5Hvz/SGD---SISTEMA-DE-GESTION-DOCUMENTAL?node-id=0-1&m=dev&t=5U0h4G1swlfO2itC-1",
    tecnologias: "Figma, UX Research, UI Design",
    tipo: "diseño",
  },
  {
    titulo: "SysMedicalApp",
    descripcion:
      "Diseño de una aplicación médica para la gestión de pacientes y citas médicas. Incluye funcionalidades como chat, gestión de citas y más.",
    imagen: figma2Img,
    figma:
      "https://www.figma.com/proto/Q8davjiA4a81LcKWECLHEa/SYSMEDICALAPP?node-id=0-1&t=Pi5RA78KPWigevUQ-1",
    tecnologias: "Figma, UX Research, UI Design",
    tipo: "diseño",
  },
  // Proyectos de WordPress
  {
    titulo: "Landing Page - Institucion Educativa San José de Timbiquí",
    descripcion:
      "Sitio web de presentación para la Institución Educativa San José de Timbiquí, diseñado para mostrar su misión, visión y servicios educativos.",
    imagen: proyecto10Img,
    demo: "https://iesanjosedetimbiqui.edu.co",
    tecnologias:
      "WordPress, Elementor,  SEO,  Theme Astra, WPForms",
    tipo: "WordPress",
    
  },
  {
    titulo: "Prueba Tecnica - Landing Page",
    descripcion:
      "Landing page desarrollada como prueba técnica, enfocada en la presentación de servicios y contacto.",
    imagen: proyecto11Img,
    demo: "https://potencia-afro.netlify.app/",
    tecnologias:
      "WordPress, Elementor,  SEO,  Theme Astra",
    tipo: "WordPress",
    
  },
  {
    titulo: "PotenciAfro Website",
    descripcion:
      "Página web para PotenciAfro, una organización que promueve la inclusión y el empoderamiento de la comunidad afrodescendiente.",
    imagen: proyecto12Img,
    demo: "https://potenciafroconectatech.com/",
    tecnologias:
      "WordPress, Elementor, WooCommerce, SEO, TutorLMS, theme Astra, Donkan, Ultimate Members",
    tipo: "WordPress",
    
  },
  {
    titulo: "Prueba Tecnica - Toldos y sistemas victor",
    descripcion:
      "Landing page desarrollada como prueba técnica, enfocada en la presentación de servicios y contacto para la empresa Toldos y Sistemas victor.",
    imagen: proyecto13Img,
      demo: "https://potencia-afro.netlify.app/",
    tecnologias:
      "WordPress, Elementor, WooCommerce, SEO,  theme Astra",
    tipo: "WordPress",
    
  },
];

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
    scale: 0.95,
  },
  onscreen: (index) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: index * 0.1,
    },
  }),
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.3)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const imageHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const Proyectos = () => {
  const [filtro, setFiltro] = useState("todos");

  const proyectosFiltrados = proyectos.filter((proyecto) => {
    if (filtro === "todos") return true;
    return proyecto.tipo === filtro;
  });

  return (
    <section id="proyectos" className="py-24 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-900"
        >
          Proyectos Destacados
        </motion.h2>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex rounded-xl bg-white p-1 shadow-md border border-gray-200">
            {["todos", "desarrollo", "WordPress", "diseño"].map((tipo) => (
              <button
                key={tipo}
                onClick={() => setFiltro(tipo)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  filtro === tipo
                    ? "bg-gradient-to-r from-blue-500 to-indigo-700 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {tipo === "todos"
                  ? "Todos"
                  : tipo === "desarrollo"
                  ? "Desarrollo"
                  : tipo === "WordPress"
                  ? "WordPress"
                  : "Diseño Figma"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Lista de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosFiltrados.map((proyecto, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={index}
              className="h-full"
            >
              <div className="h-full bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg flex flex-col group hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Imagen con efecto parallax */}
                <motion.div
                  className="relative h-64 overflow-hidden"
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover"
                    variants={imageHover}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge de tipo */}
                  <span
                    className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                      proyecto.tipo === "diseño"
                        ? "bg-purple-500 text-white"
                        : proyecto.tipo === "WordPress"
                        ? "bg-green-500 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {proyecto.tipo === "diseño" ? "Diseño" :  proyecto.tipo === "WordPress" ? "WordPress" : "Desarrollo"}
                  </span>
                </motion.div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Badge de tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.split(",").map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          tech.trim().toLowerCase() === "react" ||
                          tech.trim().toLowerCase() === "laravel"
                            ? "bg-orange-500 text-white"
                            : tech.trim().toLowerCase().includes("figma") ||
                              tech.trim().toLowerCase().includes("design")
                            ? "bg-purple-500 text-white"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {tech.trim()}
                      </motion.span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {proyecto.descripcion}
                  </p>

                  {/* Botones */}
                  <div className="flex justify-end space-x-3 mt-auto">
                    {proyecto.codigo && (
                      <motion.a
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={proyecto.codigo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-orange-500/20 transition-all flex items-center justify-center"
                      >
                        <FiGithub className="w-5 h-5" />
                        <span className="ml-2 text-sm">Código</span>
                      </motion.a>
                    )}

                    {proyecto.figma && (
                      <motion.a
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={proyecto.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white shadow-md hover:shadow-purple-500/20 transition-all flex items-center justify-center"
                      >
                        <FiFigma className="w-5 h-5" />
                        <span className="ml-2 text-sm">Figma</span>
                      </motion.a>
                    )}

                    {proyecto.demo && (
                      <motion.a
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-700 text-white shadow-md hover:shadow-blue-500/30 transition-all flex items-center justify-center"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span className="ml-2 text-sm">Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
