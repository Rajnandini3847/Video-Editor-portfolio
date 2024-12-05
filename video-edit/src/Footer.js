import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="brand-section">
          <img src="3.png" alt="Editopia Logo" className="logo" />
          
          <p className="description">
            Editopia Production is a content production company that helps brands and businesses to create the most compelling content.
          </p>
        </div>
        <div className="contact-section">
          <h3>Contact Us:</h3>
          <p>
            <span role="img" aria-label="phone">📞</span> +91 638-758-1866
          </p>
          <p>
            <span role="img" aria-label="email">✉️</span> production.editopia@gmail.com
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="/assets/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
              <img src="/assets/whatsapp-icon.png" alt="WhatsApp" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <img src="/assets/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
