import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-6 py-4 bg-glass backdrop-blur-md border-b border-white/20 fixed top-0 left-0 z-50">
      <h1 className="text-lg font-bold">🕹 Humberto Dev</h1>
      <ul className="flex gap-4 text-sm tracking-wide">
        <li>
          <Link
            to="/"
            className="hover:text-primary-light transition-all duration-200"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:text-primary-light transition-all duration-200"
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-primary-light transition-all duration-200"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
