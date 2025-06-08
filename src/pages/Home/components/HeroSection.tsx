import { motion } from "framer-motion";
import styles from "../../../styles/HeroSection.module.css";
import { profile } from "../../../data/profile";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <motion.img
        src={profile.avatar}
        alt="Pixel avatar"
        className={styles.avatar}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {profile.greeting}{" "}
        <span className={styles.highlight}>{profile.titleHighlight}</span>
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {profile.subtitle}
      </motion.p>
    </section>
  );
};

export default HeroSection;
