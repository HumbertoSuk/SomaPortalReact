export interface Skill {
    name: string;
    icon: string;
    category?: string;
  }
  
  export const skills: Skill[] = [
    {
      name: "React",
      icon: "⚛️",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      category: "CSS Framework",
    },
    {
      name: "TypeScript",
      icon: "🟦",
      category: "Language",
    },
    {
      name: "Framer Motion",
      icon: "🎞️",
      category: "Animation",
    },
    {
      name: "Node.js",
      icon: "🟢",
      category: "Backend",
    },
    {
      name: "Figma",
      icon: "🧩",
      category: "Design",
    },
  ];
  