import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ExperienceCarouselProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onPrevious}
        disabled={currentPage === 0}
        className="p-2 rounded-full border border-gray-700 disabled:opacity-50 hover:bg-gray-800 transition-all"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className="p-2 rounded-full border border-gray-700 disabled:opacity-50 hover:bg-gray-800 transition-all"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};