'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const heroContent = [
  {
    heading: "Pioneers Since 1988",
    description: "Leading the market since 1988 with innovative packaging solutions that shaped Bangladesh's industry standards."
  },
  {
    heading: "Innovation for a Growing Nation",
    description: "Serving 200 companies across 15 industries, impacting 50 million consumers daily with innovative packaging."
  },
  {
    heading: "Practicing Circular Economy",
    description: "Recycling 90% of production waste, saving 500 metric tonnes of resources annually."
  },
  {
    heading: "Collaborating for Sustainable Solutions",
    description: "Producing 10,000 tonnes of sustainable packaging annually through impactful partnerships."
  },
  {
    heading: "Growing Together with Our Ecosystem",
    description: "Caring for industries, customers, consumers, and the environment to create value and drive sustainable growth together."
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10"
      >
        <source src="/videos/arbab_hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated Overlay */}
      <motion.div 
        className="absolute z-20 w-full h-full bg-gradient-to-b from-black/30 to-black/50"
        animate={{
          background: [
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))"
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-30 text-white text-center px-4 max-w-4xl mx-auto">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {heroContent[currentIndex].heading}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-200/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {heroContent[currentIndex].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
