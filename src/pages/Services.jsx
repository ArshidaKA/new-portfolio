import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { RevealText } from "../componnets/animation/RevealText";

const Services = () => {
  const services = [
    {
      title: "App Development",
      desc: "As a trusted mobile app development company, we build scalable apps using modern technologies.",
    },
    {
      title: "Web Development",
      desc: "High-performance websites with modern UI/UX and responsive design.",
    },
    {
      title: "Digital Marketing",
      desc: "Boost your business growth with strategic marketing campaigns.",
    },
    {
      title: "SEO Optimization",
      desc: "Improve rankings and drive organic traffic.",
    },
  ];

  return (
    <section className="bg-black text-white border-b border-white/10">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-lime-400"></div>
              <p className="text-xs tracking-widest uppercase">Services</p>
            </div>

            <RevealText
              text="WHAT I OFFER"
              className="text-4xl md:text-6xl font-black uppercase"
            />
          </div>

          <button className="hidden md:flex items-center gap-2 border border-white/70 px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            View all Services <MoveRight size={18} />
          </button>
        </div>
      </div>

      {/* 🔥 STICKY SCROLL AREA */}
      <div className={`h-[${services.length * 100}vh]`}>
        
        {services.map((service, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen flex items-center border-t border-white/10 bg-black"
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10"
            >
              
              {/* LEFT */}
              <div className="flex gap-6">
                <span className="text-white/30 text-xl font-mono">
                  ({String(index + 1).padStart(2, "0")})
                </span>

                <h3 className="text-4xl md:text-6xl font-semibold">
                  {service.title}
                </h3>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                <p className="text-gray-400 max-w-md">
                  {service.desc}
                </p>

                <div className="space-y-4 text-lg">
                       {/* 🔥 BACKGROUND GLOW / LINES */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-30">
        <div className="w-20 h-20 border border-[#aee831] rotate-45 mb-4"></div>
        <div className="w-16 h-16 border border-[#aee831] rotate-45 ml-10"></div>
      </div>
                  <div className="border-b border-white/30 pb-2">
                    1. Strategy & Planning
                  </div>
                  <div className="border-b border-white/30 pb-2">
                    2. Development & Execution
                  </div>
                  <div className="border-b border-white/30 pb-2">
                    3. Optimization & Scaling
                  </div>
                </div>

                <div className="flex justify-end items-center gap-2 text-lime-400 cursor-pointer hover:translate-x-2 transition">
                  <span className="text-sm uppercase tracking-wide">
                    Know More
                  </span>
                  <MoveRight size={18} />
                </div>
              </div>

            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;