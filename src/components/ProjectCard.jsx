const ProjectCard = ({ title, description, github, demo }) => (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  );
  
  export default ProjectCard;
  