import { profile } from "../../data/profile";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Contacto</h2>
      <p className={styles.paragraph}>
        Puedes escribirme a:{" "}
        <a href={`mailto:${profile.contact.email}`} className={styles.link}>
          {profile.contact.email}
        </a>
      </p>
      <p className={styles.paragraph}>
        También me encuentras en:
        <br />
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href={profile.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
};

export default Contact;
