import projects from "../../data/projects";

const Projects = () => {
  return (
    <div>
      <h2>Proyectos</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
