import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts } from './data/blogPosts';
import { Footer } from '../Footer';

export const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <Section className="py-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
          <Button variant="primary" onClick={() => navigate('/blog')}>
            Voltar para o Blog
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Section className="py-24" pattern>
        <div className="max-w-4xl mx-auto">
          <Button
            variant="secondary"
            icon={<ArrowLeft className="w-4 h-4" />}
            onClick={() => navigate('/blog')}
            className="mb-8"
          >
            Voltar para o Blog
          </Button>

          <div className="space-y-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{post.title}</h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};