import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-gradient-to-r from-blue-500 to-indigo-900"
          : "bg-gradient-to-r from-blue-500 to-indigo-900"
      } text-white`}
    >
      <div className="w-full flex justify-between items-center px-6 py-4">
        {/* Nombre con animación */}
        <h1 className="text-3xl font-bold cursor-pointer select-none  ">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ANMER
          </motion.span>
        </h1>

        {/* Menú para escritorio */}
        <ul className="hidden md:flex space-x-6 text-xl font-semibold">
          {["Inicio", "Sobre mí", "Proyectos", "Habilidades"].map(
            (item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={item.toLowerCase().replace(" ", "-")}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-orange-400 transition-all"
                >
                  {item}
                </Link>
              </motion.li>
            )
          )}
        </ul>

        {/* Botón para móviles */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute w-full left-0 top-full bg-gradient-to-r from-blue-500 to-indigo-900 p-4 space-y-4 z-10"
        >
          {["Inicio", "Sobre mí", "Proyectos", "Habilidades"].map(
            (item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase().replace(" ", "-")}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block text-center py-2 hover:text-yellow-400 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
