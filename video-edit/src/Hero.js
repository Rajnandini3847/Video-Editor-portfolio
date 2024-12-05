import React from 'react';
import './Hero.css'; // External CSS file for styling

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-video">
        <video autoPlay loop muted className="hero-video-element">
          <source src="/path/to/your/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Why Your Content Isn't Connecting</h1>
        <ul className="hero-list">
          <li className="hero-list-item">Feels Flat?</li>
          <li className="hero-list-item">Not Representing Your Brand?</li>
          <li className="hero-list-item">Need a Fresh Perspective?</li>
        </ul>
        <button className="cta-button">Book a free call...</button>
      </div>
    </div>
  );
};

export default Hero;
