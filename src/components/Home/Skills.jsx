
import { Link } from 'react-router-dom';
import { skills } from '../../data/portfolioData';
import {
  ArrowLeft,
  Code,
  Database,
  Terminal,
  FileCode,
  Monitor,
  Server,
  Laptop,
  Smartphone,
  Cog,
  ServerCog,
  DatabaseZap,
  Braces,
  Copyright,
  PowerCircle,
  CirclePower,
  Shield,
  Microscope,
  Cloud,
  Container,
  GitBranch,
  Github,
  ShieldCheckIcon,
} from "lucide-react";
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
    case "html":
        return <Code {...iconProps} />;
      case "microservices":
        return <Microscope {...iconProps} />;
      case "spring security":
        return <ShieldCheckIcon {...iconProps} />;
      case "python":
        return <FileCode {...iconProps} />;
      case "javascript":
        return <Code {...iconProps} />;
      case "react":
        return <Monitor {...iconProps} />;
      case "java":
        return <Braces {...iconProps} />;
      case "c":
        return <Copyright {...iconProps} />;
      case "html/css":
        return <FileCode {...iconProps} />;
      case "node.js":
        return <Server {...iconProps} />;
      case "angular":
        return <Code {...iconProps} />;
      case "machine learning":
        return <Server {...iconProps} />;
      case "sql":
        return <FileCode {...iconProps} />;
      case "mysql":
        return <Database {...iconProps} />;
      case "postgresql":
        return <Database {...iconProps} />;
      case "mongodb":
        return <Database {...iconProps} />;
      case "mongodb":
        return <Database {...iconProps} />;
      case "redis":
        return <DatabaseZap {...iconProps} />;
      case "git":
        return <GitBranch {...iconProps} />;
      case "docker":
        return <Container {...iconProps} />;
      case "aws":
        return <Server {...iconProps} />;
      case "linux":
        return <Terminal {...iconProps} />;
      case "google cloud":
        return <Cloud {...iconProps} />;
      case "spring boot":
        return <CirclePower {...iconProps} />;
      case "github":
        return <Github {...iconProps} />;
      default:
        return <Cog {...iconProps} />;
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
