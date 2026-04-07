import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Clock, Code2 } from "lucide-react";
import { RevealText } from "../componnets/animation/RevealText";

const About = () => {
  return (
    <section className="py-32 min-h-screen bg-white text-black relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-24 flex md:items-end justify-between flex-col md:flex-row gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-lime-400"></div>
              <p className="text-xs tracking-widest uppercase">Discover</p>
            </div>
            <RevealText
              text="MORE ABOUT MY JOURNEY"
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight"
            />
          </div>

          <p className="text-gray-600 max-w-sm text-sm leading-relaxed border-l border-black/20 pl-6">
            Blending code with creativity. I craft digital experiences that not only look beautiful but drive real growth and engagement.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
    {/* LEFT - STATS */}
          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Clock size={24}/>, value: "2+", label: "Years Exp." },
                { icon: <Trophy size={24}/>, value: "20+", label: "Projects" },
                { icon: <CheckCircle2 size={24}/>, value: "10+", label: "Clients" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-black text-white border border-white/10 p-6 rounded-[2rem] hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-white mb-4">{stat.icon}</div>

                  <h4 className="text-3xl font-black text-white mb-1">
                    {stat.value}
                  </h4>

                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT - EXPERIENCE */}
          <div className="relative">
            <div className="bg-gray-50 border border-black/10 rounded-[2rem] p-10 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-wider text-black">
                Experience
              </h3>

              <div className="space-y-10">
                {[
                 {
  role: "Web Developer & Digital Marketing Specialist",
  company: "Franchise Media",
  period: "2024 - Present",
  desc: "Developing high-performance web applications using React while driving digital marketing strategies including SEO, content marketing, and campaign optimization to increase traffic, engagement, and conversions."
},
                
                  {
                    role: "Freelance ",
                    company: "web developer | digital marketer | SEO | SMM",
                    
                    desc: "Delivered end-to-end digital solutions—from building modern, responsive websites to driving growth through SEO, social media, and performance marketing."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="relative pl-6 border-l border-black/10"
                  >
                    <div className="absolute w-3 h-3 bg-black rounded-full -left-[6.5px] top-1.5" />

                    <h4 className="text-xl font-bold text-black mb-1">
                      {item.role}
                    </h4>

                    <div className="text-black/60 text-sm mb-3">
                      {item.company} |{" "}
                      <span className="text-gray-500">{item.period}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;