import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Code, Laptop, Smartphone, Speaker, LineChart } from "lucide-react";
import { RevealText } from "../componnets/animation/RevealText";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Creating high-performance, modern websites tailored for user engagement.",
      icon: <Code size={32} className="text-white" />
    },
    {
      title: "UI/UX Design",
      desc: "Designing intuitive and visually compelling interfaces for web and mobile.",
      icon: <Laptop size={32} className="text-white" />
    },
    {
      title: "Mobile App Development",
      desc: "Building scalable and interactive mobile applications for iOS & Android.",
      icon: <Smartphone size={32} className="text-white" />
    },
    {
      title: "Digital Marketing",
      desc: "Strategic marketing campaigns to boost traffic and improve conversions.",
      icon: <Speaker size={32} className="text-white" />
    },
    {
      title: "SEO Optimization",
      desc: "Ranking your website higher on search engines to reach a global audience.",
      icon: <LineChart size={32} className="text-white" />
    }
  ];

  return (
    <section className="py-32 min-h-screen bg-black text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24 flex md:items-end justify-between flex-col md:flex-row gap-6">
          <div className="max-w-3xl">
            <span className="text-gray-400 uppercase tracking-[0.2em] font-mono text-sm block mb-4">Expertise</span>
            <RevealText text="WHAT WE OFFER TO YOU" className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight" />
          </div>
          <div>
            <button className="group flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-xs font-bold">
              View All Services
              <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Services List - Noviindus Style (Large horizontal strips) */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-14 border-t border-white/10 hover:bg-white/5 transition-colors px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl cursor-pointer"
            >
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto mb-6 md:mb-0">
                <div className="text-white/20 font-mono text-2xl md:text-3xl font-light">0{index + 1}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:translate-x-4 transition-transform duration-500 uppercase tracking-tight">
                  {service.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                <p className="text-gray-400 text-sm md:text-base max-w-sm hidden md:block">
                  {service.desc}
                </p>
                <div className="p-4 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300 hidden md:flex">
                  <MoveRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
