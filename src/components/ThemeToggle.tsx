import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="fixed bottom-4 left-4 z-[9999] w-12 h-12 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center border border-white/20 shadow-lg hover:scale-110 transition-all"
      title="Cambiar tema"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
