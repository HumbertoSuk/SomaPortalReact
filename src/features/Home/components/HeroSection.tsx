import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import { profile } from "@/data/profile";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <motion.div
        className={styles.avatarContainer}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={profile.avatar}
          alt="Pixel avatar"
          className={styles.avatar}
        />
      </motion.div>

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
