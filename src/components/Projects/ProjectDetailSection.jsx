
import { useState } from 'react';
import { Github, ExternalLink, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetailSection = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageSection, setImageSection] = useState('screenshots'); // 'screenshots', 'architecture', 'database'
  
  const images = {
    screenshots: project.images || [],
    architecture: project.architectureDiagrams || [],
    database: project.dbDiagrams || []
  };
  
  const currentImages = images[imageSection];
  
  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };
  
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  return (
    <section className="py-16">
      <div className="retro-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Project Images */}
          <div className="retro-terminal">
            <div className="flex flex-wrap gap-4 mb-4 font-vt323">
              <button 
                className={`px-3 py-1 ${imageSection === 'screenshots' 
                  ? 'bg-retro-teal dark:bg-retro-purple text-black dark:text-white' 
                  : 'bg-muted hover:bg-muted-foreground/20'
                }`}
                onClick={() => { setImageSection('screenshots'); setCurrentImageIndex(0); }}
                disabled={project.images.length === 0}
              >
                Screenshots
              </button>
              <button 
                className={`px-3 py-1 ${imageSection === 'architecture' 
                  ? 'bg-retro-teal dark:bg-retro-purple text-black dark:text-white' 
                  : 'bg-muted hover:bg-muted-foreground/20'
                }`}
                onClick={() => { setImageSection('architecture'); setCurrentImageIndex(0); }}
                disabled={project.architectureDiagrams.length === 0}
              >
                Architecture
              </button>
              <button 
                className={`px-3 py-1 ${imageSection === 'database' 
                  ? 'bg-retro-teal dark:bg-retro-purple text-black dark:text-white' 
                  : 'bg-muted hover:bg-muted-foreground/20'
                }`}
                onClick={() => { setImageSection('database'); setCurrentImageIndex(0); }}
                disabled={project.dbDiagrams.length === 0}
              >
                Database
              </button>
            </div>
            
            {currentImages.length > 0 ? (
              <div className="relative">
                <div className="aspect-video relative">
                  <img 
                    src={currentImages[currentImageIndex]} 
                    alt={`${project.title} ${imageSection}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {currentImages.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between">
                    <button 
                      onClick={handlePrevImage}
                      className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full ml-2"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full mr-2"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}
                
                {currentImages.length > 1 && (
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                    {currentImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-3 h-3 rounded-full ${
                          idx === currentImageIndex
                            ? 'bg-retro-teal dark:bg-retro-purple'
                            : 'bg-muted'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-video flex items-center justify-center bg-muted">
                <p className="font-mono text-muted-foreground">
                  No {imageSection} available
                </p>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="retro-terminal">
            <h1 className="font-press-start text-xl mb-4">{project.title}</h1>
            
            <div className="space-y-4 font-mono">
              {project.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8">
              <h2 className="font-vt323 text-xl mb-2 text-retro-teal dark:text-retro-teal">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-mono bg-muted px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-muted hover:bg-muted-foreground/20 transition-colors rounded"
                  >
                    <Github size={18} />
                    <span className="font-vt323">GitHub</span>
                  </a>
                )}
                
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-retro-teal dark:bg-retro-purple text-black dark:text-white transition-colors rounded"
                  >
                    <ExternalLink size={18} />
                    <span className="font-vt323">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="retro-terminal mt-10">
          <div className="flex items-center mb-6">
            <Users className="mr-2 text-retro-teal dark:text-retro-teal" size={24} />
            <h2 className="font-vt323 text-2xl">Project Team</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.team.map((member, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-retro-purple">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-vt323 text-lg">{member.name}</h3>
                  <p className="font-mono text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailSection;
