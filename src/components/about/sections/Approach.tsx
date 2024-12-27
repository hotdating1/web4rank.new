import React from 'react';
import { Section } from '../../ui/Section';
import { Search, Code, Zap, BarChart } from 'lucide-react';

const approaches = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Análise Detalhada',
    description: 'Compreendemos a fundo seu negócio e seus objetivos'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Soluções Personalizadas',
    description: 'Desenvolvemos estratégias sob medida para sua empresa'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Tecnologia e Automação',
    description: 'Otimizamos processos para você economizar tempo e aumentar resultados'
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Acompanhamento Contínuo',
    description: 'Estamos ao seu lado para garantir performance constante'
  }
];

export const Approach = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center">Nossa Abordagem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="flex gap-6">
                <div className="text-cyan-400">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};