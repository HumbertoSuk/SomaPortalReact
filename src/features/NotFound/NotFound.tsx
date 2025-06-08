import styles from "./NotFound.module.css";

const NotFound = () => (
  <section className={styles.notFound}>
    <h2 className={styles.heading}>Página no encontrada</h2>
    <p className={styles.text}>
      Lo sentimos, la página que buscas no existe.
    </p>
  </section>
);

export default NotFound;
