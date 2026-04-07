import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* 🔥 MOBILE NAVBAR */}
          <div className="flex items-center justify-between w-full md:hidden">
            
            {/* LEFT - Menu */}
            <button
              className="text-white z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* RIGHT - Let's Talk */}
            <Link
              to="/contact"
              className="px-4 py-2 bg-[#aee831] text-black text-sm font-semibold rounded-full"
            >
              Let's Talk
            </Link>
          </div>

          {/* 💻 DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 ml-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.title}
                  to={link.path}
                  className="relative text-lg font-thin tracking-wide uppercase text-gray-300 hover:text-white transition"
                >
                  {link.title}

                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#aee831]"
                    />
                  )}
                </Link>
              );
            })}

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#aee831] text-black text-md font-semibold rounded-full hover:bg-green-700 transition"
            >
              Let's Talk
            </Link>
          </div>

        </div>
      </nav>

      {/* 📱 MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black flex flex-col justify-center items-center space-y-10 z-40"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-semibold tracking-wide ${
                    location.pathname === link.path
                      ? "text-[#5E8846]"
                      : "text-gray-300"
                  }`}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}

            {/* CTA inside menu */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 px-8 py-3 bg-[#8aba23] text-white rounded-full text-lg"
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;