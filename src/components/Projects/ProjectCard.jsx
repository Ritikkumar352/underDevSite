
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block">
      <article className="retro-card h-full flex flex-col">
        <div className="relative">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
          {project.isTeamProject && (
            <div className="absolute top-2 right-2 bg-retro-purple text-white p-1 rounded font-mono text-xs flex items-center">
              <Users size={14} className="mr-1" />
              Team Project
            </div>
          )}
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-press-start text-lg mb-2">{project.title}</h3>
          <p className="font-mono text-sm mb-4 flex-1">{project.shortDescription}</p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs font-mono bg-muted px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs font-mono bg-muted px-2 py-1 rounded">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
            
            <p className="font-vt323 text-lg mt-4 text-primary">
              $ project --view-details
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
