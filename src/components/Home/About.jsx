
import { Link } from 'react-router-dom';
import { personalInfo, skills } from '../../data/portfolioData';
import { ArrowDown } from 'lucide-react';

const About = () => {
  // Show only top 4 skills on the home page
  const topSkills = skills.slice(0, 4);

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="retro-container">
        <h2 className="retro-header text-center">
          <span className="text-primary">&lt;</span>
          About Me
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="retro-terminal">
            <p className="font-vt323 text-xl md:text-2xl mb-4">
              <span className="text-retro-teal">$</span> cat about_me.txt
            </p>
            <div className="space-y-4 font-mono">
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link 
                to="/about"
                className="flex items-center justify-center space-x-2 font-vt323 text-lg hover:text-primary transition-colors"
              >
                <span>Know More</span>
                <ArrowDown size={18} />
              </Link>
            </div>
          </div>

          <div className="retro-terminal">
            <p className="font-vt323 text-xl md:text-2xl mb-4">
              <span className="text-retro-teal">$</span> list info
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-vt323 text-xl mb-2 text-retro-teal">Location</h3>
                <p>{personalInfo.location}</p>
              </div>
              <div>
                <h3 className="font-vt323 text-xl mb-2 text-retro-teal">Email</h3>
                <p>{personalInfo.email}</p>
              </div>
              <div>
                <h3 className="font-vt323 text-xl mb-2 text-retro-teal">GitHub</h3>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-retro-purple transition-colors"
                >
                  github.com/yourusername
                </a>
              </div>
              <div>
                <h3 className="font-vt323 text-xl mb-2 text-retro-teal">LinkedIn</h3>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-retro-purple transition-colors"
                >
                  linkedin.com/in/yourusername
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
