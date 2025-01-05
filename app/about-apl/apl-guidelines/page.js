"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import {
  FaBalanceScale,
  FaShieldAlt,
  FaBuilding,
  FaChartLine,
  FaGlobe,
  FaLock,
  FaBan,
  FaLeaf,
  FaUserSecret,
  FaHandshake,
  FaExclamationTriangle,
  FaFileContract,
  FaUserShield,
  FaClipboardList,
  FaRegularBuilding,
  FaDollarSign,
  FaGavel,
  FaHeadset
} from "react-icons/fa";

export default function APLGuidelines() {
  const policyCategories = [
    {
      title: "Conflicts of Interest & Corporate Opportunities",
      icon: FaBalanceScale,
      description: "Guidelines for managing conflicts and protecting company interests",
      key_points: [
        "Avoiding personal conflicts with company interests",
        "Disclosure requirements for potential conflicts",
        "Proper handling of corporate opportunities",
        "Restrictions on competing with APL"
      ]
    },
    {
      title: "Protection of Company Assets",
      icon: FaShieldAlt,
      description: "Safeguarding physical and intellectual property",
      key_points: [
        "Physical property protection",
        "Intellectual property safeguards",
        "Digital resource usage guidelines",
        "Authorized use requirements"
      ]
    },
    {
      title: "Securities Trading Policy",
      icon: FaChartLine,
      description: "Preventing insider trading and maintaining market integrity",
      key_points: [
        "Insider trading prohibitions",
        "Pre-clearance requirements",
        "Restricted trading periods",
        "Reporting obligations"
      ]
    },
    {
      title: "Dealings Abroad",
      icon: FaGlobe,
      description: "International business conduct and compliance",
      key_points: [
        "Sanctions compliance",
        "Antiboycott regulations",
        "Export control compliance",
        "International trade guidelines"
      ]
    },
    {
      title: "Anti-Corruption Policy",
      icon: FaBan,
      description: "Preventing bribery and maintaining ethical business practices",
      key_points: [
        "Prohibited practices",
        "Gift and entertainment guidelines",
        "Third-party due diligence",
        "Reporting requirements"
      ]
    },
    {
      title: "Antitrust and Competition",
      icon: FaHandshake,
      description: "Ensuring fair competition and market practices",
      key_points: [
        "Prohibited agreements",
        "Market conduct guidelines",
        "Competitor interaction rules",
        "Compliance requirements"
      ]
    },
    {
      title: "Environment, Health & Safety",
      icon: FaLeaf,
      description: "Maintaining workplace safety and environmental responsibility",
      key_points: [
        "Safety protocols",
        "Environmental guidelines",
        "Health standards",
        "Reporting procedures"
      ]
    },
    {
      title: "Trade Secrets & Confidentiality",
      icon: FaUserSecret,
      description: "Protecting sensitive business information",
      key_points: [
        "Information classification",
        "Handling procedures",
        "Disclosure restrictions",
        "Post-employment obligations"
      ]
    }
  ];

  const complianceFramework = {
    reporting: {
      title: "Reporting Violations",
      description: "Channels and procedures for reporting concerns",
      points: [
        "Confidential reporting hotline",
        "Non-retaliation policy",
        "Investigation procedures",
        "Feedback mechanisms"
      ]
    },
    enforcement: {
      title: "Policy Enforcement",
      description: "Implementation and consequences of violations",
      points: [
        "Disciplinary actions",
        "Investigation process",
        "Appeal procedures",
        "Documentation requirements"
      ]
    }
  };

  return (
    <main className="bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen">
      <Navbar />
      
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
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Code of Business Conduct and Ethics
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our commitment to maintaining the highest standards of ethics, honesty, and integrity in all aspects of operations
            </p>
          </motion.div>

          {/* Policy Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {policyCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 
                         hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="text-4xl text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-blue-300">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.key_points.map((point, i) => (
                    <li key={i} className="flex items-center text-blue-200">
                      <FaClipboardList className="text-purple-400 mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Compliance Framework */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(complianceFramework).map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 
                         hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-blue-300 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-center text-blue-200">
                      <FaExclamationTriangle className="text-purple-400 mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 