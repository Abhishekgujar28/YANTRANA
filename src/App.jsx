import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Platform from './components/Platform';
import Architecture from './components/Architecture';
import Workflow from './components/Workflow';
import Capabilities from './components/Capabilities';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar onLoginClick={openLoginModal} />
      
      <main className="flex-grow">
        <Hero />
        <Platform />
        <Architecture />
        <Workflow />
        <Capabilities />
        <CTA onEnterClick={openLoginModal} />
      </main>
      
      <Footer />

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
      />
    </div>
  );
}

export default App;
