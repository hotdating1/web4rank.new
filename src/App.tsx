import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AutomationPage } from './components/experience/automation/AutomationPage';
import { CasesPage } from './components/experience/cases/CasesPage';
import { VirtualCardPage } from './components/experience/virtual-card/VirtualCardPage';
import { SalesPage } from './components/experience/sales/SalesPage';
import { BrandingPage } from './components/experience/branding/BrandingPage';
import { FunnelsPage } from './components/experience/funnels/FunnelsPage';
import { PerformancePage } from './components/experience/performance/PerformancePage';
import { FAQPage } from './components/faq/FAQPage';
import { AboutPage } from './components/about/AboutPage';
import { BlogPage } from './components/blog/BlogPage';
import { BlogPostPage } from './components/blog/BlogPostPage';
import { ContactPage } from './components/contact/ContactPage';
import { NavBar } from './components/navigation/NavBar';
import { BackToTop } from './components/ui/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/automacao" element={<AutomationPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/cartao-virtual" element={<VirtualCardPage />} />
        <Route path="/vendas" element={<SalesPage />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/funis" element={<FunnelsPage />} />
        <Route path="/performance" element={<PerformancePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
      <NavBar />
      <BackToTop />
    </div>
  );
}