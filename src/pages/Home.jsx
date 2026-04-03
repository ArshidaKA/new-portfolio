import React from 'react';
import HeroSection from '../componnets/Herocomponents/HeroSection';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
const Home = () => {
  return (
    <div>
      <HeroSection />
      <About /> 
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
