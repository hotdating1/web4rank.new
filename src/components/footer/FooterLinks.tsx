import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

interface FooterLinkGroupProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => (
  <div className="space-y-4 text-center">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link 
            to={link.href}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const FooterLinks = () => {
  const linkGroups = [
    {
      title: 'Experiências',
      links: [
        { label: 'Automações', href: ROUTES.AUTOMATION },
        { label: 'Cases de Sucesso', href: ROUTES.CASES },
        { label: 'Cartão Virtual', href: ROUTES.VIRTUAL_CARD },
        { label: 'Escala em Vendas', href: ROUTES.SALES },
        { label: 'Reconhecimento de Marca', href: ROUTES.BRANDING },
        { label: 'Funis de Conversão', href: ROUTES.FUNNELS }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', href: ROUTES.ABOUT },
        { label: 'FAQ', href: ROUTES.FAQ }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Blog', href: ROUTES.BLOG },
        { label: 'Contato', href: ROUTES.CONTACT }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 sm:mt-0">
      {linkGroups.map((group, index) => (
        <FooterLinkGroup key={index} {...group} />
      ))}
    </div>
  );
};