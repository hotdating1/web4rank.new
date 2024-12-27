import React from 'react';
import { Section } from '../../ui/Section';
import { Mail, MessageCircle } from 'lucide-react';
import { CONTACT } from '../../../utils/constants';

export const QuickContact = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Atendimento Rápido e Personalizado</h2>
          <p className="text-xl text-gray-400">
            Caso prefira um atendimento mais direto, você pode também entrar em contato 
            conosco pelos seguintes canais:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="mailto:contato@web4rank.com"
            className="flex items-center justify-center gap-4 p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Mail className="w-6 h-6 text-cyan-400" />
            <span className="text-gray-300">contato@web4rank.com</span>
          </a>

          <a
            href={CONTACT.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <MessageCircle className="w-6 h-6 text-cyan-400" />
            <span className="text-gray-300">Iniciar conversa no WhatsApp</span>
          </a>
        </div>
      </div>
    </Section>
  );
};