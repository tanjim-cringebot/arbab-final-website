"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import arbab_logo from "../public/images/arbab_logo.png";
import { 
  EnvelopeIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';
import { FaPhone, FaEnvelope, FaLinkedin, FaWhatsapp, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const navItems = [
    {
      name: "APL",
      path: "/about-apl",
      dropdown: [
        { name: "Our Journey", path: "/about-apl#our-journey" },
        { name: "Our Expertise", path: "/about-apl#our-expertise" },
        { name: "Vision & Mission", path: "/about-apl#vision-mission" },
        { name: "Essence of Strength", path: "/about-apl#essence-of-strength" },
        { name: "Why Choose APL", path: "/about-apl#why-choose-apl" },
        { name: "What People Say", path: "/about-apl#testimonials" },
      ],
    },
    {
      name: "Products",
      path: "/product-portfolio",
      dropdown: [
        { name: "Food Packaging", path: "/product-portfolio#food-packaging" },
        { name: "Personal Care & Hygiene", path: "/product-portfolio#personal-care-hygiene" },
        { name: "Beverages", path: "/product-portfolio#beverages" },
        { name: "Pharmaceutical and Nutritional Products", path: "/product-portfolio#pharmaceutical-nutritional" },
        { name: "Household Products", path: "/product-portfolio#household-products" },
        { name: "Tobacco Industry Packaging", path: "/product-portfolio#tobacco-industry" },
      ],
    },
    {
      name: "About Group",
      path: "/about-ag",
      dropdown: [
        { name: "Arbab Group", path: "/about-ag#arbab-group" },
        { name: "Arbab Pack Ltd.", path: "/about-ag#arbab-pack-ltd" },
        { name: "ZK Foils Ltd.", path: "/about-ag#zk-foils-ltd" },
        { name: "ZK Plastics Ltd", path: "/about-ag#zk-plastics-ltd" },
        { name: "ZK Ink Ltd.", path: "/about-ag#zk-ink-ltd" },
        { name: "ZK Healthcare", path: "/about-ag#zk-healthcare" },
        { name: "Aant Cosmetics Ltd", path: "/about-ag#aant-cosmetics-ltd" },
      ],
    },
  ];

  const ContactButton = () => (
    <Link href="/contact">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-2.5 
          bg-transparent text-blue-600 border-2 border-gray-900
          rounded-full font-medium shadow-sm
          transition-all duration-300 ease-out
          hover:bg-blue-600 hover:text-white hover:border-blue-600
          group"
      >
        <EnvelopeIcon className="w-5 h-5 transition-colors duration-300" />
        <span className="font-semibold">Contact Us</span>
      </motion.button>
    </Link>
  );

  const SocialIcons = () => (
    <div className="grid grid-cols-3 gap-3">
      <motion.a 
        href="#" 
        whileHover={{ scale: 1.1 }}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <FaLinkedin className="w-4 h-4" />
      </motion.a>
      <motion.a 
        href="#" 
        whileHover={{ scale: 1.1 }}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <FaWhatsapp className="w-4 h-4" />
      </motion.a>
      <motion.a 
        href="#" 
        whileHover={{ scale: 1.1 }}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <FaFacebookF className="w-4 h-4" />
      </motion.a>
      <motion.a 
        href="#" 
        whileHover={{ scale: 1.1 }}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <FaYoutube className="w-4 h-4" />
      </motion.a>
      <motion.a 
        href="mailto:info@arbabpackltd.com" 
        whileHover={{ scale: 1.1 }}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <FaEnvelope className="w-4 h-4" />
      </motion.a>
      <motion.a 
        href="tel:+8801844454079" 
        whileHover={{ scale: 1.1 }}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <FaPhone className="w-4 h-4" />
      </motion.a>
    </div>
  );

  return (
    <div className="relative z-50">
      <motion.nav
        className="w-full bg-white shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={arbab_logo}
                  alt="Arbab Pack Ltd"
                  width={300}
                  height={150}
                  className="h-16 sm:h-20 lg:h-24 w-auto"
                />
              </Link>
              <div className="ml-2 sm:ml-4 hidden sm:block">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-900 tracking-wide whitespace-nowrap">
                  ARBAB PACK LTD.
                </h1>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-16">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.path}
                      className="px-4 py-2 rounded-md text-sm font-medium text-black hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center group whitespace-nowrap"
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDownIcon 
                          className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" 
                        />
                      )}
                    </Link>
                    {item.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            ref={dropdownRef}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                          >
                            <div className="py-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-8">
                <ContactButton />
                <div className="border-l border-gray-200 pl-8">
                  <SocialIcons />
                </div>
              </div>
            </div>
            <div className="lg:hidden flex items-center gap-4">
              <ContactButton />
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`h-6 w-6 ${mobileMenuOpen ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.path}
                      className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
