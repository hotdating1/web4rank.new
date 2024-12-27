import React from 'react';
import { Section } from '../../../ui/Section';
import { Play } from 'lucide-react';
import { Button } from '../../../ui/Button';

export const VideoSection = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">O Que Nossos Clientes Dizem Sobre Nós</h2>
          <p className="text-xl text-gray-400">
            Histórias reais de transformação e crescimento
          </p>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
          <video
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="primary"
              icon={<Play className="w-6 h-6" />}
              className="scale-125 group-hover:scale-150 transition-transform duration-300"
            >
              Ver Depoimentos
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-400">
            <span className="text-cyan-400 font-bold">Antes:</span> "Baixo desempenho em leads"
            <br />
            <span className="text-cyan-400 font-bold">Depois:</span> "+300% de crescimento em 60 dias com automação personalizada"
          </p>
        </div>
      </div>
    </Section>
  );
};