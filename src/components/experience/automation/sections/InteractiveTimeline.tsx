import React, { useState } from 'react';
import { Section } from '../../../ui/Section';
import { Users, Mail, ClipboardCheck, Heart } from 'lucide-react';

const timelineItems = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Geração de Leads',
    description: 'Automatize capturas e respostas rápidas'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Nutrição de Clientes',
    description: 'Funis de e-mail personalizados'
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Gestão de Equipe',
    description: 'Fluxos internos para aprovação e execução'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Pós-venda',
    description: 'Acompanhamento e pesquisas de satisfação'
  }
];

export const InteractiveTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Quando Implementar Automação?</h2>
          <p className="text-xl text-gray-400">
            Descubra os momentos ideais para adotar automações em seu negócio
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 cursor-pointer transition-all
                  ${index % 2 === 0 ? 'flex-row-reverse' : ''}
                  ${activeIndex === index ? 'scale-105' : 'opacity-70'}
                `}
                onClick={() => setActiveIndex(index)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-4 h-4 rounded-full border-2 transition-colors
                    ${activeIndex === index ? 'bg-cyan-500 border-cyan-400' : 'bg-gray-800 border-gray-700'}
                  `} />
                </div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-cyan-400 ${index % 2 === 0 ? 'order-last' : ''}`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
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