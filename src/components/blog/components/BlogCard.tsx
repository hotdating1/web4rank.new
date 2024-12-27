import React from 'react';
import { Card } from '../../ui/Card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  description,
  image,
  category,
  date,
  readTime
}) => {
  const navigate = useNavigate();

  return (
    <Card className="group">
      <div className="space-y-4">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
          <Button
            variant="secondary"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => navigate(`/blog/${id}`)}
          >
            Ler mais
          </Button>
        </div>
      </div>
    </Card>
  );
};