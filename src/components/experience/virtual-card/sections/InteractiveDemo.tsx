import React from 'react';
import { Section } from '../../../ui/Section';
import { Button } from '../../../ui/Button';
import { Phone, Share2, Smartphone } from 'lucide-react';

export const InteractiveDemo = () => {
  return (
    <Section id="demo" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Explore o Cartão em Ação</h2>
          <p className="text-xl text-gray-400">
            Interaja com um exemplo real do nosso cartão virtual
          </p>
        </div>

        <div className="relative aspect-[9/16] max-w-xs mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
          <div className="relative bg-gray-900 rounded-3xl p-6 border border-gray-800 h-full">
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">João Silva</h3>
                <p className="text-gray-400">CEO & Founder</p>
              </div>

              <div className="space-y-4">
                <Button variant="primary" className="w-full" icon={<Phone className="w-4 h-4" />}>
                  WhatsApp
                </Button>
                <Button variant="secondary" className="w-full" icon={<Share2 className="w-4 h-4" />}>
                  Compartilhar
                </Button>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <a href="#" className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                    <Smartphone className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm">Contato</span>
                  </a>
                  {/* Add more quick action buttons */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary">
            Solicite o Seu Agora e Eleve Sua Conexão
          </Button>
        </div>
      </div>
    </Section>
  );
};