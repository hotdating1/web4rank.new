import React from 'react';
import { Section } from '../../../ui/Section';
import { Play } from 'lucide-react';
import { Button } from '../../../ui/Button';

export const VideoDemo = () => {
  return (
    <Section id="video-demo" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Experimente a Automação</h2>
          <p className="text-xl text-gray-400">
            Veja como a automação transforma a experiência do cliente e otimiza seu time
          </p>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
          <video
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
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

        <div className="text-center">
          <Button variant="secondary">
            Experimente uma automação agora!
          </Button>
        </div>
      </div>
    </Section>
  );
};