import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import CardNav from './componnets/animation/CardNav';
import Footer from './componnets/Footer';
import CustomCursor from './componnets/animation/CustomCursor';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => {
      lenis.destroy();
    }
  }, []);

  const items = [
    {
      label: "Profile",
      bgColor: "#111",
      textColor: "#fff",
      links: [
        { label: "Home", ariaLabel: "Home Page", href: "/" },
        { label: "About Me", ariaLabel: "About Arshida", href: "/about" },
        { label: "Services", ariaLabel: "My Services", href: "/services" }
      ]
    },
    {
      label: "Portfolio", 
      bgColor: "#1a1a1a",
      textColor: "#fff",
      links: [
        { label: "Projects", ariaLabel: "My Projects", href: "/projects" },
        { label: "Case Studies", ariaLabel: "Case Studies", href: "/projects" }
      ]
    },
    {
      label: "Connect",
      bgColor: "#222", 
      textColor: "#fff",
      links: [
        { label: "Contact", ariaLabel: "Contact Me", href: "/contact" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "/contact" }
      ]
    }
  ];

  return (
    <Router>
      <CustomCursor />
      <div className="flex flex-col min-h-screen font-sans bg-black text-white selection:bg-white selection:text-black">
        <CardNav
          logo=""
          logoAlt="Arshida Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#000"
          buttonTextColor="#fff"
          ease="power3.out"
        />
        <main className="flex-grow pt-[120px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;