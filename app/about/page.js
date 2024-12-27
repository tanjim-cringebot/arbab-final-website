"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { FaLeaf, FaRecycle, FaWater, FaClipboardCheck, FaShieldAlt, FaHandHoldingHeart, FaHistory, FaIndustry, FaRobot } from "react-icons/fa"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="About Hero Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-black/95" />
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6
                   bg-clip-text text-transparent bg-gradient-to-r 
                   from-white via-blue-100 to-white"
        >
          Pioneers Since 1988
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-blue-100/80 max-w-2xl mx-auto"
        >
          Leading the way in innovative packaging solutions for over three decades
        </motion.p>
      </div>
    </section>
  );
};

const MilestonesSection = () => {
  const milestones = [
    {
      year: 1988,
      title: "Launch of Arbab Group",
      description: "Focused on locally made world class packaging material.",
      icon: FaIndustry,
      achieved: true
    },
    {
      year: 1997,
      title: "Nationwide Expansion",
      description: "Achieved nationwide expansion in Bangladesh.",
      icon: FaIndustry,
      achieved: true
    },
    {
      year: 2010,
      title: "Digital Integration",
      description: "Digitally integrated manufacturing for increased efficiency and precision.",
      icon: FaRobot,
      achieved: true
    },
    {
      year: 2015,
      title: "Biodegradable Solutions",
      description: "Created biodegradable packaging solutions to minimize environmental impact.",
      icon: FaLeaf,
      achieved: true
    },
    {
      year: 2020,
      title: "Recycling Hub",
      description: "Established an advanced recycling hub to champion the circular economy.",
      icon: FaRecycle,
      achieved: true
    },
    {
      year: 2024,
      title: "Circular Economy",
      description: "Initiated full implementation of circular economy principles.",
      icon: FaRecycle,
      achieved: true
    },
    // Future Milestones
    {
      year: 2027,
      title: "AI-Driven Solutions",
      description: "Launch AI-driven smart packaging solutions, transforming efficiency and tracking.",
      icon: FaRobot,
      achieved: false
    },
    {
      year: 2030,
      title: "Carbon Neutrality",
      description: "Achieve carbon neutrality, aligning with global climate initiatives.",
      icon: FaLeaf,
      achieved: false
    },
    {
      year: 2040,
      title: "Zero-Waste Manufacturing",
      description: "Realize zero-waste manufacturing processes to eliminate production waste.",
      icon: FaRecycle,
      achieved: false
    },
    {
      year: 2050,
      title: "Sustainable Ecosystem",
      description: "Create a fully sustainable packaging ecosystem, leading the industry in eco-friendly innovation.",
      icon: FaLeaf,
      achieved: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/90 to-black/95">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent 
                        bg-gradient-to-r from-white via-blue-200 to-white">
            Milestones Achieved So Far
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 
                         bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500/30" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md
                                border border-white/[0.05] shadow-[0_8px_16px_rgba(0,0,0,0.2)]
                                hover:bg-white/[0.05] transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                                    ${milestone.achieved 
                                      ? "bg-gradient-to-br from-blue-500 to-blue-600"
                                      : "bg-gradient-to-br from-gray-600 to-gray-700"}`}>
                        <milestone.icon className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                        <p className="text-blue-300">{milestone.year}</p>
                      </div>
                    </div>
                    <p className="text-white/70">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 
                               rounded-full bg-blue-500 border-4 border-gray-900" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SustainabilitySection = () => {
  const sustainabilityItems = [
    {
      title: "Safety Training Programs and Practices",
      icon: FaShieldAlt,
      details: [
        "Overview of safety training initiatives and policies",
        "Details of training modules, frequency, and targeted personnel",
        "Records of any measurable reduction in incidents or accidents"
      ]
    },
    {
      title: "Environmental Data Reports",
      icon: FaRecycle,
      details: [
        "Water usage reports (annual and historical trends)",
        "Air quality monitoring data and improvement measures",
        "Waste management and recycling initiatives"
      ]
    },
    {
      title: "LEED Certification",
      icon: FaLeaf,
      details: [
        "Documentation on LEED certification scope",
        "Certification levels achieved",
        "Information on other sustainability certifications"
      ]
    },
    {
      title: "Water Management Systems",
      icon: FaWater,
      details: [
        "Technical details of water pump usage",
        "Water conservation practices",
        "Water reuse initiatives"
      ]
    },
    {
      title: "Environmental Audits",
      icon: FaClipboardCheck,
      details: [
        "Recent environmental audit results",
        "Corrective measures implementation",
        "Compliance records and audit frequency"
      ]
    },
    {
      title: "Sustainability Policies",
      icon: FaLeaf,
      details: [
        "Company-wide sustainability policies",
        "Environmental guidelines",
        "Implementation frameworks"
      ]
    },
    {
      title: "ESG Initiatives",
      icon: FaHandHoldingHeart,
      details: [
        "Community outreach programs",
        "Resource efficiency measures",
        "Sustainability partnerships"
      ]
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-blue-200 via-white to-blue-200 mb-6">
            Innovation Towards Sustainability
          </h2>
          <p className="text-lg text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Following our commitment to Environmental, Health, and Safety (EHS) practices, 
            we maintain comprehensive documentation of our sustainable initiatives and their impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sustainabilityItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl 
                           bg-gradient-to-br from-white/[0.05] to-transparent
                           border border-white/[0.05] shadow-[0_8px_16px_rgba(0,0,0,0.2)]
                           backdrop-blur-sm
                           hover:bg-white/[0.08] transition-all duration-300 h-full">
                {/* Enhanced Gradient Orb */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full
                             bg-gradient-to-br from-blue-500/30 to-blue-300/30 blur-2xl
                             opacity-20 group-hover:opacity-40 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl 
                                bg-gradient-to-br from-blue-400 to-blue-600
                                flex items-center justify-center
                                shadow-lg shadow-blue-500/20">
                      <item.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-white 
                               bg-gradient-to-r from-white via-blue-100 to-white
                               bg-clip-text text-transparent">{item.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} 
                          className="flex items-start gap-3 text-blue-100/70 group-hover:text-blue-100/90
                                   transition-colors duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 
                                      group-hover:bg-blue-300 transition-colors duration-300" />
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Highlight */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px]
                             bg-gradient-to-r from-transparent via-blue-400/50 to-transparent
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <main>
      <HeroSection />
      <MilestonesSection />
      {/* <VisionSection /> */}
      {/* <GroupStructureSection /> */}
      <SustainabilitySection />
      {/* <TeamSection /> */}
      {/* <ContactSection /> */}
    </main>
  );
};

export default AboutPage; 