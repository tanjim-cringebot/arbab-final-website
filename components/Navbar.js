"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import arbab_logo from "../public/images/arbab_logo.png";
import TopBar from "./TopBar";

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
    { name: "Home", path: "/" },
    {
      name: "About APL",
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
      name: "Product Portfolio",
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
      name: "Capacity & Certification",
      path: "/capacity-certification",
      dropdown: [
        { name: "Production Capacity", path: "/capacity-certification#production-capacity" },
        { name: "Production Highlights", path: "/capacity-certification#production-highlights" },
        { name: "Technology and Automation", path: "/capacity-certification#technology-automation" },
        { name: "Customizable Solutions", path: "/capacity-certification#customizable-solutions" },
        { name: "Certifications", path: "/capacity-certification#certifications" },
        { name: "Process Excellence", path: "/capacity-certification#process-excellence" },
      ],
    },
    {
      name: "Innovation & Sustainability",
      path: "/innovation-sustainability",
      dropdown: [
        { name: "Our Commitment", path: "/innovation-sustainability#our-commitment" },
        { name: "Our Impact", path: "/innovation-sustainability#our-impact" },
        { name: "Innovative Solutions", path: "/innovation-sustainability#innovative-solutions" },
        { name: "Join", path: "/innovation-sustainability#join" },
      ],
    },
    {
      name: "About AG",
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
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative z-50">
      <TopBar />
      <motion.nav
        className="w-full bg-white shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src={arbab_logo}
                alt="Arbab Pack Ltd"
                width={300}
                height={150}
                className="h-24 w-auto"
              />
            </Link>
            <div className="hidden lg:flex lg:items-center">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.path}
                      className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-100 hover:text-black transition-colors duration-300"
                    >
                      {item.name}
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
                            className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto max-h-96"
                          >
                            <div className="py-1">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
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
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-colors duration-300"
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
              className="lg:hidden bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    <Link
                      href={item.path}
                      className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100 transition-colors duration-300"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-colors duration-300"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
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
