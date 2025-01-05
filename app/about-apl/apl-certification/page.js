"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { 
  FaAward, 
  FaCheck, 
  FaBuilding, 
  FaGlobe, 
  FaIndustry, 
  FaLeaf,
  FaRecycle,
  FaCertificate,
  FaShieldAlt,
  FaFileAlt,
  FaEuroSign,
  FaMedal,
  FaStar,
  FaWarehouse,
  FaBolt,
  FaTint,
  FaFlask,
  FaSolarPanel,
  FaTrashRestoreAlt,
  FaRobot,
  FaChartLine,
  FaWater,
  FaGraduationCap,
  FaTruck,
  FaHandshake
} from "react-icons/fa";

export default function APLCertification() {
  const currentCertifications = [
    {
      title: "ISO 9001:2015",
      description: "Robust quality management system ensuring consistent product quality, operational efficiency, and customer satisfaction.",
      icon: FaAward,
      category: "Quality Management"
    },
    {
      title: "FSSC 22000",
      description: "Global food safety certification guaranteeing our products meet international standards and safeguard public health.",
      icon: FaShieldAlt,
      category: "Food Safety"
    },
    {
      title: "IAF Membership",
      description: "International Accreditation Forum membership aligning our practices with global accreditation norms.",
      icon: FaGlobe,
      category: "Global Standards"
    },
    {
      title: "Management Systems Certification",
      description: "Demonstrates adherence to international management standards for efficient processes and sustainable practices.",
      icon: FaCertificate,
      category: "Management Excellence"
    },
    {
      title: "Export Promotion Bureau Certificate",
      description: "Recognition of our role in driving economic growth through exports.",
      icon: FaFileAlt,
      category: "Export Excellence"
    },
    {
      title: "Export Registration Certificate",
      description: "Ensures compliance with regulatory requirements for seamless global trade operations.",
      icon: FaMedal,
      category: "Compliance"
    },
    {
      title: "EU Export Registration",
      description: "Validates our ability to meet stringent European Union quality and safety standards.",
      icon: FaEuroSign,
      category: "International Trade"
    }
  ];

  const futureCertifications = [
    {
      title: "ISO 14001",
      description: "Environmental management systems certification",
      icon: FaLeaf,
      targetYear: "2025"
    },
    {
      title: "ISO 45001",
      description: "Occupational health and safety management certification",
      icon: FaShieldAlt,
      targetYear: "2026"
    },
    {
      title: "B Corporation",
      description: "Verification of social and environmental performance",
      icon: FaStar,
      targetYear: "2027"
    },
    // ... add other future certifications
  ];

  const coreFacilities = [
    {
      name: "Warehouse Capacity",
      description: "Ample storage solutions for efficient inventory management",
      icon: FaWarehouse,
      features: ["Optimized space utilization", "Climate-controlled storage", "Advanced tracking systems"]
    },
    {
      name: "Power Supply",
      description: "2060 KVA Gas Generator for uninterrupted operations",
      icon: FaBolt,
      features: ["Reliable power backup", "Energy-efficient systems", "24/7 operation capability"]
    },
    {
      name: "Water Plant",
      description: "Sustainable water management system",
      icon: FaTint,
      features: ["Purification systems", "Recycling capabilities", "Efficient distribution"]
    },
    {
      name: "Quality Labs",
      description: "Advanced testing facilities for global standards compliance",
      icon: FaFlask,
      features: ["Modern equipment", "Certified technicians", "Comprehensive testing protocols"]
    }
  ];

  return (
    <main className="bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        {/* Background Effects */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              APL Certifications & Facilities
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our commitment to quality, safety, and sustainability is reflected in our certifications and state-of-the-art facilities
            </p>
          </motion.div>

          {/* Current Certifications Grid */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Certifications of Excellence</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12 text-center">
              APL's dedication to upholding global standards and ensuring excellence across our operations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCertifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <cert.icon className="text-4xl text-blue-400 mb-4" />
                  <div className="text-sm text-blue-300 mb-2">{cert.category}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-200">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Certifications Section */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Vision 2050: Future Certifications</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12 text-center">
              Supporting the APL 20-50 program and aligning with Sustainable Development Goals
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {futureCertifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <cert.icon className="text-3xl text-green-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-200 mb-2">{cert.description}</p>
                  <div className="text-sm text-green-400">Target: {cert.targetYear}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Facilities Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 text-center">State-of-the-Art Facilities</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12 text-center">
              Empowering sustainable operations with cutting-edge infrastructure
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreFacilities.map((facility, index) => (
                <motion.div
                  key={facility.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <facility.icon className="text-4xl text-blue-400 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{facility.name}</h3>
                      <p className="text-blue-300">{facility.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {facility.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-blue-200">
                        <FaCheck className="text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 