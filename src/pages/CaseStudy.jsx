import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CaseStudy = () => {
  const project = {
    title: "Hustlify",
    category: "Web Platform",
    year: "2026",
    image: "/projects/hustlify.png",
    website: "https://hustlify.in",
    overview:
      "Hustlify is a modern digital platform focused on helping creators and businesses grow with powerful tools and clean user experience.",
    problem:
      "The client needed a fast, scalable, and visually engaging platform to attract users and convert traffic into customers.",
    solution:
      "We designed and developed a high-performance React-based website with smooth animations, optimized UI, and strong brand presence.",
    result:
      "Achieved higher engagement, faster load times, and improved conversion rates with a modern and responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  };

  return (
    <section className="min-h-screen bg-black text-white py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-gray-400 uppercase text-sm mb-4">
            {project.category} • {project.year}
          </p>

          <h1 className="text-5xl md:text-6xl font-black uppercase mb-6">
            {project.title}
          </h1>

          <a
            href={project.website}
            target="_blank"
            className="inline-flex items-center gap-2 border border-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-black transition"
          >
            Visit Website <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-20"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-3xl border border-white/10"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-3 uppercase text-gray-300">
                Overview
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 uppercase text-gray-300">
                Problem
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 uppercase text-gray-300">
                Solution
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-3 uppercase text-gray-300">
                Result
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.result}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 uppercase text-gray-300">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={project.website}
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
            >
              View Live Project <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;