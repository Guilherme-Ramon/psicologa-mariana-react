import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <MapSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;