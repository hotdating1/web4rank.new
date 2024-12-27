import React, { useState } from 'react';
import { Section } from '../../../ui/Section';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    before: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    after: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    title: 'E-commerce Transformation',
    metrics: {
      reach: '+150%',
      engagement: '+200%',
      conversion: '+80%'
    }
  },
  // Add more cases here
];

export const Results = () => {
  const [currentCase, setCurrentCase] = useState(0);

  return (
    <Section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Resultados do Reconhecimento de Marca</h2>
          <p className="text-xl text-gray-400">
            Cases reais de transformação e crescimento
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              <img
                src={cases[currentCase].before}
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <span className="text-lg font-semibold">Antes</span>
              </div>
            </div>

            {/* After Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              <img
                src={cases[currentCase].after}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <span className="text-lg font-semibold">Depois</span>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-cyan-400 text-2xl font-bold">{cases[currentCase].metrics.reach}</p>
              <p className="text-gray-400">Alcance</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-cyan-400 text-2xl font-bold">{cases[currentCase].metrics.engagement}</p>
              <p className="text-gray-400">Engajamento</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-cyan-400 text-2xl font-bold">{cases[currentCase].metrics.conversion}</p>
              <p className="text-gray-400">Conversão</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <button
              onClick={() => setCurrentCase(prev => Math.max(0, prev - 1))}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <button
              onClick={() => setCurrentCase(prev => Math.min(cases.length - 1, prev + 1))}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};