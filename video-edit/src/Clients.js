import React, { useState, useEffect, useMemo, useRef } from 'react';

const Clients = () => {
  const clientLogos = useMemo(() => [
    'https://images-platform.99static.com//hbdQ5eUu96hb1j7Tt7PufcWfYGc=/123x113:1372x1362/fit-in/500x500/99designs-contests-attachments/90/90581/attachment_90581241',
    'https://images-platform.99static.com//hbdQ5eUu96hb1j7Tt7PufcWfYGc=/123x113:1372x1362/fit-in/500x500/99designs-contests-attachments/90/90581/attachment_90581241',
    'https://images-platform.99static.com//hbdQ5eUu96hb1j7Tt7PufcWfYGc=/123x113:1372x1362/fit-in/500x500/99designs-contests-attachments/90/90581/attachment_90581241',
    'https://images-platform.99static.com//hbdQ5eUu96hb1j7Tt7PufcWfYGc=/123x113:1372x1362/fit-in/500x500/99designs-contests-attachments/90/90581/attachment_90581241',
    'https://images-platform.99static.com//hbdQ5eUu96hb1j7Tt7PufcWfYGc=/123x113:1372x1362/fit-in/500x500/99designs-contests-attachments/90/90581/attachment_90581241',
    'https://images-platform.99static.com//hbdQ5eUu96hb1j7Tt7PufcWfYGc=/123x113:1372x1362/fit-in/500x500/99designs-contests-attachments/90/90581/attachment_90581241',
    'https://images-platform.99static.com//hbdQ5eUu96hb1j7Tt7PufcWfYGc=/123x113:1372x1362/fit-in/500x500/99designs-contests-attachments/90/90581/attachment_90581241',
    'https://images-platform.99static.com//hbdQ5eUu96hb1j7Tt7PufcWfYGc=/123x113:1372x1362/fit-in/500x500/99designs-contests-attachments/90/90581/attachment_90581241',
    'https://graphicsfamily.com/wp-content/uploads/edd/2018/11/free-circular-logo.jpg'
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % clientLogos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [clientLogos, currentIndex]);

  return (
    <div style={styles.clients}>
      <div ref={carouselRef} style={styles.clientsCarousel}>
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            style={{
              ...styles.clientLogo,
              transform: `translateX(${(index - currentIndex) * 100 - 100}%)`,
              transition: 'transform 2s ease-in-out',
            }}
          >
            <img src={logo} alt={`Client ${index + 1}`} style={{ height: '180px', width: '180px', borderRadius: '70%' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  clients: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: 'black',
  },
  clientsCarousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  clientLogo: {
    flexShrink: 0,
    marginRight: '1rem',
  },
};

export default Clients;