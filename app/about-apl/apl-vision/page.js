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
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              APL 20/50: Towards Sustainability
            </h1>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              As a leading Paper Converting & Flexible Packaging material manufacturer in Bangladesh, 
              APL is committed to pioneering a new era of packaging that prioritizes sustainability, 
              innovation, and responsibility through its &quot;APL 20-50: Towards Sustainability&quot; program.
            </p>
          </motion.div>

          {/* Strategic Pillars */}
          {strategicPillars.map((pillar, index) => (
            <div key={pillar.title} className="mb-32">
              <div className="flex items-center justify-center mb-12">
                <pillar.icon className="text-4xl text-green-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">{index + 1}. {pillar.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillar.goals.map((goal, goalIndex) => (
                  <motion.div
                    key={goal.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: goalIndex * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                             hover:bg-white/10 transition-all duration-300"
                  >
                    <goal.icon className="text-3xl text-green-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{goal.title}</h3>
                    <p className="text-blue-200">{goal.target}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Achievements Section */}
          <div className="mt-32">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Achievements to Date</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.description}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 
                           hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <achievement.icon className="text-4xl text-green-400 mb-4 mx-auto" />
                  <div className="text-4xl font-bold text-green-400 mb-4">{achievement.metric}</div>
                  <p className="text-blue-200">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 