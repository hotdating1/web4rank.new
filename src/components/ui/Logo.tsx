import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        {/* 4 Pillars Logo */}
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-sm transform rotate-45" />
        <div className="absolute bottom-0 left-2 w-2 h-3 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-sm transform rotate-45" />
        <div className="absolute bottom-0 left-4 w-2 h-4 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-sm transform rotate-45" />
        <div className="absolute bottom-0 left-6 w-2 h-5 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-sm transform rotate-45" />
      </div>
      <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Web4Rank
      </span>
    </Link>
  );
};