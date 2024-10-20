'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaLeaf, FaRecycle, FaSolarPanel, FaWater, FaTree, FaChartLine, FaLightbulb, FaIndustry, FaArrowLeft, FaRocket, FaGlobeAmericas } from 'react-icons/fa'

const ModernCard = ({ children, className = "" }) => (
  <motion.div
    className={`bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-3xl p-8 shadow-xl transition-all duration-300 ${className}`}
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
                Innovation is at the heart of APL's commitment to sustainability. Through strategic initiatives, we 
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
                Here's how we're making a difference:
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
