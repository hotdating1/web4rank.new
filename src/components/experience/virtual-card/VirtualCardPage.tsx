import React from 'react';
import { Hero } from './sections/Hero';
import { Benefits } from './sections/Benefits';
import { InteractiveDemo } from './sections/InteractiveDemo';
import { VideoSection } from './sections/VideoSection';
import { FeatureHighlights } from './sections/FeatureHighlights';
import { ContactForm } from './sections/ContactForm';
import { Footer } from '../../Footer';

export const VirtualCardPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Benefits />
      <InteractiveDemo />
      <VideoSection />
      <FeatureHighlights />
      <ContactForm />
      <Footer />
    </div>
  );
};