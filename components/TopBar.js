import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-blue-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center hover:text-blue-200 transition-colors duration-300">
              <FaPhone className="mr-2" />
              <span>+880 1844 454 0790</span>
            </a>
            <a href="mailto:info@arbabpack.com" className="flex items-center hover:text-blue-200 transition-colors duration-300">
              <FaEnvelope className="mr-2" />
              <span>info@arbabpackltd.com</span>
            </a>
          </div>
          <div className="flex items-center">
            <span className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Shimrail, Demra Road, Siddhirganj, Narayanganj-1430, Bangladesh</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
