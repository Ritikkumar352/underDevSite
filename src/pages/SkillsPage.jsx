import Layout from "../components/Layout/Layout";
import { skills } from "../data/portfolioData";
import { useNavigate } from "react-router-dom";
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
  Flame,
  Rocket,
  Lightbulb,
  Code2,
  Palette,
  LayoutPanelLeft,
  PanelsTopLeft,
  GalleryHorizontal,
  AppWindow,
} from "lucide-react";

const SkillsPage = () => {
  const navigate = useNavigate();

  // const skillCategories = {
  //   "Programming Languages": skills.filter(s => ["Python", "JavaScript", "Java", "C++"].includes(s.name)),
  //   "Web Technologies": skills.filter(s => ["React", "HTML/CSS", "Node.js", "Angular"].includes(s.name)),
  //   "Data & ML": skills.filter(s => ["Machine Learning", "SQL", "Data Analysis", "TensorFlow"].includes(s.name)),
  //   "Tools & Others": skills.filter(s => ["Git", "Docker", "AWS", "Linux"].includes(s.name))
  // };

  const skillCategories = {
    "Programming Languages": skills.filter((s) =>
      ["Java", "C", "JavaScript", "Python", "PHP", "SQL"].includes(s.name)
    ),
    "Backend Technologies": skills.filter((s) =>
      [
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "REST APIs",
        "Microservices",
      ].includes(s.name)
    ),
    "Frontend Technologies": skills.filter((s) =>
      [
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
        "Material-UI",
        "HTML",
        "CSS",
      ].includes(s.name)
    ),
    Databases: skills.filter((s) =>
      ["MySQL", "PostgreSQL", "MongoDb", "Redis"].includes(s.name)
    ),
    "DevOps & Cloud": skills.filter((s) =>
      ["Docker", "AWS", "Google Cloud", "Linux"].includes(s.name)
    ),
    "Tools & Others": skills.filter((s) =>
      [
        "GitHub",
        "Git",
        "Postman",
        "Firebase",
        "IntelliJ IDEA",
        "VS Code",
      ].includes(s.name)
    ),
  };

  // Function to get appropriate icon for each skill
  const getSkillIcon = (skillName) => {
    const iconProps = {
      className: "w-full h-full text-black",
      strokeWidth: 1.3,
    };

    switch (skillName.toLowerCase()) {
      case "html":
        return <Code2 {...iconProps} />;
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
      case "firebase":
        return <Flame {...iconProps} />;
      case "postman":
        return <Rocket {...iconProps} />;
      case "intellij idea":
        return <Lightbulb {...iconProps} />;
      case "vs code":
        return <Code2 {...iconProps} />;
      case "css":
        return <Palette {...iconProps} />;
      case "bootstrap":
        return <AppWindow {...iconProps} />;
      default:
        return <Cog {...iconProps} />;
    }
  };

  return (
    <Layout>
      <section className="py-16 lg:py-24 retro-texture">
        <div className="retro-container">
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 font-vt323 text-lg mb-6 hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>

          <h1 className="retro-header text-center">
            <span className="text-primary">&lt;</span>
            All Skills & Technologies
            <span className="text-primary">/&gt;</span>
          </h1>

          <div className="space-y-12 mt-10">
            {Object.entries(skillCategories).map(
              ([category, categorySkills]) => (
                <div key={category} className="retro-terminal">
                  <h2 className="font-vt323 text-2xl mb-6">
                    <span className="text-retro-teal">$</span> list --category "
                    {category}"
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="retro-card p-5 flex flex-col items-center justify-center hover:scale-105 transition-transform"
                      >
                        <div className="w-16 h-16 mb-3 bg-retro-teal rounded-full flex items-center justify-center">
                          {getSkillIcon(skill.name)}
                        </div>
                        <p className="font-vt323 text-center text-xl font-bold">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SkillsPage;
