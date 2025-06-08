export interface Skill {
  name: string;
  icon: string;
  category?: string;
}
export const skills: Skill[] = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "CSS Framework" },
  { name: "TypeScript", icon: "🟦", category: "Lenguaje" },
  { name: "Framer Motion", icon: "🎞️", category: "Animación" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Figma", icon: "🧩", category: "Diseño" },
  { name: "Django", icon: "🌿", category: "Backend" },
  { name: "FastAPI", icon: "⚡", category: "Backend" },
  { name: "Flutter", icon: "📱", category: "Mobile" },
  { name: "Dart", icon: "🎯", category: "Mobile" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "PostgreSQL", icon: "🐘", category: "Base de Datos" },
  { name: "MySQL", icon: "🐬", category: "Base de Datos" },
  { name: "Redis", icon: "🟥", category: "Base de Datos" },
  { name: "Python", icon: "🐍", category: "Lenguaje" },
  { name: "JavaScript", icon: "✨", category: "Lenguaje" },
  { name: "HTML5", icon: "🟠", category: "Frontend" },
  { name: "CSS3", icon: "🔵", category: "Frontend" },
  { name: "Firebase", icon: "🔥", category: "Base de Datos" },
  { name: "Git", icon: "🔧", category: "Herramientas" },
  { name: "GitHub", icon: "🐱", category: "Herramientas" },
  { name: "Insomnia", icon: "💤", category: "Herramientas" },
  { name: "Postman", icon: "📬", category: "Herramientas" },
  { name: "Notion", icon: "🗃️", category: "Productividad" },
  { name: "Trello", icon: "📌", category: "Productividad" },
  { name: "Azure", icon: "☁️", category: "DevOps" },
  { name: "Nginx", icon: "🧱", category: "DevOps" },
  { name: "SASS", icon: "💄", category: "CSS Framework" },
  { name: "Bootstrap", icon: "📦", category: "CSS Framework" }
];
