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
  FaGlobe,
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
  FaRuler,
  FaSync,
  FaPalette,
  FaRegLightbulb,
  FaHandHoldingHeart,
  FaGraduationCap,
  FaChartBar,
  FaInfinity,
  FaBullseye,
  FaEye,
  FaCogs,
  FaBoxOpen,
  FaTree,
  FaWater,
  FaSeedling,
  FaSolarPanel
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
    icon: FaAward,
    title: "APL Certifications and Facilities",
    link: "/about-apl/apl-certification",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    hoverFrom: "blue-600",
    hoverTo: "blue-700"
  },
  {
    icon: FaBinoculars,
    title: "APL Vision 2050",
    link: "/about-apl/apl-vision",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600",
    hoverFrom: "emerald-600",
    hoverTo: "emerald-700"
  },
  {
    icon: FaShieldAlt,
    title: "APL Policy Guidelines",
    link: "#policy-section",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    hoverFrom: "purple-600",
    hoverTo: "purple-700"
  }
];

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] flex flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-blue-900 to-black">
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

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"
      />

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/arbab_office.jpg"
          alt="APL Background"
          fill
          style={{ objectFit: 'cover', opacity: 0.4 }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-black/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col h-full">
        {/* Header Content - Centered */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 
                         bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Arbab Pack Limited
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Leading the way in innovative packaging solutions with sustainable practices 
              and cutting-edge technology.
            </p>
          </motion.div>
        </div>

        {/* Info Options Grid - Positioned to overlap sections */}
        <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
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
    <section id="capacity" className="pt-24 pb-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Stats section */}
      <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm text-white py-16">
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
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
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

      {/* Machinery Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Advanced Machinery</h2>
          <p className="text-xl text-blue-300">Cutting-edge technology for superior results</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {machinery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <item.icon className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.features.map((feature, i) => (
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

      {/* Production Process Section */}
      <div className="bg-blue-900/30 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-blue-300">From concept to completion</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-400/20 transform -translate-x-1/2 hidden md:block" />
            
            {productionStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 p-4">
                  <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <stage.icon className="text-3xl text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                    <p className="text-blue-200">{stage.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-blue-400 rounded-full absolute left-1/2 transform -translate-x-1/2" style={{ top: `${index * 25}%` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Component
export default function AboutAPL() {
  const milestones = [
    {
      year: 1988,
      title: "Arbab Group Launch",
      description: "Launched Arbab Group, focused on locally made world class packaging material.",
      icon: FaBuilding
    },
    {
      year: 2000,
      title: "Digital Integration",
      description: "Digitally integrated manufacturing for increased efficiency and precision.",
      icon: FaIndustry
    },
    {
      year: 2010,
      title: "Nationwide Expansion",
      description: "Achieved nationwide expansion.",
      icon: FaGlobe
    },
    {
      year: 2015,
      title: "Sustainable Innovation",
      description: "Created biodegradable packaging solutions to minimize environmental impact.",
      icon: FaLeaf
    },
    {
      year: 2020,
      title: "Recycling Hub",
      description: "Established an advanced recycling hub to champion the circular economy.",
      icon: FaRecycle
    },
    {
      year: 2024,
      title: "Circular Economy",
      description: "Initiated implementation of circular economy principles.",
      icon: FaSync
    }
  ];

  const brandValueProps = [
    {
      title: "Premium Quality Assurance",
      description: "Our state-of-the-art manufacturing processes ensure consistent, high-quality packaging that enhances product presentation and protection.",
      icon: FaShieldAlt,
      stats: "99.9%",
      statsLabel: "Quality Success Rate"
    },
    {
      title: "Innovative Design Solutions",
      description: "Custom packaging designs that capture brand essence and create memorable unboxing experiences for end consumers.",
      icon: FaPalette,
      stats: "200+",
      statsLabel: "Custom Designs Yearly"
    },
    {
      title: "Sustainable Packaging",
      description: "Eco-friendly solutions that appeal to environmentally conscious consumers while maintaining product integrity.",
      icon: FaLeaf,
      stats: "40%",
      statsLabel: "Reduced Carbon Footprint"
    },
    {
      title: "Market Adaptability",
      description: "Flexible packaging solutions that respond to changing market trends and consumer preferences.",
      icon: FaRegLightbulb,
      stats: "24/7",
      statsLabel: "Technical Support"
    },
    {
      title: "Customer Satisfaction",
      description: "Dedicated support and collaborative approach to meet specific brand requirements and timeline commitments.",
      icon: FaHandHoldingHeart,
      stats: "95%",
      statsLabel: "Client Satisfaction"
    },
    {
      title: "Growth Partnership",
      description: "Strategic packaging solutions that help brands scale and expand into new markets effectively.",
      icon: FaChartLine,
      stats: "30%",
      statsLabel: "Avg. Client Growth"
    }
  ];

  const climateInitiatives = [
    {
      title: "Commitment to Sustainable Practices",
      description: "Arbab Group prioritizes sustainability in its operations by integrating eco-friendly practices into its manufacturing processes. This includes the use of sustainable materials and technologies that minimize waste and energy consumption.",
      icon: FaLeaf,
      stats: {
        value: "40%",
        label: "Reduction in Energy Consumption"
      }
    },
    {
      title: "Innovation in Packaging Solutions",
      description: "The company focuses on developing innovative packaging solutions that are not only functional but also environmentally friendly. By investing in research and development, Arbab Group aims to create products that reduce reliance on non-renewable resources and promote recycling.",
      icon: FaRecycle,
      stats: {
        value: "60%",
        label: "Recyclable Materials Used"
      }
    },
    {
      title: "Collaboration with Climate Initiatives",
      description: "Arbab Group actively engages with local and international climate initiatives, collaborating with organizations to enhance their sustainability efforts.",
      icon: FaHandshake,
      link: "/contact/partnership",
      linkText: "Explore Partnerships",
      stats: {
        value: "25+",
        label: "Active Climate Partnerships"
      }
    },
    {
      title: "Education and Awareness",
      description: "The group is committed to raising awareness about climate change and its impacts within the communities they operate. They engage in educational programs that inform stakeholders about sustainable practices.",
      icon: FaGraduationCap,
      link: "/contact/csr",
      linkText: "CSR Programs",
      stats: {
        value: "10K+",
        label: "People Reached"
      }
    },
    {
      title: "Monitoring and Reporting",
      description: "Arbab Group emphasizes transparency in its sustainability efforts by monitoring progress and reporting on its environmental impact.",
      icon: FaChartBar,
      link: "/reports/esg",
      linkText: "View ESG Reports",
      stats: {
        value: "100%",
        label: "Transparency Score"
      }
    }
  ];

  const valueProps = [
    {
      title: "Cutting-edge Technology",
      description: "Advanced manufacturing facilities equipped with state-of-the-art technology for precision and efficiency",
      icon: FaMicrochip,
      bgGradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Decades of Expertise",
      description: "Over 37 years of industry experience delivering innovative packaging solutions",
      icon: FaHistory,
      bgGradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Deep Commitment to Sustainability",
      description: "Leading the industry in sustainable practices and eco-friendly solutions",
      icon: FaLeaf,
      bgGradient: "from-green-500/20 to-green-600/20"
    }
  ];

  return (
    <main className="bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* APL Journey Section */}
      <section className="py-20 relative overflow-hidden mt-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">APL Journey</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Founded in 1988, APL has transformed from a small paper converting facility into a leader 
              in packaging solutions. With over 37 years of experience, we have established a reputation 
              for excellence and innovation, serving diverse industries, reaching nationwide.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line with Glow Effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900/30">
              <motion.div
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 h-full
                         relative after:absolute after:inset-0 after:blur-sm after:bg-inherit"
              />
            </div>

            {/* Timeline Items */}
            <div className="relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center mb-20 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10
                               hover:bg-white/10 transition-all duration-300 relative group"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold text-white mb-2">{milestone.title}</h4>
                      <p className="text-blue-200">{milestone.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center
                               relative after:absolute after:inset-0 after:blur-sm after:bg-blue-500/50
                               z-10 border border-blue-400"
                    >
                      <milestone.icon className="text-white text-xl" />
                    </motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity Section */}
      <CapacitySection />

      {/* Brand Value Section */}
      <section className="py-20 relative overflow-hidden">
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
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Elevating Brand Value Through Packaging Excellence
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              APL transforms packaging into a powerful brand asset, delivering solutions that enhance product 
              perception, protect integrity, and drive sustainable growth for our clients.
            </p>
          </motion.div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandValueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 
                         hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Icon Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center
                                group-hover:bg-blue-500/30 transition-all duration-300">
                    <prop.icon className="text-2xl text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">{prop.title}</h3>
                </div>

                {/* Description */}
                <p className="text-blue-200 mb-6">{prop.description}</p>

                {/* Stats */}
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="text-3xl font-bold text-blue-400">{prop.stats}</div>
                    <div className="text-sm text-blue-300">{prop.statsLabel}</div>
                  </div>
                  <FaStar className="text-yellow-400 ml-auto" />
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Action Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Contribution to Climate Action
            </h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              AG is making significant strides in climate action since last 37 years through
              its circular economy practice to reduce environmental impact.
            </p>
          </motion.div>

          {/* Initiatives Grid */}
          <div className="space-y-12">
            {climateInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-green-500/10 
                         hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center
                                group-hover:bg-green-500/30 transition-all duration-300 flex-shrink-0">
                    <initiative.icon className="text-3xl text-green-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{initiative.title}</h3>
                    <p className="text-green-200 mb-4">{initiative.description}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="text-3xl font-bold text-green-400">{initiative.stats.value}</div>
                        <div className="text-sm text-green-300">{initiative.stats.label}</div>
                      </div>

                      {initiative.link && (
                        <Link 
                          href={initiative.link}
                          className="ml-auto flex items-center gap-2 text-green-400 hover:text-green-300 
                                   transition-colors duration-300"
                        >
                          {initiative.linkText}
                          <FaArrowRight className="text-sm" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
              </motion.div>
            ))}
          </div>

          {/* Download Report Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/sustainability-report"
              className="inline-flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 
                       text-green-400 px-6 py-3 rounded-lg transition-all duration-300
                       border border-green-500/20 hover:border-green-500/40"
            >
              <FaDownload className="text-sm" />
              Download Sustainability Report
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"
        />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">APL Value Proposition</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br ${prop.bgGradient} backdrop-blur-sm rounded-xl p-8 
                         border border-white/10 hover:scale-105 transition-all duration-300`}
              >
                <prop.icon className="text-4xl text-white mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{prop.title}</h3>
                <p className="text-blue-200">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-900/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <FaInfinity className="text-6xl text-blue-400 mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">APL USP</h2>
              <p className="text-xl text-blue-200">
                Circular economy is the USP for APL to make the product more valuable to the industry. 
                We offer unmatched quality, customization, and sustainable solutions, making us the 
                preferred partner for companies globally.
              </p>
            </div>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              className="md:w-1/2 aspect-square rounded-full relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer Circle */}
                <div className="w-4/5 h-4/5 rounded-full border-2 border-blue-500/30 animate-spin-slow relative">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                    <FaRecycle className="text-3xl text-blue-400" />
                  </div>
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                    <FaLeaf className="text-3xl text-green-400" />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <FaIndustry className="text-3xl text-blue-400" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <FaBoxOpen className="text-3xl text-blue-400" />
                  </div>
                </div>

                {/* Middle Circle */}
                <div className="absolute w-3/5 h-3/5 rounded-full border-2 border-blue-400/40 animate-spin-slower">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2">
                    <FaTree className="text-2xl text-green-400" />
                  </div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2">
                    <FaWater className="text-2xl text-blue-400" />
                  </div>
                </div>

                {/* Inner Circle */}
                <div className="absolute w-2/5 h-2/5 rounded-full border-2 border-blue-300/50 animate-spin-slowest">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                    <FaSeedling className="text-xl text-green-400" />
                  </div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                    <FaSolarPanel className="text-xl text-yellow-400" />
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute w-1/5 h-1/5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <FaRecycle className="text-2xl text-blue-400" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <FaBullseye className="text-4xl text-blue-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">APL Mission</h2>
              </div>
              <p className="text-xl text-blue-200">
                To provide innovative packaging solutions that meet the highest standards of quality, 
                sustainability, and customer service while contributing positively to our communities.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <FaEye className="text-4xl text-blue-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">APL Vision</h2>
              </div>
              <p className="text-xl text-blue-200">
                To be the global leader in sustainable packaging solutions through innovation, 
                technology, and long-term partnerships that foster environmental stewardship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ... rest of the sections remain the same ... */}
    </main>
  );
}

