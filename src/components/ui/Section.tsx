import React from 'react';
import { Container } from '../layout/Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  pattern?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '',
  pattern = false 
}) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {pattern && <div className="absolute inset-0 bg-grid-pattern opacity-10" />}
      <Container className="relative z-10">
        {children}
      </Container>
    </section>
  );
};