export interface Project {
    title: string
    description: string
    image?: string
    link?: string
  }
  
  const projects: Project[] = [
    {
      title: "Proyecto Dummy 1",
      description: "Este es un proyecto de ejemplo sobre algo genial.",
      image: "/assets/project1.png",
      link: "#"
    },
    {
      title: "Proyecto Dummy 2",
      description: "Este es otro proyecto que hice para aprender algo nuevo.",
      image: "/assets/project2.png",
      link: "#"
    }
  ]
  
  export default projects
  