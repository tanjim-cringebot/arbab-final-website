'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  '/images/ImageSlider1.jpg',
  '/images/ImageSlider2.jpg',
  '/images/ImageSlider3.jpg',
  '/images/ImageSlider4.jpg',
  '/images/ImageSlider5.jpg',
  '/images/ImageSlider6.jpg',
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    };
  }
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000); // Change image every 7 seconds for slower transitions

    return () => clearInterval(timer);
  }, []);

  const handleTourClick = (e) => {
    e.preventDefault();
    window.open('https://www.youtube.com/watch?v=hpYZHbmhEws&t=40s', '_blank');
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentImage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 1 }
          }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={images[currentImage]}
            layout="fill"
            objectFit="cover"
            alt={`Slider image ${currentImage + 1}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute z-20 w-full h-full bg-gradient-to-b from-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-30 text-white text-center px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Arbab Pack Ltd
        </motion.h1>
        <motion.p 
          className="text-xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Innovating Packaging Solutions since 1988
        </motion.p>
        <motion.button 
          className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleTourClick}
        >
          GET A TOUR
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
