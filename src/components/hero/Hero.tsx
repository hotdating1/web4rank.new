import React from 'react';
import { Section } from '../ui/Section';
import { HeroContent } from './HeroContent';

export const Hero = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-black py-20" pattern>
      <HeroContent />
    </Section>
  );
};