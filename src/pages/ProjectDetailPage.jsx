
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import ProjectDetailSection from '../components/Projects/ProjectDetailSection';
import Layout from '../components/Layout/Layout';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const projectId = parseInt(id);
  const project = projects.find(p => p.id === projectId);
  
  useEffect(() => {
    // Redirect to projects page if project not found
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);
  
  if (!project) return null;

  return (
    <Layout>
      <div className="retro-container py-8">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center space-x-2 font-vt323 text-lg mb-6 hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </button>
        
        <ProjectDetailSection project={project} />
      </div>
    </Layout>
  );
};

export default ProjectDetailPage;
