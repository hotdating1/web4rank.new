import React from 'react';

export const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col items-center space-y-4">
      <p className="text-gray-400 text-center">
        © {currentYear} Web4Rank. Todos os direitos reservados.
      </p>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
          Termos
        </a>
        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
          Privacidade
        </a>
      </div>
    </div>
  );
};