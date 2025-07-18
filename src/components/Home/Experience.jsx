import React from 'react';
import { experience } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-muted/30">
      <div className="retro-container">
        <h2 className="retro-header text-center">
          <span className="text-primary">&lt;</span>
          Experience
          <span className="text-primary">/&gt;</span>
        </h2>
        <div className="retro-terminal mt-8">
          <h2 className="font-vt323 text-2xl mb-6">
            <span className="text-retro-teal">$</span> cat my_journey.json
          </h2>
          <div className="relative border-l-2 border-retro-teal ml-4 pl-8 space-y-8">
            {experience.map((event, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] w-6 h-6 bg-retro-purple rounded-full flex items-center justify-center">
                  <span className="font-mono text-xs">{event.year}</span>
                </div>
                <h3 className="font-press-start text-lg">{event.title}</h3>
                <p className="font-mono mt-2">{event.description}</p>
                {event.details && (
                  <p className="font-mono mt-2 list-disc ml-5 text-white">{event.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <a 
            href="/experience"
            className="retro-terminal inline-block px-6 py-3 font-vt323 text-xl hover:scale-105 transition-transform"
          >
            <span className="text-retro-teal">$</span> View All Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience; 