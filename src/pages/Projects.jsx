import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <section className="projects">
    <h2>My Projects</h2>
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
