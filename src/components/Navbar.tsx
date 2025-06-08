import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 dark:bg-white/5 backdrop-blur-md border-b border-white/20 shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-white dark:text-primary-light tracking-wide">
          Humberto Dev
        </h1>
        <ul className="flex gap-6 text-sm md:text-base font-medium text-white/80 dark:text-white/70">
          <li>
            <Link
              to="/"
              className="hover:text-purple-400 dark:hover:text-primary-light transition-colors duration-200"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-purple-400 dark:hover:text-primary-light transition-colors duration-200"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-purple-400 dark:hover:text-primary-light transition-colors duration-200"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
