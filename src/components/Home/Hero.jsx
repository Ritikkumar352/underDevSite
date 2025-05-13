
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center bg-retro-yellow dark:bg-black py-16 retro-texture">
      <div className="scanline animate-scanline"></div>
      <div className="retro-container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="retro-terminal w-full max-w-xl">
            <p className="font-vt323 text-2xl md:text-4xl mb-4">
              <span className="text-retro-teal">$</span> whoami
            </p>
            <h1 className="font-press-start text-xl sm:text-2xl md:text-3xl mb-4">
              {personalInfo.name}
            </h1>
            <p className="font-vt323 text-xl md:text-2xl mb-4">{personalInfo.title}</p>
            
            <div className="font-mono text-sm md:text-base space-y-2 mt-4">
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="pl-4 border-l-2 border-retro-teal">
                  {paragraph}
                </p>
            
              ))}
              
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="retro-terminal max-w-md overflow-hidden">
            <div className="aspect-square overflow-hidden mb-2">
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name}
                className="w-full h-full object-cover pixel-corners"
              />
            </div>
            <div className="text-center font-vt323">
              <p className="text-xl">&lt;developer&gt;</p>
              <p className="text-2xl font-bold">{personalInfo.name}</p>
              <p className="text-xl">&lt;/developer&gt;</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center group"
        aria-label="Scroll to About section"
      >
        <span className="text-sm font-vt323 mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce text-primary" />
      </a>
    </section>
  );
};

export default Hero;
