import React, { useState, useEffect, useMemo, useRef } from 'react';
import './Clients.css';

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
    <div className="clients">
      <div ref={carouselRef} className="clients-carousel">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="client-logo"
            style={{
              transform: `translateX(${(index - currentIndex) * 100 - 100}%)`,
              transition: 'transform 2s ease-in-out',
            }}
          >
            <img src={logo} alt={`Client ${index + 1}`} className="client-logo-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
