import React from 'react';
import { Section } from '../../../ui/Section';
import { Users, Mail, ShoppingCart } from 'lucide-react';

const stages = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Topo do Funil',
    description: 'Atração com conteúdos estratégicos',
    examples: ['Anúncios', 'SEO', 'Redes Sociais']
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Meio do Funil',
    description: 'Nutrição com automação e valor',
    examples: ['E-books', 'Vídeos', 'Webinars']
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Fundo do Funil',
    description: 'Conversão direta',
    examples: ['Ofertas', 'Propostas', 'Fechamentos']
  }
];

export const Explanation = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Guiamos Seu Público da Descoberta à Decisão</h2>
          <p className="text-xl text-gray-400">O que são Funis de Conversão?</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-blue-500 hidden lg:block" />

          <div className="space-y-12">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                {/* Stage Number */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                </div>

                <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="lg:w-1/2 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-cyan-400">{stage.icon}</div>
                      <h3 className="text-2xl font-semibold">{stage.title}</h3>
                    </div>
                    <p className="text-gray-400">{stage.description}</p>
                    <div className="flex gap-2">
                      {stage.examples.map((example, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm text-cyan-400"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};