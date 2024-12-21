import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaWhatsapp, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const ContactButton = () => (
  <Link href="/contact">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 
        text-white rounded-full font-medium shadow-lg hover:shadow-blue-500/50 
        transition-all duration-300 ease-out hover:from-blue-700 hover:to-blue-900
        border border-blue-400/50 backdrop-blur-sm"
    >
      <EnvelopeIcon className="w-5 h-5" />
      <span>Contact Us</span>
    </motion.button>
  </Link>
);

const Topbar = () => {
  return (
    <div className="bg-blue-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Left side empty for balance */}
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <FaWhatsapp className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <FaFacebookF className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <FaYoutube className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="mailto:info@arbabpackltd.com" 
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <FaEnvelope className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="tel:+8801844454079" 
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <FaPhone className="w-5 h-5" />
            </motion.a>
          </div>
          <div className="border-l border-blue-700 pl-6">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
