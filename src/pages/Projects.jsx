import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "../componnets/animation/RevealText";

const Projects = () => {
  const projects = [
    {
      title: "Spacextended Architects",
      category: "Website",
      year: "2026",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "DoTimeBox Planner",
      category: "Web Application",
      year: "2025",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Sportvince Application",
      category: "Mobile App Design",
      year: "2024",
      image: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?q=80&w=2017&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 min-h-screen bg-black text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24 flex md:items-end justify-between flex-col md:flex-row gap-6">
          <div className="max-w-2xl">
            <span className="text-gray-400 uppercase tracking-[0.2em] font-mono text-sm block mb-4">Selected Work</span>
            <RevealText text="OUR LATEST CASE STUDIES" className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight" />
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="text-5xl font-black mb-2">1K+</div>
            <div className="text-gray-400 uppercase tracking-widest text-xs font-mono">Works Completed</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const rowRef = useRef(null);
            const { scrollYProgress } = useScroll({
              target: rowRef,
              offset: ["start end", "end start"]
            });
            const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

            return (
              <div key={index} ref={rowRef} className="flex flex-col gap-6 group cursor-pointer">
                
                {/* Meta details */}
                <div className="flex justify-between items-center text-sm font-mono text-gray-400 uppercase">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                {/* Main image parallax container */}
                <div className="relative overflow-hidden rounded-[2rem] bg-[#111] aspect-[16/7] w-full border border-white/10">
                  <motion.img 
                    style={{ y: yImage }}
                    src={project.image} 
                    alt={project.title}
                    className="absolute w-full h-[130%] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* View Project overlay button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Project <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-4 group-hover:pl-4 transition-all duration-500">
                  {project.title}
                </h3>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
