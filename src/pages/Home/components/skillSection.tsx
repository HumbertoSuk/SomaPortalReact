import { motion } from "framer-motion";
import styles from "../../../styles/SkillsSection.module.css";
import { skills } from "../../../data/skills";

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tecnologías que uso
      </motion.h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={styles.skillItem}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-xl mr-2">{skill.icon}</span>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
