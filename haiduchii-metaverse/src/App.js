// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import FeaturesGrid from './components/FeaturesGrid';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Account from './components/Account';
import Footer from './components/Footer';
import Modal from './components/Modal';
import HaiduciiContent from './components/HaiduciiContent';
import TermsModal from './components/TermsModal';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openTermsModal = () => {
    setTermsModalOpen(true);
  };

  const closeTermsModal = () => {
    setTermsModalOpen(false);
  };

  const acceptTerms = () => {
    // Handle terms acceptance logic here
    console.log('Terms accepted');
    setTermsModalOpen(false);
  };

  return (
    <div className="App">
      <Header windowWidth={windowWidth} />
      <main className="container">
        <Hero windowWidth={windowWidth} />
        <HaiduciiContent windowWidth={windowWidth} />
        <MapSection openModal={openModal} windowWidth={windowWidth} />
        <FeaturesGrid openModal={openModal} windowWidth={windowWidth} />
        <Roadmap windowWidth={windowWidth} />
        <Tokenomics windowWidth={windowWidth} />
        <Team windowWidth={windowWidth} />
        <FAQ windowWidth={windowWidth} />
        <Account windowWidth={windowWidth} />
        
        {/* Terms Button - You can place this wherever you want in your UI */}
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <button 
            onClick={openTermsModal}
            style={{
              background: 'linear-gradient(180deg, #7a4b22, #60381a)',
              color: '#f0c059',
              border: '1px solid #130a06',
              borderRadius: '12px',
              padding: '12px 24px',
              cursor: 'pointer',
              fontSize: '1rem',
              boxShadow: 'inset 0 0 0 2px #3b2013, 0 6px 16px rgba(0, 0, 0, 0.35)'
            }}
          >
            View Terms & Conditions
          </button>
        </div>
      </main>
      <Footer
         windowWidth={windowWidth} 
         onOpenTerms={openTermsModal}
         />
      <Modal 
        isOpen={modalOpen} 
        content={modalContent} 
        onClose={closeModal}
        windowWidth={windowWidth}
      />
      <TermsModal 
        isOpen={termsModalOpen}
        onClose={closeTermsModal}
        onAccept={acceptTerms}
      />
    </div>
  );
}

export default App;