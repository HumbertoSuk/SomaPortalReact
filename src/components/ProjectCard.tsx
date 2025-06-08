import { motion } from "framer-motion";
import styles from "../styles/ProjectsSection.module.css";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => (
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    viewport={{ once: true }}
  >
    {project.image && (
      <img src={project.image} alt={project.title} className={styles.image} />
    )}
    <h3 className={styles.title}>{project.title}</h3>
    <p className={styles.description}>{project.description}</p>
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Ver proyecto
      </a>
    )}
  </motion.div>
);

export default ProjectCard;
