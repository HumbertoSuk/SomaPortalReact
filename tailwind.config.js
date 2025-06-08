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
          DEFAULT: '#d6c6af',
          dark: '#8f8b82',
          light: '#f1eadb',
          bg: '#1b1b1b',
          soft: '#2e2e2e',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'], // Añade esta
        sans: ['ui-sans-serif', 'system-ui'],     // O conserva si ya la usas
      },      
      animation: {
        float: 'float 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: [],
}