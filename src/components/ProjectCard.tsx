import type { Project } from "../data/projects";

const ProjectCard = ({ title, description, image, link }: Project) => {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      {image && <img src={image} alt={title} className="mb-2 rounded" />}
      <h3 className="font-bold text-lg">{title}</h3>
      <p>{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Ver más
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
