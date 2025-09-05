import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
  
  } from "react-icons/fa";
  import CV from "@/assets/docs/CV_Anmer.pdf"; // Asegúrate de colocar el CV en esta ruta
  
  export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-[#007cf0] to-indigo-900 text-white px-6 py-12 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Conectemos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Conectemos</h3>
            <p className="text-white/80 mb-4">
              Estoy disponible para nuevas oportunidades, colaboraciones o una charla sobre tecnología.
            </p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><span className="text-orange-300 font-medium">Email:</span> mena.r1307@gmail.com</li>
              <li><span className="text-orange-300 font-medium">Ubicación:</span> Colombia / Remoto</li>
            </ul>
          </div>
  
          {/* Espacio libre si querés agregar algo luego */}
          <div className="hidden md:block" />
  
          {/* Botón + Redes */}
          <div>
            <h3 className="text-xl font-semibold mb-4">¿Querés contactarme?</h3>
            <p className="mb-4 text-white/80">
              Escribime y conocé más sobre mi perfil profesional.
            </p>
            <a
               href="mailto:mena.r1307@gmail.com"
              className="inline-block bg-[#ff6b00] hover:bg-orange-500 px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              Pulsa Aqui
            </a>
  
            {/* Redes sociales con react-icons */}
            <div className="flex space-x-4 mt-6 text-2xl">
              <a
                href="https://www.instagram.com/drxsmr_/"
                className="text-white hover:text-pink-400 transition duration-300 hover:drop-shadow-[0_0_6px_rgba(255,192,203,0.9)]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/andr%C3%A9s-david-mena-renteria-b34463269/"
                className="text-white hover:text-blue-400 transition duration-300 hover:drop-shadow-[0_0_6px_rgba(0,191,255,0.8)]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Anmer07x"
                className="text-white hover:text-gray-300 transition duration-300 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
              >
                <FaGithub />
              </a>
              
            </div>
          </div>
        </div>
  
        {/* Línea separadora */}
        <div className="border-t border-white/10 my-8" />
  
        {/* Créditos */}
        <div className="text-center text-sm text-white/60 font-mono">
          <p className="mb-1">
            <span className="text-orange-300">$</span> echo "<span className="text-white">© 2025 Anmer</span>"
          </p>
          <p>
            Hecho con <span className="text-yellow-400">pasión</span>,{" "}
            <span className="text-blue-400">código</span> y{" "}
            <span className="text-red-500">creatividad</span>.
          </p>
        </div>
      </footer>
    );
  }
  