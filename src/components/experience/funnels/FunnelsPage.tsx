import React from 'react';
import { Hero } from './sections/Hero';
import { Explanation } from './sections/Explanation';
import { InteractiveFunnel } from './sections/InteractiveFunnel';
import { Benefits } from './sections/Benefits';
import { Process } from './sections/Process';
import { Results } from './sections/Results';
import { ContactForm } from './sections/ContactForm';
import { Footer } from '../../Footer';

export const FunnelsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Explanation />
      <InteractiveFunnel />
      <Benefits />
      <Process />
      <Results />
      <ContactForm />
      <Footer />
    </div>
  );
};