'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img 
              className={`h-8 w-auto transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} 
              src="/logo-dark.png" 
              alt="Arbab Pack Ltd" 
            />
            <img 
              className={`h-8 w-auto absolute transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`} 
              src="/logo-light.png" 
              alt="Arbab Pack Ltd" 
            />
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['About', 'Products', 'Services', 'Sustainability', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    scrolled
                      ? 'text-gray-800 hover:text-black hover:bg-gray-100'
                      : 'text-white hover:bg-white hover:bg-opacity-20'
                  } transition-colors duration-300`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className={`inline-flex items-center justify-center p-2 rounded-md ${
              scrolled ? 'text-gray-800 hover:text-black hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-20'
            } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300`}>
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
