import React, { useState } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navigation from './pages/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="portfolio-container">
      <NeuralBackground 
        color="#00ff88"
        trailOpacity={0.12}
        particleCount={800}
        speed={0.8}
      />
      
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main className="content-wrapper">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}