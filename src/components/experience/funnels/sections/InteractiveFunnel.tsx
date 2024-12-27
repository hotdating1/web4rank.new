import React from 'react';
import { Section } from '../../../ui/Section';
import { Play } from 'lucide-react';
import { Button } from '../../../ui/Button';

export const InteractiveFunnel = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Exemplo Prático de Funil</h2>
          <p className="text-xl text-gray-400">
            Veja como funciona um funil de conversão na prática
          </p>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
          <video
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="primary"
              icon={<Play className="w-6 h-6" />}
              className="scale-125 group-hover:scale-150 transition-transform duration-300"
            >
              Ver Demonstração
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button variant="secondary">
            Quer um Funil Personalizado? Veja Como Funciona
          </Button>
        </div>
      </div>
    </Section>
  );
};