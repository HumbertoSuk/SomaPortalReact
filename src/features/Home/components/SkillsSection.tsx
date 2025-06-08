import { motion } from "framer-motion";
import styles from "./SkillsSection.module.css";
import { skills } from "../../../data/skills";
import type { Skill } from "../../../data/skills";

// Agrupamos las skills por categoría
const groupedSkills: { [category: string]: Skill[] } = {};

skills.forEach((skill) => {
  const category = skill.category ?? "Otros"; // valor por defecto si no hay categoría
  if (!groupedSkills[category]) {
    groupedSkills[category] = [];
  }
  groupedSkills[category].push(skill);
});

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
        Tecnologías/Herramientas que uso
      </motion.h2>

      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className={styles.categoryGroup}>
          <h3 className={styles.categoryTitle}>{category}</h3>
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
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
