"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaRecycle, FaLeaf, FaLightbulb, FaWater, FaChartLine, FaRocket, FaGlobeAmericas, FaSolarPanel, FaTree, FaIndustry } from 'react-icons/fa';

import ecoFriendlyMaterials from '../../public/images/eco.jpg';
import smartPackagingSolutions from '../../public/images/smart.jpg';

const ModernCard = ({ children, className = "" }) => (
  <motion.div
    className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 0, 255, 0.1)" }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-4xl md:text-5xl font-bold mb-16 text-blue-900 ${className}`}
  >
    {children}
  </motion.h2>
);

const SisterConcern = ({ logo, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="relative w-32 h-32 mb-6"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1 }}
    >
      <Image src={logo} alt={title} layout="fill" objectFit="contain" />
    </motion.div>
    <h3 className="text-2xl font-semibold mb-4 text-blue-700">{title}</h3>
    <p className="text-blue-600 max-w-sm">{description}</p>
  </motion.div>
);

export default function AboutAG() {
  const [sustainabilityMetrics, setSustainabilityMetrics] = useState({
    packagingType: 'plastic',
    monthlyVolume: 1000,
    recycledContent: 0,
    optimizedWeight: false,
  });

  const controls = useAnimation();

  const calculateEnvironmentalImpact = () => {
    const baseEmission = {
      plastic: 2.5,
      biodegradable: 0.8,
      paper: 1.2
    }[sustainabilityMetrics.packagingType];

    const volumeImpact = sustainabilityMetrics.monthlyVolume * baseEmission;
    const recyclingReduction = (sustainabilityMetrics.recycledContent / 100) * 0.6;
    const weightReduction = sustainabilityMetrics.optimizedWeight ? 0.2 : 0;
    
    const totalReduction = recyclingReduction + weightReduction;
    const finalImpact = volumeImpact * (1 - totalReduction);

    return {
      carbonSaved: (volumeImpact - finalImpact).toFixed(1),
      treesEquivalent: Math.round((volumeImpact - finalImpact) * 0.12),
      waterSaved: Math.round((volumeImpact - finalImpact) * 1000),
    };
  };

  const SustainabilityCalculator = () => (
    <ModernCard className="relative bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div>
          <label className="block text-blue-800 font-semibold mb-2">
            Packaging Material Type
          </label>
          <select
            value={sustainabilityMetrics.packagingType}
            onChange={(e) => setSustainabilityMetrics(prev => ({
              ...prev,
              packagingType: e.target.value
            }))}
            className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="plastic">Traditional Plastic</option>
            <option value="biodegradable">Biodegradable Materials</option>
            <option value="paper">Paper-based Solutions</option>
          </select>
        </div>

        <div>
          <label className="block text-blue-800 font-semibold mb-2">
            Monthly Production Volume (units)
          </label>
          <input
            type="number"
            min="0"
            value={sustainabilityMetrics.monthlyVolume}
            onChange={(e) => setSustainabilityMetrics(prev => ({
              ...prev,
              monthlyVolume: parseInt(e.target.value) || 0
            }))}
            className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-blue-800 font-semibold mb-2">
            Recycled Content (%)
          </label>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="range"
              min="0"
              max="100"
              value={sustainabilityMetrics.recycledContent}
              onChange={(e) => setSustainabilityMetrics(prev => ({
                ...prev,
                recycledContent: parseInt(e.target.value)
              }))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
              {sustainabilityMetrics.recycledContent}%
            </span>
          </motion.div>
        </div>

        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={sustainabilityMetrics.optimizedWeight}
              onChange={(e) => setSustainabilityMetrics(prev => ({
                ...prev,
                optimizedWeight: e.target.checked
              }))}
              className="w-5 h-5 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
            />
            <span className="text-blue-800 font-semibold">Weight Optimized Design</span>
          </label>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100"
        >
          <h4 className="text-2xl font-bold text-blue-800 mb-8">Environmental Impact</h4>
          
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-blue-50"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-50 p-3 rounded-full">
                  <FaLeaf className="text-3xl text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600">Carbon Footprint Reduction</p>
                  <p className="text-3xl font-bold text-blue-800">
                    {calculateEnvironmentalImpact().carbonSaved} tons CO₂/year
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-blue-50"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-50 p-3 rounded-full">
                  <FaTree className="text-3xl text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600">Equivalent Trees Planted</p>
                  <p className="text-3xl font-bold text-blue-800">
                    {calculateEnvironmentalImpact().treesEquivalent} trees
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-blue-50"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <FaWater className="text-3xl text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600">Water Conservation</p>
                  <p className="text-3xl font-bold text-blue-800">
                    {calculateEnvironmentalImpact().waterSaved} liters/year
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </ModernCard>
  );

  const BlueJourney = () => (
    <ModernCard className="text-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <FaWater className="text-6xl text-blue-500 mb-6 mx-auto" />
      </motion.div>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-blue-700 mb-8 relative z-10"
      >
        Partner with us to make your packaging more sustainable and contribute to a cleaner future.
      </motion.p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 inline-block"
        >
          Get Started
        </Link>
      </motion.div>
    </ModernCard>
  );

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/" className="text-blue-600 flex items-center mb-16 hover:text-blue-800 transition duration-300">
          <FaArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>

        <section className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/arbabGroup.png" alt="Arbab Group Logo" width={300} height={300} className="mx-auto mb-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-8 text-blue-900"
          >
            About Arbab Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-blue-700 max-w-3xl mx-auto"
          >
            Arbab Group is a leading conglomerate in the packaging industry, known for its innovative solutions and commitment to sustainability. With a global presence and a diverse portfolio of companies, we strive to deliver excellence in every aspect of packaging and related services.
          </motion.p>
        </section>

        <section className="mb-32 relative">
          <SectionTitle>Our Sister Concerns</SectionTitle>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
            {[
              { logo: "/images/arbab_logo.png", title: "Arbab Pack Ltd.", description: "Leading manufacturer of flexible packaging solutions, serving diverse industries with innovative and sustainable products." },
              { logo: "/images/zkFoil.png", title: "ZK Foils Ltd", description: "Specializing in high-quality printing services for packaging materials, ensuring vibrant and durable designs." },
              { logo: "/images/zkPlastic.png", title: "ZK Plastics Ltd", description: "State-of-the-art warehousing and inventory management solutions, optimizing supply chain efficiency." },
              { logo: "/images/zkicl.png", title: "ZK Ink Ltd.", description: "Dedicated to sustainable practices, this division focuses on recycling and repurposing packaging materials." },
              { logo: "/images/zkHealth.png", title: "ZK Healthcare", description: "Providing end-to-end logistics solutions, ensuring timely and efficient delivery of products across the globe." },
              { logo: "/images/aant.png", title: "Aant Cosmetics Ltd", description: "Diverse manufacturing arm of the group, producing a wide range of industrial products and components." },
            ].map((concern, index) => (
              <motion.div
                key={concern.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <SisterConcern 
                  logo={concern.logo}
                  title={concern.title}
                  description={concern.description}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32 relative">
          <SectionTitle>Our Commitment</SectionTitle>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xl text-blue-700 mb-16 max-w-3xl mx-auto text-center"
            >
              <p>
                Innovation is at the heart of APL&apos;s commitment to sustainability. Through strategic initiatives, we 
                continuously evolve our processes and products to align with environmental goals.
              </p>
            </motion.div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <FaRecycle className="text-6xl text-blue-500 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">RePro-RP Initiative</h3>
                  <p className="text-blue-600">
                    A pioneering project that integrates recycled materials into our production, reducing our environmental footprint.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <FaLeaf className="text-6xl text-blue-500 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">Sustainability Achievements</h3>
                  <p className="text-blue-600">
                    We have significantly reduced our carbon emissions and waste output while increasing the use of renewable energy in our operations.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-32 relative">
          <SectionTitle>Our Impact</SectionTitle>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xl text-blue-700 mb-16 max-w-3xl mx-auto text-center"
            >
              <p>
                Our commitment to sustainability has led to significant improvements in our environmental footprint. 
                Here&apos;s how we&apos;re making a difference:
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className="mb-32 relative">
          <SectionTitle>Innovative Solutions</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <FaLeaf className="text-6xl text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Eco-Friendly Materials</h3>
              <p className="text-blue-600 mb-6">Our latest line of fully biodegradable packaging materials, designed to minimize environmental impact.</p>
              <Image src={ecoFriendlyMaterials} alt="Eco-Friendly Materials" width={300} height={300} className="mx-auto mt-6" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <FaLightbulb className="text-6xl text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Smart Packaging Solutions</h3>
              <p className="text-blue-600 mb-6">Integrating IoT and NFC technologies for interactive consumer experiences and improved supply chain management.</p>
              <Image src={smartPackagingSolutions} alt="Smart Packaging Solutions" width={300} height={300} className="mx-auto mt-6" />
            </motion.div>
          </div>
        </section>

        <section className="mb-32 relative">
          <SectionTitle>Sustainability Calculator</SectionTitle>
          <SustainabilityCalculator />
        </section>

        <section className="mb-32 relative">
          <SectionTitle>Join Our Blue Journey</SectionTitle>
          <BlueJourney />
        </section>

        <section className="mb-32">
          <ModernCard className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8">
              Be part of our growth story. Explore opportunities to collaborate with the Arbab Group.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-white text-blue-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center"
              >
                Connect With Us <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </ModernCard>
        </section>
      </div>
    </main>
  );
}
