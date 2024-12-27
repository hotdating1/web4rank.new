import React from 'react';

export const HeroImage = () => {
  return (
    <div className="flex-1 animate-fade-in" style={{ animationDelay: '400ms' }}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
        <img
          src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80"
          alt="Tech Visual"
          className="rounded-lg border border-gray-800 shadow-2xl relative z-10 transition-transform hover:scale-[1.02] duration-500"
        />
      </div>
    </div>
  );
};