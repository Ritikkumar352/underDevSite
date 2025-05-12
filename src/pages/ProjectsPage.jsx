
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/Projects/ProjectCard';
import Layout from '../components/Layout/Layout';

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="retro-container">
          <h1 className="retro-header text-center">
            <span className="text-primary">&lt;</span>
            All Projects
            <span className="text-primary">/&gt;</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
