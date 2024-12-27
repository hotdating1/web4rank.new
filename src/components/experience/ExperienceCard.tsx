import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card';
import * as Icons from 'lucide-react';
import { ExperienceType } from './experienceData';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface ExperienceCardProps extends ExperienceType {
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  icon,
  title,
  desc,
  image,
  index,
  path
}) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="animate-fade-in relative"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <div className="p-3 sm:p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-gray-800">
            <div className="text-cyan-400">
              {icon && Icons[icon as keyof typeof Icons] && 
                React.createElement(Icons[icon as keyof typeof Icons], { size: 32 })}
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm sm:text-base text-gray-400 mt-1">{desc}</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg flex-1">
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center gap-3">
            <p className="text-white text-sm sm:text-base font-medium text-center">
              Explore mais sobre {title.toLowerCase()}
            </p>
            <Button
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => navigate(path)}
              className="w-full sm:w-auto text-sm"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};