"use client";

import { motion } from "framer-motion";
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
  FaClock,
  FaBolt,
  FaMicrochip,
  FaArrowRight
} from "react-icons/fa";

export default function APLCertification() {
  const currentCertifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent product quality and operational efficiency across all our processes.",
      icon: FaAward,
      category: "Quality Management",
      validUntil: "2025",
      features: [
        "Process standardization",
        "Quality assurance",
        "Continuous improvement"
      ]
    },
    {
      title: "FSSC 22000",
      description: "Food Safety System Certification demonstrating our commitment to maintaining the highest standards in food safety management.",
      icon: FaShieldAlt,
      category: "Food Safety",
      validUntil: "2024",
      features: [
        "HACCP principles",
        "Risk management",
        "Food defense"
      ]
    },
    {
      title: "IAF Membership",
      description: "International Accreditation Forum membership validating our conformity assessment processes with global standards.",
      icon: FaGlobe,
      category: "Global Standards",
      validUntil: "2025",
      features: [
        "International recognition",
        "Standardized practices",
        "Global compliance"
      ]
    },
    {
      title: "Management Systems Certification",
      description: "Comprehensive certification covering quality, environmental, and safety management systems integration.",
      icon: FaCertificate,
      category: "Management Excellence",
      validUntil: "2024",
      features: [
        "Integrated management",
        "Process optimization",
        "Performance monitoring"
      ]
    },
    {
      title: "Export Promotion Bureau Certificate",
      description: "Official recognition of our contribution to national export growth and international trade development.",
      icon: FaFileAlt,
      category: "Export Excellence",
      validUntil: "2025",
      features: [
        "Export compliance",
        "Trade facilitation",
        "Market access"
      ]
    },
    {
      title: "EU Export Registration",
      description: "Certification for meeting European Union's stringent quality and safety standards for packaging products.",
      icon: FaEuroSign,
      category: "International Trade",
      validUntil: "2024",
      features: [
        "EU compliance",
        "Quality standards",
        "Market authorization"
      ]
    }
  ];

  const futureCertifications = [
    {
      title: "ISO 14001:2025",
      description: "Environmental Management System certification to demonstrate our commitment to environmental responsibility and sustainable practices.",
      icon: FaLeaf,
      targetYear: "2025",
      category: "Environmental Management",
      benefits: [
        "Enhanced environmental performance",
        "Sustainable resource management",
        "Reduced environmental impact"
      ]
    },
    {
      title: "ISO 45001:2024",
      description: "Occupational Health and Safety Management System certification ensuring worker safety and workplace well-being.",
      icon: FaShieldAlt,
      targetYear: "2024",
      category: "Safety Standards",
      benefits: [
        "Improved workplace safety",
        "Risk prevention",
        "Employee well-being"
      ]
    },
    {
      title: "ISO 50001:2024",
      description: "Energy Management System certification for optimizing energy consumption and promoting energy efficiency.",
      icon: FaBolt,
      targetYear: "2024",
      category: "Energy Management",
      benefits: [
        "Energy efficiency",
        "Cost reduction",
        "Sustainable operations"
      ]
    }
  ];

  const coreFacilities = [
    {
      name: "Advanced Manufacturing Plant",
      description: "State-of-the-art manufacturing facility with automated production lines",
      icon: FaIndustry,
      features: [
        "Automated production lines with Industry 4.0 integration",
        "Advanced quality control systems",
        "Energy-efficient machinery and processes",
        "Real-time production monitoring"
      ]
    },
    {
      name: "Quality Control Laboratory",
      description: "Cutting-edge testing and quality assurance facility",
      icon: FaShieldAlt,
      features: [
        "Advanced material testing equipment",
        "Comprehensive quality inspection protocols",
        "Environmental testing chambers",
        "Product safety verification systems"
      ]
    },
    {
      name: "Research & Development Center",
      description: "Innovation hub for developing sustainable packaging solutions",
      icon: FaMicrochip,
      features: [
        "Material research laboratory",
        "Prototype development facility",
        "Sustainability testing center",
        "Innovation workshop space"
      ]
    },
    {
      name: "Sustainable Production Unit",
      description: "Eco-friendly manufacturing facility focused on sustainable practices",
      icon: FaLeaf,
      features: [
        "Solar-powered operations",
        "Water recycling systems",
        "Waste reduction technology",
        "Green energy integration"
      ]
    }
  ];

  return (
    <main className="bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        {/* Modern Geometric Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Global Standards & Excellence
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our commitment to quality, safety, and sustainability is validated through international certifications and state-of-the-art facilities
            </p>
          </motion.div>

          {/* Current Certifications */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Current Certifications</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCertifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl blur-xl 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 
                               hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg 
                                    flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <cert.icon className="text-xl text-white" />
                        </div>
                        <div className="text-sm text-blue-400">{cert.category}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-300">
                        <FaClock className="text-xs" />
                        <span>Valid until {cert.validUntil}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-blue-200 mb-4 group-hover:text-blue-100 transition-colors duration-300">
                      {cert.description}
                    </p>
                    
                    <div className="space-y-2">
                      {cert.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-blue-300">
                          <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <FaCheck className="text-xs text-blue-400" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Certifications */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Future Certifications</h2>
              <p className="text-blue-200 max-w-2xl mx-auto mb-6">
                Our roadmap to excellence includes acquiring these prestigious certifications to further strengthen our commitment to quality and sustainability
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {futureCertifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl blur-xl 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 
                               hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg 
                                    flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <cert.icon className="text-xl text-white" />
                        </div>
                        <div className="text-sm text-green-400">{cert.category}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-300">
                        <FaClock className="text-xs" />
                        <span>Target: {cert.targetYear}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-blue-200 mb-4 group-hover:text-blue-100 transition-colors duration-300">
                      {cert.description}
                    </p>
                    
                    <div className="space-y-2">
                      {cert.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-green-300">
                          <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                            <FaCheck className="text-xs text-green-400" />
                          </div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* State-of-the-Art Facilities */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-4">State-of-the-Art Facilities</h2>
              <p className="text-blue-200 max-w-2xl mx-auto mb-6">
                Our world-class facilities are equipped with cutting-edge technology to ensure the highest standards of quality and innovation
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreFacilities.map((facility, index) => (
                <motion.div
                  key={facility.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl blur-xl 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 
                               hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl 
                                  flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <facility.icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {facility.name}
                        </h3>
                        <p className="text-blue-300">{facility.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {facility.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/5 
                                   group-hover:bg-purple-500/10 transition-colors duration-300"
                        >
                          <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaCheck className="text-xs text-purple-400" />
                          </div>
                          <span className="text-blue-200 group-hover:text-blue-100">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.div 
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <FaArrowRight className="text-purple-400" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Would you like to see the next sections? */}
        </div>
      </section>
    </main>
  );
} 