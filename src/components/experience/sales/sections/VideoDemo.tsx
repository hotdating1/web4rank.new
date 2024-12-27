import React from 'react';
import { Section } from '../../../ui/Section';
import { Play } from 'lucide-react';
import { Button } from '../../../ui/Button';

export const VideoDemo = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Veja um Caso de Sucesso na Prática</h2>
          <p className="text-xl text-gray-400">
            Como transformamos processos manuais em vendas automatizadas
          </p>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
          <video
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="primary"
              icon={<Play className="w-6 h-6" />}
              className="scale-125 group-hover:scale-150 transition-transform duration-300"
            >
              Ver Demo
            </Button>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-lg">
            <span className="text-cyan-400 font-bold">Antes:</span>
            <span className="text-gray-400"> Processo manual e baixa conversão</span>
          </p>
          <p className="text-lg">
            <span className="text-cyan-400 font-bold">Depois:</span>
            <span className="text-gray-400"> +300% de crescimento em 60 dias com automação personalizada</span>
          </p>
        </div>
      </div>
    </Section>
  );
};