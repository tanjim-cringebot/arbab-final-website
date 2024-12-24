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

const InfoOption = ({ icon: Icon, title, link, gradientFrom, gradientTo, hoverFrom, hoverTo }) => (
  <motion.div
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <Link 
      href={link} 
      className="block bg-white/5 backdrop-blur-sm rounded-lg p-4 
                 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group
                 border border-white/10"
    >
      <div className="flex flex-col items-center text-center relative z-10">
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`w-10 h-10 bg-gradient-to-br ${gradientFrom} ${gradientTo}
                   rounded-lg flex items-center justify-center mb-3 
                   shadow-md transform group-hover:scale-105 
                   group-hover:from-${hoverFrom} group-hover:to-${hoverTo}
                   transition-all duration-300`}
        >
          <Icon className="text-sm text-white" />
        </motion.div>
        
        <h3 className={`text-sm font-medium text-white/90
                     group-hover:text-${hoverFrom} transition-colors duration-300`}>
          {title}
        </h3>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-br from-${hoverFrom}/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </Link>
  </motion.div>
);

const infoOptions = [
  {
    icon: FaIndustry,
    title: "APL USP",
    link: "#usp-section",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    hoverFrom: "blue-600",
    hoverTo: "blue-700"
  },
  {
    icon: FaRecycle,
    title: "Circular Economy Practice",
    link: "#circular-economy",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600",
    hoverFrom: "emerald-600",
    hoverTo: "emerald-700"
  },
  {
    icon: FaNewspaper,
    title: "APL News",
    link: "#news-section",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    hoverFrom: "purple-600",
    hoverTo: "purple-700"
  }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/arbab_office.jpg"
          alt="APL Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-black/80 to-black/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 
                       bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Arbab Pack Limited
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Leading the way in innovative packaging solutions with sustainable practices 
            and cutting-edge technology.
          </p>
        </motion.div>

        {/* Info Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
          {infoOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <InfoOption {...option} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white text-center"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto mb-2 
                       flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full"
            />
          </div>
          <span className="text-sm font-medium text-white/70">Scroll to explore</span>
        </motion.div>
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
