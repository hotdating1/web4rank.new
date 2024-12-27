import React from 'react';
import { FileDown, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { GradientText } from '../ui/GradientText';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

export const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <Section className="py-24 bg-black" pattern>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            <GradientText>Acelere seu Crescimento</GradientText>
          </h2>
          <p className="text-gray-400">
            Descubra como podemos impulsionar seu negócio ao próximo nível
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Button 
            variant="secondary" 
            icon={<FileDown className="w-5 h-5" />}
            className="h-24"
            href="https://gamma.app/docs/Transforme-Seu-Negocio-com-Web4Rank-Solucoes-Inovadoras-para-Sua--omza78a3v0d1e5se"
          >
            <div className="text-left">
              <span className="block font-semibold text-lg">Baixe nossa Apresentação</span>
              <span className="text-sm text-gray-400">
                Material completo sobre nossas soluções
              </span>
            </div>
          </Button>
          
          <Button 
            variant="primary"
            icon={<Zap className="w-5 h-5" />}
            className="h-24"
            onClick={() => navigate(ROUTES.PERFORMANCE)}
          >
            <div className="text-left">
              <span className="block font-semibold text-lg">Performance</span>
              <span className="text-sm text-gray-400">
                Treinamentos focados em resultados
              </span>
            </div>
          </Button>
        </div>
      </div>
    </Section>
  );
};