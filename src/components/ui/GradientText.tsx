import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 ${className}`}>
      {children}
    </span>
  );
};