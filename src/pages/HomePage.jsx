
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import ProjectsSection from '../components/Home/ProjectsSection';
import Skills from '../components/Home/Skills';
import Education from '../components/Home/Education';
import Contact from '../components/Home/Contact';
import Layout from '../components/Layout/Layout';
import Experience from '../components/Home/Experience';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <ProjectsSection />
      <Experience />
      <Skills />
      <About />
      <Education />
      <Contact />
    </Layout>
  );
};

export default HomePage;
