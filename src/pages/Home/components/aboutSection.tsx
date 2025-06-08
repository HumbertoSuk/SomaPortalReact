import { motion } from "framer-motion";
import styles from "../../../styles/AboutSection.module.css";
import { profile } from "../../../data/profile";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {profile.about.heading}
      </motion.h2>

      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {profile.about.paragraph}
      </motion.p>
    </section>
  );
};

export default AboutSection;
