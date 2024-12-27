import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceHeader } from './ExperienceHeader';
import { experiences } from './experienceData';

export const Experiences = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const experiencesPerPage = 2;
  const totalPages = Math.ceil(experiences.length / experiencesPerPage);

  const currentExperiences = experiences.slice(
    currentPage * experiencesPerPage,
    (currentPage + 1) * experiencesPerPage
  );

  return (
    <Section className="py-24 bg-black" pattern>
      <ExperienceHeader
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => setCurrentPage(prev => Math.max(0, prev - 1))}
        onNext={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentExperiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            {...exp}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};