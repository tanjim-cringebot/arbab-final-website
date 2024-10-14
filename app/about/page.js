'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { FaHistory, FaIndustry, FaEye, FaBullseye, FaLeaf, FaCog, FaUsers, FaQuoteLeft, FaAward, FaGlobeAmericas } from "react-icons/fa"
import arbab from "../images/arbab.gif"

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    className={`bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600 ${className}`}
  >
    {children}
  </motion.h2>
);

export default function About() {
  const [currentLeader, setCurrentLeader] = useState(0);

  const leaders = [
    {
      name: "John Doe",
      designation: "CEO",
      description: "With over 20 years of experience in the packaging industry, John leads our company with vision and innovation.",
      image: "/images/john-doe.jpg" // Replace with actual image path
    },
    {
      name: "Jane Smith",
      designation: "COO",
      description: "Jane's expertise in operations has been crucial in streamlining our processes and improving efficiency.",
      image: "/images/jane-smith.jpg" // Replace with actual image path
    },
    // ... other leaders
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLeader((prev) => (prev + 1) % leaders.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/" className="text-teal-400 flex items-center mb-16 hover:text-teal-300 transition duration-300">
          <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600"
        >
          About Arbab Pack Ltd
        </motion.h1>

        {/* Company Overview Section */}
        <section className="mb-24">
          <SectionTitle>Company Overview</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: FaHistory, title: "Our Story", content: "Founded in 1988, APL has grown from a small paper converting facility into a global leader in packaging solutions." },
              { icon: FaIndustry, title: "Corporate Profile", content: "APL is committed to delivering world-class packaging solutions that prioritize quality, sustainability, and customer satisfaction." },
              { icon: FaEye, title: "Vision", content: "To become the global leader in sustainable packaging solutions through innovation, technology, and long-term partnerships." },
              { icon: FaBullseye, title: "Mission", content: "To provide innovative packaging solutions that meet the highest standards of quality, sustainability, and customer service." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col">
                  <item.icon className="text-5xl text-teal-400 mb-6" />
                  <h2 className="text-3xl font-semibold mb-4 text-emerald-300">{item.title}</h2>
                  <p className="text-teal-200 text-lg">{item.content}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-24">
          <SectionTitle>Our Journey</SectionTitle>
          <div className="relative">
            {[
              { year: 1988, event: "Founded as a small paper converting facility" },
              { year: 1995, event: "Expanded into flexible packaging solutions" },
              { year: 2005, event: "Launched sustainable packaging line" },
              { year: 2015, event: "Achieved global presence in 50+ countries" },
              { year: 2023, event: "Pioneered AI-driven packaging optimization" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <GlassCard>
                    <h3 className="text-2xl font-semibold text-emerald-300 mb-2">{item.year}</h3>
                    <p className="text-teal-200">{item.event}</p>
                  </GlassCard>
                </div>
                <div className="w-4 h-4 bg-teal-400 rounded-full z-10"></div>
                {index < 4 && <div className="absolute h-full w-1 bg-teal-400 left-1/2 transform -translate-x-1/2 z-0"></div>}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Animated GIF section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <SectionTitle>Our Process</SectionTitle>
          <GlassCard className="w-full max-w-4xl mx-auto">
            <Image
              src={arbab}
              alt="Arbab Pack Ltd Process"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </GlassCard>
        </motion.section>

        {/* Meet Our Leaders Section */}
        <section className="mb-24">
          <SectionTitle>Meet Our Leaders</SectionTitle>
          <GlassCard>
            <div className="flex flex-col md:flex-row items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLeader}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-1/2 mb-8 md:mb-0"
                >
                  <Image
                    src={leaders[currentLeader].image}
                    alt={leaders[currentLeader].name}
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="w-full md:w-1/2 md:pl-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-semibold text-emerald-300 mb-4">{leaders[currentLeader].name}</h3>
                    <p className="text-xl text-teal-400 mb-6">{leaders[currentLeader].designation}</p>
                    <p className="text-teal-200 text-lg mb-8">{leaders[currentLeader].description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {leaders.map((_, index) => (
                          <div 
                            key={index} 
                            className={`w-3 h-3 rounded-full ${index === currentLeader ? 'bg-teal-400' : 'bg-teal-800'}`}
                          ></div>
                        ))}
                      </div>
                      <button 
                        onClick={() => setCurrentLeader((prev) => (prev + 1) % leaders.length)}
                        className="bg-teal-500 hover:bg-teal-600 rounded-full p-2 transition-all duration-300"
                      >
                        <ChevronRightIcon className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Value Proposition Section */}
        <section className="mb-24">
          <SectionTitle>Our Value Proposition</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaCog, text: "Cutting-edge technology for precision and efficiency" },
              { icon: FaUsers, text: "Decades of expertise in packaging solutions" },
              { icon: FaLeaf, text: "Deep commitment to sustainability and eco-friendly practices" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col items-center text-center">
                  <item.icon className="text-5xl text-teal-400 mb-6" />
                  <p className="text-emerald-200 text-lg">{item.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="mb-24">
          <SectionTitle>Global Presence</SectionTitle>
          <GlassCard>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <FaGlobeAmericas className="text-9xl text-teal-400 mx-auto" />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <h3 className="text-3xl font-semibold text-emerald-300 mb-6">Serving Clients Worldwide</h3>
                <ul className="space-y-4 text-teal-200 text-lg">
                  <li>• Present in over 50 countries</li>
                  <li>• Strategic partnerships across continents</li>
                  <li>• Localized solutions for global markets</li>
                  <li>• 24/7 customer support</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Awards and Recognitions */}
        <section className="mb-24">
          <SectionTitle>Awards and Recognitions</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { year: 2022, award: "Sustainable Packaging Innovation Award" },
              { year: 2021, award: "Best Employer in Packaging Industry" },
              { year: 2020, award: "Global Expansion Excellence" },
              { year: 2019, award: "Customer Satisfaction Leader" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="flex items-center">
                  <FaAward className="text-4xl text-teal-400 mr-6" />
                  <div>
                    <h3 className="text-2xl font-semibold text-emerald-300 mb-2">{item.year}</h3>
                    <p className="text-teal-200 text-lg">{item.award}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-24">
          <SectionTitle>Client Testimonials</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { quote: "Working with APL has transformed our packaging process. Their innovative solutions have significantly reduced our costs and improved our product presentation.", author: "Sarah Johnson, Marketing Director" },
              { quote: "APL's commitment to sustainability aligns perfectly with our company values. They've helped us achieve our eco-friendly packaging goals without compromising on quality.", author: "Michael Chen, Sustainability Officer" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard>
                  <FaQuoteLeft className="text-5xl text-teal-400 mb-6" />
                  <p className="text-emerald-200 italic text-xl mb-6">{item.quote}</p>
                  <p className="text-teal-300 font-semibold text-lg">— {item.author}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionTitle>Ready to Revolutionize Your Packaging?</SectionTitle>
          <GlassCard>
            <p className="text-2xl text-teal-200 mb-10">
              Let's collaborate to create innovative and sustainable packaging solutions that will set your products apart.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-teal-600 hover:to-emerald-600 transition duration-300 inline-block"
              >
                Get in Touch
              </Link>
            </motion.div>
          </GlassCard>
        </motion.section>
      </div>
    </main>
  );
}