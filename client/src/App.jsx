import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';
import AdminInquiriesModal from './components/AdminInquiriesModal';

export default function App() {
  const [preselectedService, setPreselectedService] = useState('Website Development');
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'privacy' | 'terms' | null
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
  };

  const handleOpenLegal = (type) => {
    setActiveLegalModal(type);
  };

  const handleCloseLegal = () => {
    setActiveLegalModal(null);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-electric-500 selection:text-navy-950">
      {/* Navigation Bar */}
      <Navbar 
        onOpenLegal={handleOpenLegal}
        onSelectService={handleSelectService}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Skills />
        <Projects />
        <Process />
        <WhyChooseMe onSelectBudgetAndService={handleSelectService} />
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenLegal={handleOpenLegal}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Modals */}
      <LegalModals 
        activeModal={activeLegalModal} 
        onClose={handleCloseLegal} 
      />

      <AdminInquiriesModal 
        isOpen={adminModalOpen} 
        onClose={() => setAdminModalOpen(false)} 
      />
    </div>
  );
}
