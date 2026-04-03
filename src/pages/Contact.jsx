import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { RevealText } from "../componnets/animation/RevealText";

const Contact = () => {
  return (
    <section className="py-32 min-h-screen bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24 flex md:items-end justify-between flex-col md:flex-row gap-6">
          <div className="max-w-3xl">
            <span className="text-gray-400 uppercase tracking-[0.2em] font-mono text-sm block mb-4">Let's Connect</span>
            <RevealText text="START A PROJECT WITH US" className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div className="space-y-12">
            <p className="text-xl text-gray-400 max-w-md font-light leading-relaxed">
              Have a visionary idea? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8 pt-8 border-t border-white/10">
              <div className="group flex items-start gap-6 cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 uppercase font-mono tracking-wider mb-1">Email Us</div>
                  <a href="mailto:hello@arshida.com" className="text-2xl font-bold hover:underline">hello@arshida.com</a>
                </div>
              </div>

              <div className="group flex items-start gap-6 cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 uppercase font-mono tracking-wider mb-1">Call Us</div>
                  <a href="tel:+919999999999" className="text-2xl font-bold hover:underline">+91 999 999 9999</a>
                </div>
              </div>

              <div className="group flex items-start gap-6 cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 uppercase font-mono tracking-wider mb-1">Visit Us</div>
                  <address className="text-2xl font-bold not-italic">
                    GSBC, East Nadakkave<br/>Kozhikode, Kerala
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] rounded-[2rem] p-10 md:p-14 border border-white/10"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest font-mono text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-white/10"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest font-mono text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-white/10"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest font-mono text-gray-400">Project Details</label>
                <textarea 
                  rows="4"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-xl focus:outline-none focus:border-white transition-colors placeholder-white/10 resize-none"
                  placeholder="Tell us about what you want to build..."
                />
              </div>

              <button 
                type="submit"
                className="group w-full bg-white text-black font-bold uppercase tracking-widest py-5 rounded-full mt-4 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
              >
                Send Request
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
