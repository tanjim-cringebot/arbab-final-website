'use client';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ scale: 1, opacity: 0.2 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }}
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-screen px-4 lg:px-8">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-white"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full border border-blue-400/30 
                         bg-blue-500/10 backdrop-blur-sm"
              >
                <span className="text-blue-300 text-sm">Welcome to Arbab Group</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Excellence
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  through
                </span>
                Leadership
              </motion.h1>
            </div>

            {/* Explore Journey Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={() => document.getElementById('leadership-section').scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                })}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                         rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300
                         hover:scale-105"
              >
                Explore Our Journey
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            <Image
                src="/images/zakir_hossain_nezum.png"
                alt="Zakir Hossain"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
                priority
                quality={75}
            />
          </motion.div>
        </div>

        {/* Optimized Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-white text-center"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto mb-2 
                         flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white/70 rounded-full"
              />
            </div>
            <span className="text-sm font-medium text-white/70">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 