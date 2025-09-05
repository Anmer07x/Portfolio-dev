import React from "react";
import { motion } from "framer-motion";
import Me from "@/assets/images/Log.png";

const AboutMe = () => {
  return (
    <section className="bg-white-100 py-16 px-6 md:px-16" id="sobre-mí">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagen */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Me}
            alt="Anmer"
            className="w-60 md:w-80 h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Contenido de texto */}
        <motion.div
          className="w-full md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre <span className="text-blue-500">Mí</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            ¡Hola! Soy{" "}
            <span className="font-semibold">Andrés David Mena R.</span> aunque
            muchos me conocen como{" "}
            <span className="font-semibold">(Anmer)</span>, apasionado por la
            <span className="text-blue-500 font-semibold"> ciberseguridad</span>
            , el
            <span className="text-blue-500 font-semibold">
              {" "}
              desarrollo web
            </span>{" "}
            y el
            <span className="text-blue-500 font-semibold">
              {" "}
              análisis de datos
            </span>
            . Mi camino profesional comenzó como{" "}
            <span className="text-blue-500 font-semibold ">
              técnico de soporte y redes
            </span>
            , una experiencia que marcó mi forma de pensar y me permitió
            desarrollar habilidades clave como el análisis, la atención al
            detalle y la capacidad para adaptarme rápidamente a distintos
            entornos. Ese primer contacto con el mundo IT despertó en mí el
            interés por construir soluciones desde cero. Desde entonces he
            trabajado como <span className="text-blue-500 font-semibold">desarrollador full stack</span>, lo que me ha permitido
            participar en distintas etapas de proyectos y entender mejor cómo
            cada parte se conecta para crear un todo funcional. Me considero una
            persona autodidacta, curiosa y enfocada en mejorar cada día, siempre
            con ganas de asumir nuevos desafíos y seguir creciendo
            profesionalmente.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
