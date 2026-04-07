import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 border-t border-white/10">

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-black tracking-tight inline-block mb-4"
            >
              Arshida<span className="text-blue-500">.</span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Elevating brands through seamless web development and strategic
              digital marketing. Let’s build something extraordinary together.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[
                {
                  icon: <FaWhatsapp size={18} />,
                  link: "https://wa.me/919645299269",
                  color: "hover:text-green-400",
                },
                {
                  icon: <FaLinkedinIn size={18} />,
                  link: "https://www.linkedin.com/in/arshida-k-a-5ba98a314",
                  color: "hover:text-blue-500",
                },
                {
                  icon: <FaInstagram size={18} />,
                  link: "https://www.instagram.com/growitharshy",
                  color: "hover:text-pink-500",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-400 transition duration-300 hover:scale-110 ${item.color}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: "About Me", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT / CTA */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Let’s Connect
            </h4>

            <p className="text-gray-400 text-sm mb-4">
              Have a project in mind? Let’s build something amazing.
            </p>

            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-white text-black text-sm rounded-full font-bold hover:bg-gray-200 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Arshida. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Designed & Built with ❤️ using React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;