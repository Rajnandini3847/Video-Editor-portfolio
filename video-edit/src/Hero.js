import React from 'react';

const Hero = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.heroVideo}>
        
        <video autoPlay loop muted style={{ width: '100%', height: 'auto' }}>
          <source src="/path/to/your/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div style={styles.heroContent}>
        
        <h1 style={{ margin: 0 }}>Why Your Content Isn't Connecting</h1>
        <ul style={{ padding: 0, listStyle: 'none' }}>
          <li>Feels Flat?</li>
          <li>Not Representing Your Brand?</li>
          <li>Need a Fresh Perspective?</li>
        </ul>
        <button style={styles.ctaButton}>Book a free call...</button>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
  },
  heroVideo: {
    flex: 1,
    maxWidth: '50%',
  },
  heroContent: {
    flex: 1,
    paddingLeft: '2rem',
  },
  ctaButton: {
    backgroundColor: '#ff3b30',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default Hero;