import React from 'react';
import { Hero } from './sections/Hero';
import { BlogGrid } from './sections/BlogGrid';
import { Footer } from '../Footer';

export const BlogPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <BlogGrid />
      <Footer />
    </div>
  );
};