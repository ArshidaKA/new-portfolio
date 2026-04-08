import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "../componnets/animation/RevealText";

const Projects = () => {
  const webProjects = [
    {
      title: "Sales training institute",
      category: "Website",
      image: "/projects/hustlify.png",
      link: "https://hustlify.in"
    },
    {
      title: "Ayurvedic health center",
      category: "Website",
      image: "/projects/ayurvedic.png",
      link: "https://herbalpark.ae"
    },
    {
      title: "Metal trading company",
      category: "Website",
      image: "/projects/harman.png",
      link: "https://harmanmetals.com"
    }
  ];

  const seoProjects = [
    {
      title: "SEO Optimization ",
      category: "SEO",
      image: "/projects/seo.png",
      link: "#"
    },
     {
      title: "SEO performance",
      category: "SEO",
      image: "/projects/performance.png",
      link: "#"
    }
  ];

  const posterProjects = [
    {
      title: "",
      category: "Design",
      image: "/projects/online-course.jpeg",
      link: "#"
    },
    {
      title: "",
      category: "Design",
      image: "/projects/interior.png",
      link: "#"
    },
    {
      title: "",
      category: "Design",
      image: "/projects/investment.jpeg",
      link: "#"
    }
  ];

  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[390px] object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2"
              >
                View <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs text-gray-400 uppercase mb-2">
              {project.category}
            </p>
            <h3 className="text-xl font-bold group-hover:translate-x-2 transition">
              {project.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-32 bg-black text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-lime-400"></div>
            <p className="text-xs tracking-widest uppercase">Selected Work</p>
          </div>

          <RevealText
            text="FEATURED PROJECTS"
            className="text-4xl md:text-5xl font-black uppercase"
          />
        </div>

        {/* Web Development */}
        <div className="mb-20">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
            Web Development
          </p>
          {renderProjects(webProjects)}
        </div>

        {/* SEO */}
        <div className="mb-20">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
            SEO
          </p>
          {renderProjects(seoProjects)}
        </div>

        {/* Poster Design */}
        <div>
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
            Poster Design
          </p>
          {renderProjects(posterProjects)}
        </div>

      </div>
    </section>
  );
};

export default Projects;