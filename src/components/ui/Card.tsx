import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl" />
      <div className={`relative bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all ${className}`}>
        {children}
      </div>
    </div>
  );
};