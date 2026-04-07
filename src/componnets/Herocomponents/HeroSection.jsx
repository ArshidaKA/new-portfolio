import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { RevealText } from "../animation/RevealText";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="w-full bg-black overflow-hidden relative min-h-screen pt-12 pb-12 flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 z-10 relative w-full">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[55%] flex flex-col items-start pt-10">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 mb-8"
          >
            <span className="text-xs tracking-widest font-medium uppercase font-mono text-[#aee831]">Hi, I am Arshida Akbar</span>
          </motion.div>

          {/* Headline - Agency Style */}
          <div className="relative mb-8 text-white w-full">
  <RevealText 
    text="WEB DEVELOPER & DIGITAL" 
    className="block text-[12vw] sm:text-[8vw] lg:text-[5vw] font-black leading-[1.05] tracking-tight uppercase"
  />
  
  <RevealText 
    text=" MARKETER" 
    className="block text-[12vw] sm:text-[8vw] text-[#aee831] lg:text-[5vw] font-black leading-[1.05] tracking-tight uppercase"
  />

            {/* Sparkle positioned absolutely relative to container for visual pop */}
            <motion.div 
              className="absolute -right-6 -top-10 text-white opacity-50 hidden md:block"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Sparkles size={64} strokeWidth={0.5} />
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-12"
          >
            I build high-performance web applications and craft data-driven digital strategies that push your business forward. Let's create an unforgettable online experience.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative"
          >
            <Link to="/contact" className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full overflow-hidden relative">
              {/* Hover sweep background */}
              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 mix-blend-multiply"></div>
              <span className="font-bold text-sm uppercase tracking-wider relative z-10">Start a Project</span>
              <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full group-hover:scale-110 transition-transform duration-500 relative z-10">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE CARD (PARALLAX) */}
        <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end mt-12 lg:mt-0 perspective-1000">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative w-full max-w-[450px] aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-[#111]"
          >
            <motion.img 
              style={{ y: yImage, scale: scaleImage }}
              src="/arshida.png" 
              alt="Arshida"
              className="w-full h-[130%] -top-[15%] relative object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />

            {/* Glassmorphism Badge */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-6 -left-6 md:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="text-white text-left">
                <div className="text-3xl font-black mb-1">2+</div>
                <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Years Exp.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;