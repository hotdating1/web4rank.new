import React from 'react';
import { Section } from '../../../ui/Section';
import { Leaf, Share2, Palette, Link2 } from 'lucide-react';

const benefits = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Sustentável e Infinito',
    description: 'Nunca acaba e é 100% digital'
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Compartilhamento Imediato',
    description: 'Por WhatsApp, QR Code, NFC e redes sociais'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Design Personalizado',
    description: 'Alinhado à identidade da sua marca'
  },
  {
    icon: <Link2 className="w-8 h-8" />,
    title: 'Interativo e Multifuncional',
    description: 'Integração com links, vídeos e redes sociais'
  }
];

export const Benefits = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Mais Prático, Mais Eficiente, Mais Impactante</h2>
          <p className="text-xl text-gray-400">Por que ter um Cartão de Visitas Virtual?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-800 p-8 hover:bg-gray-700 transition-colors"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:opacity-75 transition-opacity" />
              </div>
              
              <div className="relative space-y-4">
                <div className="text-cyan-400">{benefit.icon}</div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};