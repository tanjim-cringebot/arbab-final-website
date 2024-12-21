"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run this on the client side
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      {/* Your loading screen content */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Your logo or loading animation */}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
