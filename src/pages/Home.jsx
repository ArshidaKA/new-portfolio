import React from 'react';
import HeroSection from '../componnets/Herocomponents/HeroSection';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Projects from './Projects';
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
