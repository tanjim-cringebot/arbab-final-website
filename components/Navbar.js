"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import arbab_logo from "../public/images/arbab_logo.png";
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const productCategories = [
  {
    name: "Food Packaging",
    items: [
      "Dairy Products",
      "Snacks",
      "Condiments",
      "Instant Foods"
    ]
  },
  {
    name: "Personal Care & Hygiene",
    items: [
      "Diapers",
      "Sanitary Products",
      "Soaps"
    ]
  },
  {
    name: "Beverages",
    items: [
      "Tea and Coffee",
      "Soft Drinks",
    ]
  },
  {
    name: "Pharmaceutical",
    items: [
      "Nutritional Supplements"
    ]
  },
  {
    name: "Household Products",
    items: [
      "Cleaning Supplies",
      "Paper Products"
    ]
  },
  {
    name: "Tobacco Industry",
    items: [
      "Cigarette Packaging",
    ]
  }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleCategoryMouseEnter = (categoryName) => {
    setActiveSubDropdown(categoryName);
  };

  const handleCategoryMouseLeave = () => {
    setActiveSubDropdown(null);
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
      dropdown: productCategories.map(category => ({
        name: category.name,
        items: category.items,
        path: `/product-portfolio#${category.name.toLowerCase().replace(/\s+/g, '-')}`
      }))
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
        className="flex items-center gap-1 px-4 py-1.5 
          bg-transparent text-blue-600 border-2 border-gray-900
          rounded-full text-sm font-medium shadow-sm
          transition-all duration-300 ease-out
          hover:bg-blue-600 hover:text-white hover:border-blue-600
          group"
      >
        <EnvelopeIcon className="w-4 h-4 transition-colors duration-300" />
        <span className="font-semibold">Contact Us</span>
      </motion.button>
    </Link>
  );

  const SocialIcons = () => {
    return (
      <div className="flex space-x-3">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.1 }}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FaLinkedin className="w-3 h-3" />
        </motion.a>
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.1 }}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FaWhatsapp className="w-3 h-3" />
        </motion.a>
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.1 }}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FaFacebookF className="w-3 h-3" />
        </motion.a>
        <motion.a 
          href="mailto:info@arbabpackltd.com" 
          whileHover={{ scale: 1.1 }}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FaEnvelope className="w-3 h-3" />
        </motion.a>
        <motion.a 
          href="tel:+8801844454079" 
          whileHover={{ scale: 1.1 }}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FaPhone className="w-3 h-3" />
        </motion.a>
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.1 }}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FaYoutube className="w-3 h-3" />
        </motion.a>
      </div>
    );
  };

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.nav
        className={`w-full transition-all duration-300 ${
          (isScrolled || isHovered || mobileMenuOpen) 
            ? 'bg-white shadow-md' 
            : 'bg-transparent shadow-none'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={arbab_logo}
                  alt="Arbab Pack Ltd"
                  width={120}
                  height={60}
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
              </Link>
              <div className="ml-2 hidden sm:block">
                <h1 className={`text-base sm:text-lg lg:text-xl font-extrabold tracking-wide whitespace-nowrap ${
                  (isScrolled || isHovered || mobileMenuOpen) 
                    ? 'text-blue-900' 
                    : 'text-white'
                }`}>
                  ARBAB PACK LTD.
                </h1>
              </div>
            </div>

            <div className="flex-grow" />

            <div className="hidden lg:flex lg:items-center">
              <div className="flex items-baseline space-x-8 mr-12">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.path}
                      className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 
                                flex items-center group whitespace-nowrap
                                ${(isScrolled || isHovered || mobileMenuOpen)
                                  ? 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'
                                  : 'text-white hover:bg-white/10'
                                }`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg 
                                 bg-gradient-to-br from-gray-900 via-blue-900 to-black
                                 focus:outline-none overflow-visible z-50"
                      >
                        <div className="py-2">
                          {item.name === "Products" && (
                            <>
                              {item.dropdown.map((category) => (
                                <div 
                                  key={category.name} 
                                  className="relative group"
                                  onMouseEnter={() => handleCategoryMouseEnter(category.name)}
                                  onMouseLeave={handleCategoryMouseLeave}
                                >
                                  <Link
                                    href={category.path}
                                    className="block px-4 py-3 text-sm text-white/90 
                                             hover:bg-white/10 font-medium transition-all duration-200
                                             flex items-center justify-between group-hover:text-blue-300"
                                  >
                                    <span>{category.name}</span>
                                  </Link>
                                  
                                  <div 
                                    className={`absolute left-full top-0 w-56 rounded-xl shadow-lg 
                                              bg-gradient-to-br from-gray-900 via-blue-900 to-black
                                              focus:outline-none overflow-hidden ml-0.5 
                                              transition-opacity duration-150
                                              ${activeSubDropdown === category.name ? 'opacity-100 visible' : 'opacity-0 invisible'}
                                              `}
                                    style={{ marginTop: '0px' }}
                                  >
                                    <div className="py-2">
                                      {category.items.map((item) => (
                                        <Link
                                          key={item}
                                          href={`${category.path}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                          className="block px-4 py-2 text-sm text-white/80 
                                                   hover:bg-white/10 hover:text-blue-300 
                                                   transition-all duration-200"
                                        >
                                          {item}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </>
                          )}
                          {item.name !== "Products" && item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className="block px-4 py-3 text-sm text-white/90 
                                       hover:bg-white/10 hover:text-blue-300 
                                       transition-all duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center">
              <div className="flex items-center border-l border-gray-200 pl-8">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1 px-4 py-1.5 
                      ${(isScrolled || isHovered || mobileMenuOpen)
                        ? 'bg-transparent text-blue-600 border-2 border-gray-900'
                        : 'bg-white text-blue-600 border-2 border-white'
                      }
                      rounded-full text-sm font-medium shadow-sm
                      transition-all duration-300 ease-out
                      hover:bg-blue-600 hover:text-white hover:border-blue-600
                      group`}
                  >
                    <EnvelopeIcon className="w-4 h-4 transition-colors duration-300" />
                    <span className="font-semibold">Contact Us</span>
                  </motion.button>
                </Link>
                
                <div className="border-l border-gray-200 pl-6 ml-6">
                  <div className="grid grid-cols-3 gap-2">
                    {[FaLinkedin, FaWhatsapp, FaFacebookF, FaEnvelope, FaPhone, FaYoutube].map((Icon, index) => (
                      <motion.a 
                        key={index}
                        href="#" 
                        whileHover={{ scale: 1.1 }}
                        className={`transition-colors duration-200 ${
                          (isScrolled || isHovered || mobileMenuOpen)
                            ? 'text-blue-600 hover:text-blue-800'
                            : 'text-white hover:text-blue-200'
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-4">
              <ContactButton />
              <button
                onClick={toggleMobileMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
                  (isScrolled || isHovered || mobileMenuOpen)
                    ? 'text-black hover:bg-blue-50 hover:text-blue-600'
                    : 'text-white hover:bg-white/10'
                }`}
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
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden border-t ${
              (isScrolled || isHovered) 
                ? 'bg-white' 
                : 'bg-transparent'
            }`}
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
    </div>
  );
};

export default Navbar;