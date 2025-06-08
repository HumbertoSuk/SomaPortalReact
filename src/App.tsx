import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">¡Hola, soy Humberto 👋!</h1>
      <p className="text-lg text-gray-300 max-w-md text-center">
        Bienvenido a mi portafolio. Aquí encontrarás mis proyectos, habilidades y formas de contacto.
      </p>
      <button className="mt-6 bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
        Ver proyectos
      </button>
    </main>
  )
}

export default App
