import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../../utils/constants';

export const NavBar = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
      <a
        href={CONTACT.WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
        <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 p-3 sm:p-4 rounded-full hover:scale-110 transition-transform">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
      </a>
    </div>
  );
};