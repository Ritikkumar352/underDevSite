import React from 'react';
import { experience } from '../data/portfolioData';
import Layout from '../components/Layout/Layout';

const ExperiencePage = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="retro-container">
          <h1 className="retro-header text-center mb-12">
            <span className="text-primary">&lt;</span>
            Experience Timeline
            <span className="text-primary">/&gt;</span>
          </h1>
          <div className="retro-terminal max-w-3xl mx-auto">
            <h2 className="font-vt323 text-2xl mb-6">
              <span className="text-retro-teal">$</span> cat my_journey.json
            </h2>
            <div className="relative border-l-4 border-retro-teal ml-4 pl-8 space-y-12">
              {experience.map((event, index) => (
                <div key={index} className="relative pb-8">
                  <div className="absolute -left-[41px] w-8 h-8 bg-retro-purple rounded-full flex items-center justify-center">
                    <span className="font-mono text-base">{event.year}</span>
                  </div>
                  <h3 className="font-press-start text-xl mb-2">{event.title}</h3>
                  <p className="font-mono mb-2">{event.description}</p>
                  {event.details && (
                    <div className="font-mono text-white bg-retro-purple/20 p-4 rounded-lg mb-2">
                      {event.details}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExperiencePage; 