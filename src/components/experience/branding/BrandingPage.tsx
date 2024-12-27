import React from 'react';
import { Hero } from './sections/Hero';
import { Benefits } from './sections/Benefits';
import { Results } from './sections/Results';
import { VideoSection } from './sections/VideoSection';
import { Process } from './sections/Process';
import { ContactForm } from './sections/ContactForm';
import { Footer } from '../../Footer';

export const BrandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Benefits />
      <Results />
      <VideoSection />
      <Process />
      <ContactForm />
      <Footer />
    </div>
  );
};