import React from 'react';

const Hero = ({ windowWidth }) => {
  const isMobile = windowWidth < 768;

  return (
    <section id="home" className="hero">
      <div>
        <h1 className="gold">Choose your path: <br/>Haiduc or Farmer</h1>
        <div className="kpis">
          <div className="kpi">
            Batch I • <strong>2,000</strong> Haiduci
            <span className="tooltip">First batch</span>
          </div>
          <div className="kpi">
            Batch I • <strong>1,000</strong> Fermieri
            <span className="tooltip">First batch</span>
          </div>
          <div className="kpi">Mint • <em>coming soon</em></div>
        </div>
        <div className="btns">
          <a href="#features" className="cta">Become a Haiduc</a>
          <a href="#features" className="cta secondary">Become a Farmer</a>
          <a href="#map" className={isMobile ? "cta secondary" : ""}>Explore the Map</a>
        </div>
      </div>
      <div className="panel goldEdge" style={{padding: '18px'}}>
        <h3 className="gold" style={{margin: '4px 0 8px'}}>What is Haiducii Metaverse?</h3>
        <p className="subtitle">A survival-craft folk universe where farmers sustain the realm and haiducs brave caves, raids and creatures. Your NFT grants access and carries your progression.</p>
        <div className="divider"></div>
        <p className="muted">Tip: create an account to get notified when mint opens.</p>
      </div>
    </section>
  );
};

export default Hero;