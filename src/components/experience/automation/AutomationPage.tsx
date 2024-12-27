import React from 'react';
import { Hero } from './sections/Hero';
import { PowerSection } from './sections/PowerSection';
import { InteractiveTimeline } from './sections/InteractiveTimeline';
import { VideoDemo } from './sections/VideoDemo';
import { Benefits } from './sections/Benefits';
import { ContactForm } from './sections/ContactForm';
import { Testimonials } from './sections/Testimonials';
import { Footer } from '../../Footer';

export const AutomationPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <PowerSection />
      <InteractiveTimeline />
      <VideoDemo />
      <Benefits />
      <ContactForm />
      <Testimonials />
      <Footer />
    </div>
  );
};