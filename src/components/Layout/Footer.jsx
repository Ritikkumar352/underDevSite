
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="retro-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="font-press-start text-lg mb-4">
              <span className="text-primary">&lt;</span>
              <span>Portfolio</span>
              <span className="text-primary">/&gt;</span>
            </Link>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              A retro-styled developer portfolio showcasing my work and skills
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-vt323 text-xl mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <a href="/#about" className="hover:text-primary transition-colors">About</a>
              <a href="/#education" className="hover:text-primary transition-colors">Education</a>
              <a href="/#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-vt323 text-xl mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-sm">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2 font-mono text-xs">
            <span className="text-primary">$</span> Made with <span className="text-red-500">♥</span> and React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
