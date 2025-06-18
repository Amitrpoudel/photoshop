import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black text-white px-6 pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
        {/* Left: Logo & Description */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src={logo}
            alt=" Logo"
            className="w-32 md:w-40 object-contain mb-4"
          />
          <p className="text-sm text-gray-400">
            Enjoy our artisanal coffee and <br />
            let the cozy moments unfold!
          </p>
        </div>

        {/* Middle: Quick Links & Social */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 mb-5">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-5 text-2xl justify-center lg:justify-start">
            <a
              href=""
              className="hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              className="hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right: Map & Contact */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
          <div className="rounded overflow-hidden shadow-md w-full h-40 mb-4">
            <iframe
              title="Studio Location"
              src=""
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h4 className="text-md font-medium">Contact:</h4>
          <a
            href="tel:980-2661498"
            className="text-gray-300 hover:text-white transition"
          >
            980-2661498
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Agni Studio. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;