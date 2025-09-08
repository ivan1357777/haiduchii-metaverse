import React, { useState, useEffect } from 'react';

const Header = ({ windowWidth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isMobile = windowWidth < 992;

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      // Add a small delay to ensure the menu closes before scrolling
      setTimeout(() => {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const handleConnectWallet = () => {
    alert('Wallet connection will be implemented soon');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on overlay or pressing Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.mobile-dropdown') && !e.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <div className="logo" aria-hidden="true"></div>
          <strong className="gold">Haiducii Metaverse</strong>
        </div>
        
        {isMobile ? (
          <>
            <button 
              className="btn menu-toggle" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
            
            <div className={`mobile-dropdown ${isMenuOpen ? 'active' : ''}`}>
              <div className="mobile-nav-content">
                <a 
                  href="#home" 
                  className="nav-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('home');
                  }}
                >
                  Home
                </a>
                <a 
                  href="#haiducii-content" 
                  className="nav-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('haiducii-content');
                  }}
                >
                  About
                </a>
                <a 
                  href="#map" 
                  className="nav-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('map');
                  }}
                >
                  Map
                </a>
                <a 
                  href="#features" 
                  className="nav-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('features');
                  }}
                >
                  Features
                </a>
                <a 
                  href="#tokenomics" 
                  className="nav-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('tokenomics');
                  }}
                >
                  Tokenomics
                </a>
                <a 
                  href="#roadmap" 
                  className="nav-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('roadmap');
                  }}
                >
                  Roadmap
                </a>
                <a 
                  href="#team" 
                  className="nav-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('team');
                  }}
                >
                  Our Team
                </a>
                <a 
                  href="#faq" 
                  className="nav-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('faq');
                  }}
                >
                  FAQ
                </a>
                <a 
                  href="#account" 
                  className="nav-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('account');
                  }}
                >
                  Sign in
                </a>
                
                <div className="mobile-wallet-section">
                  <button 
                    className="cta mobile-wallet-btn" 
                    onClick={handleConnectWallet}
                    title="Solana wallet - coming soon"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <nav className="nav-links">
            <a 
              href="#home" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Home
            </a>
            <a 
              href="#haiducii-content" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('haiducii-content');
              }}
            >
              About
            </a>
            <a 
              href="#map" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('map');
              }}
            >
              Map
            </a>
            <a 
              href="#features" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('features');
              }}
            >
              Features
            </a>
            <a 
              href="#tokenomics" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('tokenomics');
              }}
            >
              Tokenomics
            </a>
            <a 
              href="#roadmap" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('roadmap');
              }}
            >
              Roadmap
            </a>
            <a 
              href="#team" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('team');
              }}
            >
              Our Team
            </a>
            <a 
              href="#faq" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('faq');
              }}
            >
              FAQ
            </a>
            <a 
              href="#account" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('account');
              }}
            >
              Sign in
            </a>
            <button 
              className="cta" 
              onClick={handleConnectWallet}
              title="Solana wallet - coming soon"
            >
              Connect Wallet
            </button>
          </nav>
        )}
      </div>
      
      <style jsx>{`
        header {
          position: relative;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 215, 0, 0.2);
          z-index: 1000;
        }
        
        .container.nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }
        
        .brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ffd700 0%, #ffb700 100%);
          border-radius: 50%;
        }
        
        .gold {
          color: #ffd700;
          font-weight: 700;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s;
          padding: 0.5rem;
        }
        
        .nav-link:hover {
          color: #ffd700;
          background: rgba(255, 215, 0, 0.1);
        }
        
        .cta {
          background: linear-gradient(135deg, #ffd700 0%, #ffb700 100%);
          color: black;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s;
        }
        
        .cta:hover {
          background: #ffd700;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
        }
        
        /* Mobile dropdown styles */
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1001;
          padding: 0.5rem;
        }
        
        .mobile-dropdown {
          position: relative;
          top: 100%;
          left: 0;
          width: 100%;
          background: rgba(122, 75, 34, 0.3);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 215, 0, 0.2);
          padding: 1rem 2rem;
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          z-index: 999;
        }
        
        .mobile-dropdown.active {
          display: flex;
          animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .mobile-nav-content .nav-link {
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: block;
          width: 100%;
          text-align: left;
        }
        
        .mobile-wallet-section {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 215, 0, 0.2);
        }
        
        .mobile-wallet-btn {
          width: 100%;
        }
        
        /* Responsive styles */
        @media (max-width: 991px) {
          .menu-toggle {
            display: block;
          }
          
          .nav-links:not(.mobile-nav) {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;