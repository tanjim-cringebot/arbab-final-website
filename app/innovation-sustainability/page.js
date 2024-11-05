'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaLeaf, FaRecycle, FaSolarPanel, FaWater, FaTree, FaChartLine, FaLightbulb, FaIndustry, FaArrowLeft, FaRocket, FaGlobeAmericas } from 'react-icons/fa'

const ModernCard = ({ children, className = "" }) => (
  <motion.div
    className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-5xl md:text-7xl font-bold mb-16 text-blue-900 ${className}`}
  >
    {children}
  </motion.h2>
);

const AnimatedNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.substring(0, value.length - 1));
    const timer = setInterval(() => {
      start += end / duration;
      setCount(Math.floor(start));
      if (start >= end) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{value.slice(-1)}</span>;
};

const InnovationFeature = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex items-start space-x-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex-shrink-0">
      <Icon className="text-4xl text-blue-500" />
    </div>
    <div>
      <h4 className="text-xl font-semibold mb-2 text-blue-800">{title}</h4>
      <p className="text-blue-600">{description}</p>
    </div>
  </motion.div>
);

export default function InnovationSustainability() {
  const controls = useAnimation();

  const [sustainabilityMetrics, setSustainabilityMetrics] = useState({
    packagingType: 'plastic',
    monthlyVolume: 1000,
    recycledContent: 0,
    optimizedWeight: false,
  });

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
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <Link href="/" className="text-blue-600 flex items-center mb-16 hover:text-blue-800 transition duration-300">
          <FaArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900"
        >
          Innovation & Sustainability
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-40 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        />

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
          
          <motion.div
            animate={controls}
            className="absolute -bottom-16 right-0 text-9xl text-blue-200 opacity-20"
          >
            <FaRocket />
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

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"
              />

              <div className="flex flex-wrap justify-center items-center gap-16 relative z-10">
                {[
                  { icon: FaLeaf, value: '50%', label: 'Carbon Emission Reduction' },
                  { icon: FaRecycle, value: '75%', label: 'Recycled Materials Used' },
                  { icon: FaSolarPanel, value: '60%', label: 'Renewable Energy Usage' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={controls}
                      className="mb-4"
                    >
                      <stat.icon className="text-6xl text-blue-500 mx-auto" />
                    </motion.div>
                    <motion.div
                      className="relative"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    >
                      <span className="text-6xl font-bold text-blue-700">
                        <AnimatedNumber value={stat.value} />
                      </span>
                    </motion.div>
                    <p className="text-xl text-blue-600 mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={controls}
            className="absolute -bottom-16 left-0 text-9xl text-blue-200 opacity-20"
          >
            <FaGlobeAmericas />
          </motion.div>
        </section>

        <section className="mb-32 relative">
          <SectionTitle>Innovative Solutions</SectionTitle>
          <div className="relative">
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
                <motion.div 
                  className="w-full h-64 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/eco.jpg"
                    alt="Eco-Friendly Materials"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
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
                <motion.div 
                  className="w-full h-64 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/smart.jpg"
                    alt="Smart Packaging Solutions"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            animate={controls}
            className="absolute -bottom-16 right-0 text-9xl text-blue-200 opacity-20"
          >
            <FaRocket />
          </motion.div>
        </section>

        <section className="mb-32 relative">
          <SectionTitle>Sustainability Calculator</SectionTitle>
          
          <ModernCard className="relative bg-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-blue-800 mb-4">
                Calculate Your Environmental Impact
              </h3>
              <p className="text-xl text-blue-600">
                See how your packaging choices affect the environment and discover ways to reduce your carbon footprint
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Input Controls */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 bg-blue-50/50 p-8 rounded-2xl"
              >
                <div>
                  <label className="block text-blue-800 font-semibold mb-2">
                    Packaging Material
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
              </motion.div>

              {/* Results Display */}
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

                <motion.div
                  className="mt-8 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300 text-lg font-semibold"
                  >
                    <span>Get Detailed Report</span>
                    <FaChartLine className="ml-2" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </ModernCard>
        </section>

        <section className="mb-32 relative">
          <SectionTitle>Join Our Blue Journey</SectionTitle>
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
        </section>
      </div>
    </main>
  )
}
