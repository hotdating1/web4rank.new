import React from 'react';
import { Card } from '../../../../ui/Card';

interface ResultsDisplayProps {
  result: {
    title: string;
    description: string;
    metrics: string[];
  };
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  return (
    <Card className="max-w-3xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{result.title}</h3>
          <p className="text-gray-400">{result.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {result.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg text-center"
            >
              <p className="text-cyan-400 font-semibold">{metric}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};