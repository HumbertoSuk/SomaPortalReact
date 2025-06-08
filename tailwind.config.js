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
          DEFAULT: '#c084fc',
          dark: '#7e22ce',
          light: '#e9d5ff',
          bg: '#1a0a2a',
          soft: '#2a0c45',
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