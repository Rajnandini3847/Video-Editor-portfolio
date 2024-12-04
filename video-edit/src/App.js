import React from 'react';
import Hero from './Hero';
import Clients from './Clients';
import ComparisonSection from './ComparisonSection';
import Footer from './Footer';


function App() {
  return (
    <div className="app">
      <Hero />
      <Clients />
      <ComparisonSection />
      <Footer />
    </div>
  );
}

export default App;