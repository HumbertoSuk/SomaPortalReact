/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pixel: {
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'], // Añade esta
        sans: ['ui-sans-serif', 'system-ui'],     // O conserva si ya la usas
      },      
      animation: {
      },
      keyframes: {
      }
    }
  },
  plugins: [],
}