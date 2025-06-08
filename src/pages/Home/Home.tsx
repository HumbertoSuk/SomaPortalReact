import HeroSection from "./components/HeroSection";
import AboutSection from "./components/aboutSection";
import SkillsSection from "./components/skillSection";
import styles from "./Home.module.css";

const Home = () => (
  <div className={styles.homeContainer}>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
  </div>
);

export default Home;
