import React from 'react';
import { GradientText } from '../ui/GradientText';
import { ExperienceCarousel } from './ExperienceCarousel';

interface ExperienceHeaderProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const ExperienceHeader: React.FC<ExperienceHeaderProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext
}) => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold">
          <GradientText>Experiências</GradientText>
        </h2>
        <p className="text-gray-400">Soluções que elevam seu nível no jogo</p>
      </div>
      
      {/* Navigation arrows - Hidden on desktop, shown below text on mobile */}
      <div className="flex justify-center lg:hidden">
        <ExperienceCarousel
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>

      {/* Navigation arrows - Shown on desktop, hidden on mobile */}
      <div className="hidden lg:flex justify-end">
        <ExperienceCarousel
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
};