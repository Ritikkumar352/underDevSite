
import { education } from '../../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-16 lg:py-24 bg-muted/30">
      <div className="retro-container">
        <h2 className="retro-header text-center">
          <span className="text-primary">&lt;</span>
          Education
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="retro-terminal max-w-4xl mx-auto">
          <p className="font-vt323 text-xl md:text-2xl mb-6">
            <span className="text-retro-teal">$</span> cat education.json
          </p>

          <div className="space-y-8">
            {education.map((item, index) => (
              <div 
                key={index} 
                className="border-l-4 border-retro-purple pl-4 py-2 relative"
              >
                <div 
                  className="w-3 h-3 bg-retro-teal absolute -left-[10px] top-0"
                />
                <h3 className="font-press-start text-lg mb-2">{item.degree}</h3>
                <p className="font-vt323 text-xl mb-1">{item.institution}</p>
                <p className="font-mono text-muted-foreground mb-2">
                  <span className="text-retro-teal">$</span> {item.location} | {item.period}
                </p>
                <p className="font-mono">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
