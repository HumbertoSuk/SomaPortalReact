import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-center space-y-6">
      {/* Título animado */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hola, soy <span className="text-primary">July Suk</span> 👾
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        className="text-md sm:text-lg opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Desarrollador Full Stack, amante del pixel art y las interfaces con
        estilo 💜
      </motion.p>

      {/* Imagen tipo pixel art */}
      <motion.img
        src="/avatar-pixel.png"
        alt="Pixel Avatar"
        className="mx-auto w-40 h-40 rounded-full border-4 border-white dark:border-gray-700 bg-glass"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
      />

      {/* Botón a Proyectos */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/projects"
          className="inline-block bg-white dark:bg-gray-800 text-black dark:text-white border border-white dark:border-gray-600 px-6 py-3 rounded-full shadow hover:bg-purple-200 dark:hover:bg-purple-700 transition-all"
        >
          Ver Proyectos 🚀
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
