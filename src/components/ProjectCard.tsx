import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, description, image, link }: Project) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Ver más
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
