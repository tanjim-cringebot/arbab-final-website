import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaWhatsapp, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="bg-blue-900 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span>+880 1844 454 0790</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>info@arbabpackltd.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaWhatsapp />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaYoutube />
          </a>
          <a href="mailto:info@arbabpackltd.com" className="text-white hover:text-gray-300">
            <FaEnvelope />
          </a>
          <a href="tel:+8801844454079" className="text-white hover:text-gray-300">
            <FaPhone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
