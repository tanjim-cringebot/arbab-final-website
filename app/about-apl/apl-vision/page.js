"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBox } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import {
  FaLeaf,
  FaSun,
  FaRecycle,
  FaUsers,
  FaAward,
  FaChartLine,
  FaTint,
  FaIndustry,
  FaHandshake,
  FaShieldAlt,
  FaLightbulb,
  FaGlobe,
  FaTree,
  FaWater,
  FaUserTie,
  FaFlask,
  FaCertificate,
  FaCheckCircle,
  FaSeedling,
  FaChartBar
} from "react-icons/fa";

export default function APLVision() {
  const strategicPillars = [
    {
      title: "Climate Responsibility",
      icon: FaSun,
      goals: [
        {
          title: "Energy Efficiency",
          target: "30% reduction in energy consumption",
          icon: FaLightbulb
        },
        {
          title: "GHG Emissions",
          target: "40% reduction in Scope 1 & 2 emissions",
          icon: FaLeaf
        },
        {
          title: "Renewable Energy",
          target: "50% renewable energy by 2050",
          icon: FaSun
        },
        {
          title: "Air Quality",
          target: "Minimize VOC emissions",
          icon: FaGlobe
        }
      ]
    },
    {
      title: "Resource Efficiency",
      icon: FaTint,
      goals: [
        {
          title: "Water Conservation",
          target: "25% reduction in water usage",
          icon: FaWater
        },
        {
          title: "Wastewater Management",
          target: "100% compliance with standards",
          icon: FaTint
        },
        {
          title: "Employee Welfare",
          target: "Safe water and sanitation access",
          icon: FaUsers
        },
        {
          title: "Efficient Logistics",
          target: "Optimize transportation",
          icon: FaIndustry
        }
      ]
    },
    {
      title: "Circular Economy",
      icon: FaRecycle,
      goals: [
        {
          title: "Zero Waste",
          target: "Zero landfill waste by 2025",
          icon: FaRecycle
        },
        {
          title: "Lightweight Packaging",
          target: "15% weight reduction",
          icon: FaBox
        },
        {
          title: "Recycling Initiatives",
          target: "Increase recycled materials usage",
          icon: FaSeedling
        },
        {
          title: "Sustainable Materials",
          target: "90% eco-friendly sourcing",
          icon: FaLeaf
        }
      ]
    },
    {
      title: "Collaborative Growth",
      icon: FaHandshake,
      goals: [
        {
          title: "Employee Safety",
          target: "20% reduction in TRIR",
          icon: FaShieldAlt
        },
        {
          title: "Community Engagement",
          target: "Local sustainability partnerships",
          icon: FaUsers
        },
        {
          title: "Diversity & Inclusion",
          target: "Foster workplace diversity",
          icon: FaUserTie
        },
        {
          title: "Customer Collaboration",
          target: "Innovative solutions development",
          icon: FaHandshake
        }
      ]
    },
    {
      title: "Uncompromising Standards",
      icon: FaAward,
      goals: [
        {
          title: "Product Innovation",
          target: "50% R&D for eco-friendly solutions",
          icon: FaFlask
        },
        {
          title: "Safety Standards",
          target: "Global compliance",
          icon: FaShieldAlt
        },
        {
          title: "Ethical Sourcing",
          target: "100% supplier audits",
          icon: FaCertificate
        },
        {
          title: "Transparency",
          target: "Annual sustainability reporting",
          icon: FaChartBar
        }
      ]
    }
  ];

  const achievements = [
    {
      metric: "15%",
      description: "Reduction in energy consumption across facilities",
      icon: FaLightbulb
    },
    {
      metric: "8%",
      description: "Reduction in material usage through lightweight packaging",
      icon: FaRecycle
    },
    {
      metric: "20%",
      description: "Transition to renewable energy sources in 2025",
      icon: FaSun
    }
  ];

  return (
    <main className="bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen">
      <Navbar />
      
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
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
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[90px]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              APL 20/50: <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                Towards Sustainability
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Pioneering the future of sustainable packaging in Bangladesh through innovation, 
              responsibility, and environmental stewardship.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars - Redesigned */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          {strategicPillars.map((pillar, index) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-32"
            >
              <div className="flex flex-col items-center justify-center mb-16 relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute -z-10 w-24 h-24 bg-green-400/10 rounded-full blur-lg"
                />
                <pillar.icon className="text-5xl text-green-400 mb-6" />
                <h2 className="text-4xl font-bold text-white text-center">
                  <span className="text-green-400">{index + 1}.</span> {pillar.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pillar.goals.map((goal, goalIndex) => (
                  <motion.div
                    key={goal.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: goalIndex * 0.1 }}
                    className="group relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 
                             border border-white/10 hover:border-green-400/50 transition-all duration-300
                             hover:transform hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-blue-400/0 
                                  group-hover:from-green-400/10 group-hover:to-blue-400/10 rounded-2xl 
                                  transition-all duration-300" />
                    <goal.icon className="text-3xl text-green-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{goal.title}</h3>
                    <p className="text-blue-200 text-sm">{goal.target}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Achievements Section - Redesigned */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-32 relative"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white">
                Our Progress
                <span className="block text-lg text-blue-300 mt-2">Measurable Impact Towards Sustainability</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.description}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group bg-white/[0.03] backdrop-blur-xl rounded-2xl p-10 
                           border border-white/10 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/0 to-blue-400/0 
                                group-hover:from-green-400/20 group-hover:to-blue-400/20 rounded-2xl 
                                blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative">
                    <achievement.icon className="text-5xl text-green-400 mb-6 mx-auto" />
                    <div className="text-5xl font-bold text-transparent bg-clip-text 
                                  bg-gradient-to-r from-green-400 to-blue-400 mb-4">
                      {achievement.metric}
                    </div>
                    <p className="text-blue-200 text-lg">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 