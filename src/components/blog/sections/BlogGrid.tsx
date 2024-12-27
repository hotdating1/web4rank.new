import React, { useState } from 'react';
import { Section } from '../../ui/Section';
import { BlogCard } from '../components/BlogCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { blogPosts } from '../data/blogPosts';

export const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </Section>
  );
};