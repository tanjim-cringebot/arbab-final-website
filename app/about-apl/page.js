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
  FaSun,
  FaWind,
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
    title: "APL Certifications & Facilities",
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
    link: "/about-apl/apl-guidelines",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    hoverFrom: "purple-600",
    hoverTo: "purple-700"
  }
];

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] mb-24 flex flex-col items-center justify-between overflow-visible">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/arbab_office.jpg"
          alt="APL Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
          quality={60}
        />
        {/* Very subtle black overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col h-full">
        {/* Header Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white
                         drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Arbab Pack Limited
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto
                       drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Leading the way in innovative packaging solutions with sustainable practices 
              and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>

      {/* Info Options Grid - Keeping the original position */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full max-w-3xl px-4 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {infoOptions.map((option, index) => (
            <div
              key={index}
              className={`animate-fadeInUp`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Link 
                href={option.link} 
                className="block bg-white/10 backdrop-blur-md rounded-xl p-4 
                         hover:bg-white/15 transition-all duration-300 relative overflow-hidden group
                         border border-white/10 shadow-lg hover:shadow-xl
                         transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`w-10 h-10 bg-gradient-to-br ${option.gradientFrom} ${option.gradientTo}
                               rounded-lg flex items-center justify-center mb-3
                               shadow-md transition-transform duration-300
                               group-hover:scale-110 flex-shrink-0`}
                  >
                    <option.icon className="text-base text-white" />
                  </div>
                  
                  <h3 className="text-sm font-medium text-white/90 transition-colors duration-300 leading-snug">
                    {option.title}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add these styles to your global CSS file (globals.css)
const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-fadeInUp {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

@layer utilities {
  .gpu-accelerate {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000;
    will-change: transform;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
  will-change: transform;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-glow {
  animation: glow 8s ease-in-out infinite;
  will-change: opacity;
}

@keyframes glow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}
`;

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
    <section id="capacity" className="pt-0 pb-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Production Capacity Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/95 to-black/95" />
          {/* Animated Circuit Lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`circuit-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                top: `${(i + 1) * 12}%`,
                width: '100%',
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              APL Packaging Excellence 
            </h2>
            <p className="text-xl text-blue-200">
              State-of-the-art manufacturing excellence
            </p>
          </motion.div>

          {/* Capacity Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 
                             rounded-2xl blur-xl group-hover:from-blue-500/10 group-hover:to-blue-600/10 
                             transition-all duration-300" />
                
                {/* Content Container */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-blue-900/80 
                             backdrop-blur-sm rounded-2xl p-8 border border-blue-500/10">
                  {/* Icon with Orbital Ring */}
                  <div className="relative w-16 h-16 mb-6 mx-auto">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-blue-500/30"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 rounded-full border border-blue-400/20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon className="text-3xl text-blue-400" />
                    </div>
                  </div>

                  {/* Stats Display */}
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 
                               bg-clip-text text-transparent mb-2"
                    >
                      {item.value}
                      <span className="text-xl ml-1">{item.unit}</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-200 text-sm">{item.description}</p>
                  </div>

                  {/* Animated Particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full"
                      animate={{
                        y: [-10, 10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${50 + (i * 20)}%`,
                        bottom: '20%',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Production Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productionStages.slice(0, 3).map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Stage Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-blue-900/80 
                             backdrop-blur-sm rounded-2xl p-8 border border-blue-500/10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 
                               rounded-xl flex items-center justify-center mb-6 transform 
                               group-hover:rotate-12 transition-transform duration-300">
                    <stage.icon className="text-2xl text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{stage.title}</h3>
                  <p className="text-blue-200">{stage.description}</p>

                  {/* Progress Line */}
                  {index < 2 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute -right-4 top-1/2 w-8 h-0.5 bg-blue-500/30 
                               hidden md:block origin-left"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ... rest of the sections remain the same ... */}
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

  // Replace the current useEffect with this new scroll handler
  const handleSmoothScroll = (e) => {
    // Only handle links with hash
    if (e.target.hash) {
      e.preventDefault();
      const targetId = e.target.hash.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Optional: Update URL
        window.history.pushState(null, '', e.target.hash);
      }
    }
  };

  useEffect(() => {
    // Add click event listeners to all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* APL Journey Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-black/95" />
          {/* Subtle Floating Elements */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute w-2 h-2 bg-blue-400/10 rounded-full"
              animate={{
                y: [-20, 20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">APL Journey</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              From humble beginnings to industry leadership: Our 37-year evolution in packaging excellence
            </p>
          </motion.div>

          {/* Timeline Structure */}
          <div className="relative">
            {/* Central Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 
                       transform -translate-x-1/2 origin-top"
            />

            {/* Timeline Events */}
            <div className="relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center mb-20 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content Side */}
                  <div className="w-1/2 px-10">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      {/* Content Card */}
                      <div className="relative bg-gradient-to-br from-blue-900/40 to-indigo-900/40 
                                   backdrop-blur-md rounded-2xl p-8 border border-blue-500/20">
                        {/* Year Badge */}
                        <div className="absolute -top-4 bg-gradient-to-r from-blue-500 to-blue-600 
                                     px-4 py-1 rounded-full text-white font-bold">
                          {milestone.year}
                        </div>

                        {/* Icon */}
                        <div className="mb-4 w-12 h-12 bg-blue-500/20 rounded-xl 
                                     flex items-center justify-center">
                          <milestone.icon className="text-2xl text-blue-300" />
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-white mb-3 
                                   group-hover:text-blue-400 transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-blue-200">{milestone.description}</p>

                        {/* Animated Lines */}
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                              animate={{
                                x: ['-100%', '100%'],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.4,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                              style={{
                                top: `${30 + i * 30}%`,
                                width: '100%',
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Hover Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 
                                   rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative w-6 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="absolute left-1 transform -translate-x-1/2"
                    >
                      <div className="relative w-6 h-6">
                        {/* Outer Ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                        />
                        {/* Inner Ring */}
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-1 rounded-full border-2 border-blue-400/20"
                        />
                        {/* Center Point */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 
                                     rounded-full shadow-lg shadow-blue-500/50" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Side */}
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity Section */}
      <CapacitySection />

      {/* Brand Value Section - With Progress Animation */}
      <section className="py-20 relative overflow-hidden">
        {/* Background remains the same */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-blue-900/30 to-gray-900/50" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Header remains the same */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              APL Transforming Packaging into Powerful Brand Assets
            </h2>
          </motion.div>

          {/* Updated Grid with Progress Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandValueProps.map((prop, index) => (
              <div
                key={prop.title}
                className="opacity-0 translate-y-4 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="group h-full bg-gradient-to-br from-white/5 to-white/10 
                               backdrop-blur-sm rounded-2xl p-8 border border-white/10
                               transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 
                                rounded-xl flex items-center justify-center mb-6
                                transition-transform duration-300 group-hover:scale-110">
                    <prop.icon className="text-2xl text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 
                               transition-colors duration-300 group-hover:text-blue-400">
                    {prop.title}
                  </h3>
                  <p className="text-blue-200 mb-6 
                               transition-colors duration-300 group-hover:text-blue-100">
                    {prop.description}
                  </p>
                  
                  {/* Stats Box with Progress Animation */}
                  <div className="bg-white/5 rounded-xl p-4 relative overflow-hidden
                               transition-all duration-300 group-hover:bg-white/10">
                    {/* Progress Bar Background */}
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: prop.stats.replace('%', '') + "%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute inset-0 bg-blue-500/10"
                      style={{
                        originX: 0
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-blue-400 flex items-baseline gap-1">
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          {prop.stats}
                        </motion.span>
                      </div>
                      <div className="text-sm text-blue-300">
                        {prop.statsLabel}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
                                 from-blue-500/50 via-blue-400/50 to-transparent" />
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b 
                                 from-blue-500/50 via-blue-400/50 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Action Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/10 to-green-900/20" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Content Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  APL Contribution to Climate Action
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6" />
                <p className="text-xl text-green-200">
                  AG is making significant strides in climate action since last 37 years through
                  its circular economy practice to reduce environmental impact.
                </p>
              </motion.div>

              {/* Initiatives as Tree Leaves */}
              <div className="relative">
                {climateInitiatives.map((initiative, index) => (
                  <motion.div
                    key={initiative.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative mb-8 last:mb-0"
                  >
                    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-1 
                                 before:h-full before:bg-gradient-to-b before:from-green-500 before:to-green-600 
                                 before:rounded-full">
                      <div className="absolute left-0 top-0 w-8 h-8 -translate-x-3 bg-green-500/20 
                                   rounded-full flex items-center justify-center backdrop-blur-sm 
                                   group-hover:bg-green-500/30 transition-all duration-300">
                        <initiative.icon className="text-xl text-green-400" />
                      </div>
                      
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 
                                   border border-green-500/10 hover:bg-white/10 
                                   transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 
                                     transition-colors duration-300">
                          {initiative.title}
                        </h3>
                        <p className="text-green-200 mb-4">{initiative.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="text-2xl font-bold text-green-400">{initiative.stats.value}</div>
                            <div className="text-sm text-green-300">{initiative.stats.label}</div>
                          </div>
                          
                          {initiative.link && (
                            <Link 
                              href={initiative.link}
                              className="text-green-400 hover:text-green-300 transition-colors duration-300"
                            >
                              {initiative.linkText} →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Icon Tree */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[800px] h-[900px]">
                  {/* Tree Structure */}
                  <div className="relative w-full h-full">
                    {/* Ground Base with Grass - Reduced width */}
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute bottom-0 w-[500px] h-[80px] mx-auto"
                      style={{ 
                        left: '15%',
                        transform: 'translateX(-50%)',
                        transformOrigin: 'center'
                      }}
                    >
                      {/* Ground Shadow */}
                      <div className="absolute bottom-0 w-full h-full bg-green-900/30 rounded-full blur-xl" />
                      
                      {/* Ground Surface */}
                      <div className="absolute bottom-0 w-full h-[40px]
                                     bg-gradient-to-b from-green-800 to-green-900
                                     rounded-full" />

                      {/* Decorative Grass */}
                      {[...Array(24)].map((_, i) => (
                        <motion.div
                          key={`grass-${i}`}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            delay: 1 + (i * 0.05),
                            duration: 0.5,
                            ease: "easeOut"
                          }}
                          className="absolute bottom-[35px] w-4 origin-bottom"
                          style={{
                            left: `${(i * 4.2)}%`,  // Adjusted spacing
                            height: `${12 + Math.sin(i) * 8}px`,
                            transform: `rotate(${-10 + Math.sin(i * 2) * 20}deg)`,
                          }}
                        >
                          <div className="w-full h-full bg-gradient-to-t from-green-700 to-green-500 rounded-full" />
                        </motion.div>
                      ))}

                      {/* Second Layer of Grass (for depth) */}
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={`grass-back-${i}`}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            delay: 0.8 + (i * 0.05),
                            duration: 0.5,
                            ease: "easeOut"
                          }}
                          className="absolute bottom-[32px] w-4 origin-bottom"
                          style={{
                            left: `${5 + (i * 4.8)}%`,  // Adjusted spacing
                            height: `${10 + Math.cos(i) * 6}px`,
                            transform: `rotate(${Math.cos(i * 2) * 15}deg)`,
                          }}
                        >
                          <div className="w-full h-full bg-gradient-to-t from-green-800 to-green-600 rounded-full" />
                        </motion.div>
                      ))}

                      {/* Subtle Ground Texture */}
                      <div className="absolute bottom-0 left-0 right-0 h-[40px] overflow-hidden">
                        {[...Array(30)].map((_, i) => (
                          <div
                            key={`texture-${i}`}
                            className="absolute w-[2px] bg-green-700/30 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              height: `${4 + Math.random() * 6}px`,
                              bottom: '0',
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Trunk */}
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 1 }}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-[800px] 
                               bg-gradient-to-t from-green-800 to-green-700 rounded-lg z-10"
                      style={{ transformOrigin: 'bottom' }}
                    />

                    {/* Branches with Single Icons - Reduced lengths */}
                    {[
                      // [side, height%, icon, branchLength]
                      ['right', 85, FaLeaf, 120],      // Reduced from 160 to 120
                      ['left', 75, FaSun, 120],        // Reduced from 160 to 120
                      ['right', 65, FaWind, 140],      // Reduced from 180 to 140
                      ['left', 55, FaWater, 140],      // Reduced from 180 to 140
                      ['right', 45, FaRecycle, 160],   // Reduced from 200 to 160
                      ['left', 35, FaSolarPanel, 160], // Reduced from 200 to 160
                      ['right', 25, FaTree, 160],      // Reduced from 200 to 160
                      ['left', 15, FaGlobeAmericas, 160], // Reduced from 200 to 160
                    ].map((branchConfig, index) => {
                      const [side, heightPosition, Icon, branchLength] = branchConfig;
                      const isRight = side === 'right';
                      
                      return (
                        <motion.div
                          key={`branch-${index}`}
                          className="absolute"
                          style={{ 
                            bottom: `${heightPosition}%`,
                            left: isRight ? '50%' : undefined,
                            right: isRight ? undefined : '50%',
                            width: '200px',
                            zIndex: 20,
                          }}
                        >
                          {/* Branch Line */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ 
                              delay: 1 + (index * 0.2), 
                              duration: 0.5,
                              ease: "easeOut"
                            }}
                            className="absolute top-1/2 w-full h-1.5
                                     bg-gradient-to-r from-green-700 to-green-600 rounded-full"
                            style={{ 
                              transformOrigin: isRight ? 'left' : 'right',
                              transform: `rotate(${isRight ? 25 : -25}deg)`,
                            }}
                          />

                          {/* Icon Container - Adjusted positioning closer to branch */}
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            animate={{ 
                              rotate: [0, 3, 0, -3, 0],
                              y: [0, -2, 0, -2, 0]
                            }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ 
                              scale: { delay: 1.3 + (index * 0.2), duration: 0.3 },
                              rotate: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.2
                              },
                              y: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.2
                              }
                            }}
                            className="absolute top-1/2 transform -translate-y-1/2 group"
                            style={{ 
                              [isRight ? 'left' : 'right']: '85%',
                              transformOrigin: 'top center',
                            }}
                          >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl 
                                          group-hover:bg-green-400/30 transition-all duration-300" />
                            
                            {/* Icon Background */}
                            <div className="relative w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 
                                          rounded-full flex items-center justify-center border border-green-500/30
                                          shadow-lg group-hover:from-green-500 group-hover:to-green-600 
                                          transition-all duration-300">
                              <Icon className="text-2xl text-green-100" />
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}

                    {/* Ambient Particles */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        animate={{
                          y: [-20, -40, -20],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="absolute"
                        style={{
                          left: `${20 + (i * 3)}%`,
                          bottom: `${40 + (i * 2)}%`,
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-green-400/20 rounded-full blur-sm" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">APL Value Proposition</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6" />
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Delivering excellence through innovation, sustainability, and cutting-edge technology
              </p>
            </motion.div>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div 
                key={prop.title}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm 
                              rounded-2xl p-8 h-full border border-white/10 transition-all duration-300
                              hover:border-blue-500/50 hover:-translate-y-1">
                  {/* Decorative Corner Lines */}
                  <div className="absolute top-0 left-0 w-16 h-16">
                    <div className="absolute top-0 left-0 w-2 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-t-full" />
                    <div className="absolute top-0 left-0 h-2 w-8 bg-gradient-to-r from-blue-500 to-transparent rounded-l-full" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 transform rotate-180">
                    <div className="absolute top-0 left-0 w-2 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-t-full" />
                    <div className="absolute top-0 left-0 h-2 w-8 bg-gradient-to-r from-blue-500 to-transparent rounded-l-full" />
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md transform group-hover:scale-110 transition-transform duration-300" />
                    <div className={`w-16 h-16 ${prop.bgGradient} rounded-xl flex items-center justify-center 
                                  transform transition-transform duration-300 group-hover:scale-105 relative z-10`}>
                      <prop.icon className="text-2xl text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {prop.title}
                  </h3>
                  <p className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                    {prop.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: FaInfinity, label: "Continuous Innovation", value: "24/7" },
              { icon: FaChartLine, label: "Growth Rate", value: "35%" },
              { icon: FaCogs, label: "Automation Level", value: "90%" },
              { icon: FaGlobeAmericas, label: "Global Presence", value: "15+" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10
                         hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center
                                group-hover:bg-blue-500/30 transition-all duration-300">
                    <stat.icon className="text-xl text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-blue-200">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
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
        {/* Single subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-green-900/20" />

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">APL Purpose</h2>
            <p className="text-xl text-blue-200">Driving innovation and sustainability in packaging solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="relative group transition-transform duration-300 ease-out hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-600/20 to-blue-700/20 
                           rounded-2xl blur-xl opacity-75 transition-all duration-300" />
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 
                           relative transition-all duration-300">
                {/* Static decorative icon */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/30 rounded-full 
                             flex items-center justify-center backdrop-blur-sm">
                  <FaBullseye className="text-2xl text-blue-300" />
                </div>

                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 
                                rounded-2xl flex items-center justify-center shadow-xl
                                transition-transform duration-300 group-hover:scale-105">
                    <FaFlag className="text-4xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white ml-6">Mission</h3>
                </div>

                {/* Content */}
                <p className="text-xl leading-relaxed text-blue-200 transition-colors duration-300
                             group-hover:text-blue-100">
                  To provide innovative packaging solutions that meet the highest standards of quality, 
                  sustainability, and customer service while contributing positively to our communities.
                </p>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400/40" />
                  <div className="w-2 h-2 rounded-full bg-blue-400/60" />
                  <div className="w-2 h-2 rounded-full bg-blue-400/80" />
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative group transition-transform duration-300 ease-out hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-600/20 to-green-700/20 
                           rounded-2xl blur-xl opacity-75 transition-all duration-300" />
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 
                           relative transition-all duration-300">
                {/* Static decorative icon */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-green-500/30 rounded-full 
                             flex items-center justify-center backdrop-blur-sm">
                  <FaEye className="text-2xl text-green-300" />
                </div>

                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 
                                rounded-2xl flex items-center justify-center shadow-xl
                                transition-transform duration-300 group-hover:scale-105">
                    <FaBinoculars className="text-4xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white ml-6">Vision</h3>
                </div>

                {/* Content */}
                <p className="text-xl leading-relaxed text-blue-200 transition-colors duration-300
                             group-hover:text-blue-100">
                  To be the global leader in sustainable packaging solutions through innovation, 
                  technology, and long-term partnerships that foster environmental stewardship.
                </p>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400/40" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  <div className="w-2 h-2 rounded-full bg-green-400/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... rest of the sections remain the same ... */}
    </main>
  );
}

