import React from 'react';
import { Container } from './layout/Container';
import { FooterLinks } from './footer/FooterLinks';
import { FooterBottom } from './footer/FooterBottom';
import { Logo } from './ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16">
      <Container>
        <div className="space-y-12">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="lg:w-1/3 space-y-4 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <Logo />
              </div>
              <p className="text-gray-400">
                Transformando negócios através de soluções digitais inovadoras e 
                resultados mensuráveis.
              </p>
            </div>
            <FooterLinks />
          </div>
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
};