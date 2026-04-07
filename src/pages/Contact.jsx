import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { RevealText } from "../componnets/animation/RevealText";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello, I'm ${form.name}%0AEmail: ${form.email}%0AProject: ${form.message}`;
    const url = `https://wa.me/919645299269?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-32 min-h-screen bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24 flex md:items-end justify-between flex-col md:flex-row gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-lime-400"></div>
              <p className="text-xs tracking-widest uppercase">Let's Connect</p>
            </div>
            <RevealText
              text="START A PROJECT WITH US"
              className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT - SAME DESIGN */}
          <div className="space-y-12">
            <p className="text-xl text-gray-400 max-w-md font-light leading-relaxed">
              Have a visionary idea? We'd love to hear about it. Drop us a message and we'll get back to you instantly.
            </p>

            <div className="space-y-8 pt-8 border-t border-white/10">

              {/* Email */}
              <div className="group flex items-start gap-6 cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-lime-400 uppercase font-mono tracking-wider mb-1">
                    Email Us
                  </div>
                  <a
                    href="mailto:arshidaakbar39@gmail.com"
                    className="text-xl font-semibold hover:underline"
                  >
                    arshidaakbar39@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start gap-6 cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-lime-400 uppercase font-mono tracking-wider mb-1">
                    Call Us
                  </div>
                  <a
                    href="tel:+919645299269"
                    className="text-xl font-semibold hover:underline"
                  >
                    +91 96452 99269
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="group flex items-start gap-6 cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-lime-400 uppercase font-mono tracking-wider mb-1">
                    Visit Us
                  </div>
                  <address className="text-xl font-semibold not-italic">
                    HiLITE Business Park<br />
                    Calicut, Kerala
                  </address>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT - SAME DESIGN FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] rounded-[2rem] p-10 md:p-14 border border-white/10"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-mono text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-xl focus:outline-none focus:border-white"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-mono text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-xl focus:outline-none focus:border-white"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-mono text-gray-400">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows="4"
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-xl focus:outline-none focus:border-white resize-none"
                  placeholder="Tell us about what you want to build..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-white text-black font-bold uppercase tracking-widest py-5 rounded-full mt-4 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
              >
                Send Request
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;