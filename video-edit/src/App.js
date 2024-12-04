import React from 'react';
import Hero from './Hero';
import Clients from './Clients';
import ComparisonSection from './ComparisonSection';
import Footer from './Footer';
import Work from './Work';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div className="app">
      <Hero />
      <Clients />
      <Work />
      <ComparisonSection />
      <Footer />
    </div>
  );
}

export default App;