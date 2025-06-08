import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggle = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 px-4 py-2 bg-white dark:bg-black text-black dark:text-white rounded-full shadow-lg border hover:bg-purple-200 dark:hover:bg-purple-800 transition-all z-50"
    >
      {darkMode ? "🌙 Oscuro" : "☀️ Claro"}
    </button>
  );
};

export default ThemeToggle;
