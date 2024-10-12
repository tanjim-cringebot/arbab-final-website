'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://videos.pexels.com/video-files/9856372/9856372-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute z-20 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-30 text-white text-center px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Arbab Pack Ltd
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Innovative Packaging Solutions for a Sustainable Future
        </motion.p>
        <motion.button 
          className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/products">
            Explore Our Products
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
