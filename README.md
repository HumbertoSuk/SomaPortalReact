# 🌐 SomaPortal — Portafolio de Humberto López

¡Bienvenido a mi portafolio web!  
Este proyecto está desarrollado con **React**, **TypeScript**, **Vite** y **Tailwind CSS**, y tiene como objetivo mostrar mis habilidades, proyectos destacados y formas de contacto profesional.
 
---

## ⚡ Inicio Rápido

Instala las dependencias y levanta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Para construir la versión optimizada y previsualizarla:

```bash
npm run build
npm run preview
```

## 🚀 Tecnologías Utilizadas

| Herramienta                                   | Descripción                                        |
| --------------------------------------------- | -------------------------------------------------- |
| [React](https://reactjs.org/)                 | Biblioteca JS para construir interfaces de usuario |
| [Vite](https://vitejs.dev/)                   | Empaquetador ultrarrápido para frontend moderno    |
| [TypeScript](https://www.typescriptlang.org/) | Superset de JavaScript con tipado estático         |
| [Tailwind CSS](https://tailwindcss.com/)      | Framework de CSS utilitario para estilos rápidos   |

---

## 📁 Estructura de Carpetas

SomaPortalReactg/
├── public/
│ └── favicon.ico
├── src/
│ ├── assets/ # Imágenes, íconos, etc.
│ ├── components/ # Componentes reutilizables (Navbar, Card, etc.)
│ ├── features/ # Secciones organizadas por dominio (Home, Projects, Contact)
│ ├── context/ # Contextos de React
│ ├── hooks/ # Hooks personalizados
│ ├── data/ # Datos dummy en JSON o TS
│ ├── layouts/ # Componentes de maquetado
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
