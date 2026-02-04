import React from 'react';
import './Hero.css';

function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">{title}</h2>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-btn">{ctaText}</button>
      </div>
    </section>
  );
}

export default Hero;