import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Humberto Dev
        </h1>
        <ul className={styles.menu}>
          <li>
            <Link
              to="/"
              className={styles.link}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={styles.link}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={styles.link}
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
