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
        primary: {
          DEFAULT: '#8b5cf6',
          dark: '#6b21a8',
          light: '#ddd6fe'
        }
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