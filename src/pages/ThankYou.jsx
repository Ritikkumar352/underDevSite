import React from 'react';
import Layout from '../components/Layout/Layout';

const ThankYou = () => (
  <Layout>
    <section className="py-24">
      <div className="retro-container text-center">
        <h1 className="retro-header mb-6">
          <span className="text-primary">&lt;</span>
          Thank You
          <span className="text-primary">/&gt;</span>
        </h1>
        <div className="retro-terminal max-w-lg mx-auto p-8">
          <p className="font-vt323 text-2xl mb-4 text-retro-teal">$</p>
          <p className="font-mono text-lg mb-4">Your message has been received! I will get back to you soon.</p>
          <a href="/" className="retro-terminal inline-block px-6 py-3 font-vt323 text-xl hover:scale-105 transition-transform mt-6">
            <span className="text-retro-teal">$</span> Back to Home
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default ThankYou; 