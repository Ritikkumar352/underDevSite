
import { Link } from 'react-router-dom';
import { skills } from '../../data/portfolioData';
import { Code, Database, Terminal, FileCode, Monitor, Server } from 'lucide-react';

const Skills = () => {
  // Function to get appropriate icon for each skill
  // const getSkillIcon = (skillName) => {
  //   const iconProps = { className: "w-full h-full text-black", strokeWidth: 1.5 };
    
  //   switch(skillName.toLowerCase()) {
  //     case 'python':
  //       return <FileCode {...iconProps} />;
  //     case 'javascript':
  //       return <Code {...iconProps} />;
  //     case 'react':
  //       return <Monitor {...iconProps} />;
  //     case 'java':
  //       return <Terminal {...iconProps} />;
  //     case 'c++':
  //       return <Terminal {...iconProps} />;
  //     case 'machine learning':
  //       return <Server {...iconProps} />;
  //     case 'sql':
  //       return <Database {...iconProps} />;
  //     case 'git':
  //       return <Code {...iconProps} />;
  //     default:
  //       return <FileCode {...iconProps} />;
  //   }
  // };

  const getSkillIcon = (skillName) => {
  const iconProps = { className: "w-full h-full text-black", strokeWidth: 1.5 };
  
  switch(skillName.toLowerCase()) {
    case 'java':
    case 'c':
    case 'typescript':
    case 'python':
    case 'php':
    case 'sql':
      return <Terminal {...iconProps} />;
    case 'spring boot':
    case 'spring security':
    case 'hibernate':
      return <Server {...iconProps} />;
    case 'rest apis':
    case 'microservices':
      return <Code {...iconProps} />;
    case 'react.js':
    case 'bootstrap':
    case 'tailwind css':
    case 'material-ui':
    case 'html':
    case 'css':
      return <Monitor {...iconProps} />;
    case 'mysql':
    case 'postgresql':
    case 'redis':
      return <Database {...iconProps} />;
    case 'docker':
    case 'aws':
    case 'google cloud':
    case 'linux':
      return <Laptop {...iconProps} />;
    case 'github':
    case 'git':
    case 'postman':
    case 'firebase':
    case 'intellij idea':
    case 'vs code':
      return <Cog {...iconProps} />;
    default:
      return <FileCode {...iconProps} />;
  }
};


  return (
    <section id="skills" className="py-16 lg:py-24 bg-muted/30 retro-texture">
      <div className="retro-container">
        <h2 className="retro-header text-center">
          <span className="text-primary">&lt;</span>
          Skills
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="retro-terminal max-w-4xl mx-auto">
          <p className="font-vt323 text-xl md:text-2xl mb-6">
            <span className="text-retro-teal">$</span> list --skills
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.slice(0, 8).map((skill) => (
              <div 
                key={skill.name} 
                className="retro-card p-5 flex flex-col items-center justify-center hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 mb-3 bg-retro-teal rounded-full flex items-center justify-center">
                  {getSkillIcon(skill.name)}
                </div>
                <p className="font-vt323 text-center text-lg font-bold">{skill.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              to="/skills"
              className="retro-terminal inline-block px-6 py-3 font-vt323 text-xl hover:scale-105 transition-transform"
            >
              <span className="text-retro-teal">$</span> See All Skills
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
