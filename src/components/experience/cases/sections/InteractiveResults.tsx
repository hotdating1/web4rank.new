import React, { useState } from 'react';
import { Section } from '../../../ui/Section';
import { CategorySelector } from './interactive/CategorySelector';
import { ResultsDisplay } from './interactive/ResultsDisplay';
import { ImageCarousel } from './interactive/ImageCarousel';

const categories = ['Vendas', 'Branding', 'Automação', 'Gestão'];

const results = {
  'Vendas': {
    title: 'Aumento de 300% em Vendas',
    description: 'Implementação de funil automatizado e otimização de conversão',
    metrics: ['300% mais vendas', '50% menos CAC', '2x ROI']
  },
  'Branding': {
    title: 'Reconhecimento de Marca',
    description: 'Estratégia completa de posicionamento e identidade visual',
    metrics: ['85% mais menções', '90% sentimento positivo', '3x alcance']
  },
  'Automação': {
    title: 'Eficiência Operacional',
    description: 'Automação de processos e integração de sistemas',
    metrics: ['70% menos tempo', '95% menos erros', '4x produtividade']
  },
  'Gestão': {
    title: 'Gestão Otimizada',
    description: 'Implementação de dashboards e KPIs automatizados',
    metrics: ['100% visibilidade', '60% mais eficiência', '30% economia']
  }
};

export const InteractiveResults = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Explore os Resultados</h2>
          <p className="text-xl text-gray-400">
            Escolha um desafio e veja como resolvemos
          </p>
        </div>

        <CategorySelector
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <ResultsDisplay result={results[selectedCategory]} />

        <ImageCarousel />
      </div>
    </Section>
  );
};