"use client";

// Imports
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from 'react';
import { 
  FaArrowRight,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaHistory,
  FaIndustry,
  FaChartLine,
  FaAward,
  FaBolt,
  FaRecycle,
  FaLeaf,
  FaBuilding,
  FaMicrochip,
  FaLayerGroup,
  FaTrophy,
  FaStar,
  FaCertificate,
  FaClock,
  FaFlag,
  FaGlobeAmericas,
  FaHandshake,
  FaUsers,
  FaBinoculars,
  FaPrint,
  FaCut,
  FaBox,
  FaSearchPlus,
  FaUtensils,
  FaWineGlass,
  FaPrescriptionBottleAlt,
  FaPumpSoap,
  FaHome,
  FaPencilRuler,
  FaTruck,
  FaUniversity,
  FaLightbulb,
  FaDownload,
  FaNewspaper,
  FaShieldAlt,
  FaCheck,
  FaRuler
} from "react-icons/fa";
import { EnvelopeIcon } from '@heroicons/react/24/outline';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/arbab_office.jpg"
          alt="APL Factory"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Leading Innovation in Packaging Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Delivering excellence through sustainable and customized packaging solutions
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#quick-nav"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
                     text-white px-6 py-3 rounded-full transition-colors duration-300"
          >
            Explore Our Solutions
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>

      {/* Quick Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid grid-cols-3 gap-4">
            {/* APL USP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link 
                href="#usp-section" 
                className="flex flex-col items-center group p-4 rounded-xl 
                         hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center 
                            group-hover:bg-blue-600 transition-colors duration-300">
                  <FaLeaf className="text-2xl text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="mt-2 text-white/80 group-hover:text-white text-sm font-medium">APL USP</span>
              </Link>
            </motion.div>

            {/* Circular Economy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Link 
                href="#circular-economy" 
                className="flex flex-col items-center group p-4 rounded-xl 
                         hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center 
                            group-hover:bg-green-600 transition-colors duration-300">
                  <FaRecycle className="text-2xl text-green-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="mt-2 text-white/80 group-hover:text-white text-sm font-medium">
                  Circular Economy
                </span>
              </Link>
            </motion.div>

            {/* APL News */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Link 
                href="#news-section" 
                className="flex flex-col items-center group p-4 rounded-xl 
                         hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center 
                            group-hover:bg-amber-600 transition-colors duration-300">
                  <FaNewspaper className="text-2xl text-amber-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="mt-2 text-white/80 group-hover:text-white text-sm font-medium">APL News</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-white"
      >
        <div className="animate-bounce">
          <FaChevronDown className="text-2xl" />
        </div>
      </motion.div>
    </section>
  );
};

// Capacity Section Component
const CapacitySection = () => {
  const capabilities = [
    {
      title: "Investment",
      value: "1.2",
      unit: "B BDT",
      icon: FaChartLine,
      description: "Total capital investment"
    },
    {
      title: "Printing Capacity",
      value: "10",
      unit: "Colors",
      icon: FaPrint,
      description: "High-definition Roto printing"
    },
    {
      title: "Production Width",
      value: "1250",
      unit: "mm",
      icon: FaRuler,
      description: "Maximum printing width"
    },
    {
      title: "Global Standards",
      value: "3",
      unit: "+ Certifications",
      icon: FaAward,
      description: "ISO, FSSC, REX certified"
    }
  ];

  const productionStages = [
    {
      title: "Design Consultation",
      icon: FaPencilRuler,
      description: "Tailored packaging designs meeting client specifications"
    },
    {
      title: "Material Selection",
      icon: FaLayerGroup,
      description: "Advanced lamination and coating technologies"
    },
    {
      title: "Production & Printing",
      icon: FaPrint,
      description: "High-speed, multi-color printing processes"
    },
    {
      title: "Quality Control",
      icon: FaSearchPlus,
      description: "Continuous quality checks throughout production"
    },
    {
      title: "Final Delivery",
      icon: FaTruck,
      description: "Timely and efficient product delivery"
    }
  ];

  const machinery = [
    {
      title: "Roto Printing",
      icon: FaPrint,
      features: ["10-Color capacity", "1250mm width", "High-definition output"]
    },
    {
      title: "Lamination",
      icon: FaLayerGroup,
      features: ["Dry lamination", "Extrusion lamination", "Moisture resistance"]
    },
    {
      title: "Converting",
      icon: FaCut,
      features: ["Slitting machines", "Bag-making units", "Precision cutting"]
    },
    {
      title: "Quality Control",
      icon: FaSearchPlus,
      features: ["Inspection machines", "Corona treatment", "Quality monitoring"]
    }
  ];

  return (
    <section id="capacity" className="py-24">
      {/* Existing stats section with updated styling */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Production Capacity</h2>
            <p className="text-xl text-blue-200">State-of-the-art manufacturing excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <item.icon className="text-4xl text-blue-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="text-3xl font-bold text-blue-300 mb-2">
                  {item.value}
                  <span className="text-xl ml-1">{item.unit}</span>
                </div>
                <p className="text-blue-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* New Machinery Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Advanced Machinery</h2>
          <p className="text-xl text-blue-700">Cutting-edge technology for superior results</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {machinery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <item.icon className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Production Process Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Process</h2>
            <p className="text-xl text-blue-700">From concept to completion</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 hidden md:block" />
            
            {productionStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 p-4">
                  <div className={`bg-white rounded-xl shadow-lg p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <stage.icon className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{stage.title}</h3>
                    <p className="text-gray-600">{stage.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2" style={{ top: `${index * 25}%` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Component
export default function About() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CapacitySection />
      {/* Other sections will go here */}
    </main>
  );
}
