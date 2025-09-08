import React from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="hamburger-menu" style={{
      position: 'fixed',
      top: '60px',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, var(--wood-900), var(--wood-700))',
      zIndex: 40,
      padding: '20px',
      overflowY: 'auto'
    }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <a href="#home" onClick={onClose}>Home</a>
        <a href="#map" onClick={onClose}>Map</a>
        <a href="#features" onClick={onClose}>Features</a>
        <a href="#roadmap" onClick={onClose}>Roadmap</a>
        <a href="#account" onClick={onClose}>Sign in</a>
        <Link to="/become-farmer" onClick={onClose}>Become a Farmer</Link>
        <Link to="/become-haiduc" onClick={onClose}>Become a Haiduc</Link>
        <Link to="/economy" onClick={onClose}>NFT Economy</Link>
        <a className="cta" title="Solana wallet - coming soon">Connect Wallet</a>
      </nav>
    </div>
  );
};

export default HamburgerMenu;