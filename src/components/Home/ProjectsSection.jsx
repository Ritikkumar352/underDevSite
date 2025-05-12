
import { Link } from 'react-router-dom';
import { projects } from '../../data/portfolioData';
import ProjectCard from '../Projects/ProjectCard';

const ProjectsSection = () => {
  // Display only featured projects (first 3) on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="retro-container">
        <h2 className="retro-header text-center">
          <span className="text-primary">&lt;</span>
          Projects
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/projects"
            className="retro-terminal inline-block px-6 py-3 font-vt323 text-xl hover:scale-105 transition-transform"
          >
            <span className="text-retro-teal">$</span> View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
