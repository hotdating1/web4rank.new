import React from 'react';
import { Hero } from './sections/Hero';
import { CourseDetails } from './sections/CourseDetails';
import { Benefits } from './sections/Benefits';
import { ContactForm } from './sections/ContactForm';
import { Footer } from '../../Footer';

export const PerformancePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <CourseDetails />
      <Benefits />
      <ContactForm />
      <Footer />
    </div>
  );
};