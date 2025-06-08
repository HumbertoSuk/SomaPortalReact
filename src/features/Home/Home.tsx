import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import styles from "./Home.module.css";

const Home = () => (
  <div className={styles.homeContainer}>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
  </div>
);

export default Home;
