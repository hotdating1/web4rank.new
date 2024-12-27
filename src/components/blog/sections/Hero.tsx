import React from 'react';
import { Section } from '../../ui/Section';
import { GradientText } from '../../ui/GradientText';

export const Hero = () => {
  return (
    <Section className="py-24" pattern>
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold">
          <GradientText>Blog</GradientText>
        </h1>
        <p className="text-xl text-gray-400">
          Insights, novidades e estratégias para impulsionar seu negócio digital
        </p>
      </div>
    </Section>
  );
};