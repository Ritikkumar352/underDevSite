
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutMePage from './pages/AboutMePage';
import SkillsPage from './pages/SkillsPage';
import NotFound from './pages/NotFound';
import Contact from './components/Home/Contact';
import ExperiencePage from './pages/ExperiencePage';
import ThankYou from './pages/ThankYou';

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* // add blog page and then add path here */}    TODO
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
