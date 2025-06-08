import { motion } from "framer-motion";
import styles from "../../styles/ProjectsSection.module.css";
import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Proyectos Destacados
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
