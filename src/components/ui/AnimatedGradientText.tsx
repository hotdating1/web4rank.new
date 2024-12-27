import React from 'react';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <span 
      className={`relative inline-block ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[200%_auto] animate-gradient-x opacity-75 bg-clip-text text-transparent">
        {children}
      </span>
      <span className="relative bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
};