import React from 'react';
import { Section } from '../../../ui/Section';
import { Button } from '../../../ui/Button';
import { CONTACT } from '../../../../utils/constants';

export const ContactForm = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Invista em você e no crescimento do seu negócio</h2>
          <p className="text-xl text-gray-400">
            Transforme sua ideia em realidade e tenha um site no ar rapidamente!
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Nome</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">E-mail</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">WhatsApp</label>
            <input
              type="tel"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <Button 
            variant="primary" 
            className="w-full"
            href={CONTACT.WHATSAPP_URL}
          >
            Quero Começar Agora
          </Button>
        </form>
      </div>
    </Section>
  );
};