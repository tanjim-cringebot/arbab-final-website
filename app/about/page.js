'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { FaHistory, FaIndustry, FaEye, FaBullseye, FaLeaf, FaCog, FaUsers, FaQuoteLeft } from 'react-icons/fa'
import arbab from "../images/arbab.gif"
import Image from 'next/image'

export default function About() {
  const [currentLeader, setCurrentLeader] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const glowStyles = `
    hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]
    transition-all duration-300 ease-in-out
    hover:scale-105
    border border-white border-opacity-20
  `;

  const leaders = [
    {
      name: "John Doe",
      designation: "CEO",
      description: "With over 20 years of experience in the packaging industry, John leads our company with vision and innovation.",
      image: "https://via.placeholder.com/400"
    },
    {
      name: "Jane Smith",
      designation: "COO",
      description: "Jane's expertise in operations has been crucial in streamlining our processes and improving efficiency.",
      image: "https://via.placeholder.com/400"
    },
    {
      name: "Mike Johnson",
      designation: "CTO",
      description: "Mike spearheads our technological advancements, ensuring we stay at the forefront of packaging innovation.",
      image: "https://via.placeholder.com/400"
    },
    {
      name: "Sarah Brown",
      designation: "CFO",
      description: "Sarah's financial acumen has been instrumental in driving sustainable growth and profitability.",
      image: "https://via.placeholder.com/400"
    },
    {
      name: "David Lee",
      designation: "CMO",
      description: "David's innovative marketing strategies have significantly expanded our global reach and brand recognition.",
      image: "https://via.placeholder.com/400"
    }
  ];

  const nextLeader = () => {
    setCurrentLeader((prev) => (prev + 1) % leaders.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/" className="text-white flex items-center mb-8 hover:underline">
          <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold text-white mb-12 text-center"
        >
          About Arbab Pack Ltd
        </motion.h1>

        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            { icon: FaHistory, title: "APL Story", content: "Founded in 1988, APL has grown from a small paper converting facility into a global leader in packaging solutions." },
            { icon: FaIndustry, title: "Corporate Profile", content: "APL is committed to delivering world-class packaging solutions that prioritize quality, sustainability, and customer satisfaction." },
            { icon: FaEye, title: "Vision", content: "To become the global leader in sustainable packaging solutions through innovation, technology, and long-term partnerships." },
            { icon: FaBullseye, title: "Mission", content: "To provide innovative packaging solutions that meet the highest standards of quality, sustainability, and customer service." },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp} 
              className={`bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 ${glowStyles}`}
            >
              <item.icon className="text-4xl text-white mb-4" />
              <h2 className="text-2xl font-semibold mb-4 text-white">{item.title}</h2>
              <p className="text-white">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated GIF placeholder */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mt-16 mb-16 flex justify-center"
        >
          <div className={`relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden ${glowStyles}`}>
            <Image
              src={arbab}  // Replace with the actual path to your GIF
              alt="Arbab Pack Ltd Process"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Meet Our Leaders Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mt-16 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Leaders</h2>
          <div className={`bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden ${glowStyles}`}>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <img
                  src={leaders[currentLeader].image}
                  alt={leaders[currentLeader].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{leaders[currentLeader].name}</h3>
                  <p className="text-lg text-white opacity-80 mb-4">{leaders[currentLeader].designation}</p>
                  <p className="text-white">{leaders[currentLeader].description}</p>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex space-x-2">
                    {leaders.map((_, index) => (
                      <div 
                        key={index} 
                        className={`w-2 h-2 rounded-full ${index === currentLeader ? 'bg-white' : 'bg-white opacity-50'}`}
                      ></div>
                    ))}
                  </div>
                  <button 
                    onClick={nextLeader}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
                  >
                    <ArrowRightIcon className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Value Proposition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaCog, text: "Cutting-edge technology" },
              { icon: FaUsers, text: "Decades of expertise" },
              { icon: FaLeaf, text: "Deep commitment to sustainability" },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex flex-col items-center ${glowStyles}`}
              >
                <item.icon className="text-4xl text-white mb-4" />
                <p className="text-white text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={fadeInUp} 
          initial="initial" 
          animate="animate" 
          className={`mt-12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 ${glowStyles}`}
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Unique Selling Proposition (USP)</h2>
          <p className="text-white">
            We offer unmatched quality, customization, and sustainable solutions, making us the preferred partner for companies worldwide.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="initial" animate="animate" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { quote: "Working at APL has given me the opportunity to grow in an environment focused on innovation.", author: "APL Employee" },
            { quote: "APL delivers consistent quality and innovative solutions that support our packaging needs.", author: "Client Testimonial" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp} 
              className={`bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 ${glowStyles}`}
            >
              <FaQuoteLeft className="text-4xl text-white mb-4" />
              <p className="text-white italic mb-4">{item.quote}</p>
              <p className="text-white font-semibold">— {item.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
