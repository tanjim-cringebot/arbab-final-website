"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { FaLeaf, FaBox, FaRecycle, FaFlask, FaArrowRight, FaLightbulb, FaIndustry, FaUsers, FaPhone, FaEnvelope, FaChevronDown, FaGlobe, FaWarehouse, FaCogs, FaBoxOpen, FaFlag, FaCertificate, FaChartLine, FaPlay, FaSolarPanel, FaRocket, FaEye, FaGlobeAmericas, FaHandshake, FaQuoteLeft, FaCalendar, FaArrowLeft, FaChevronLeft, FaChevronRight, FaTimes, FaMousePointer, FaClock, FaSmile, FaGlobeAsia, FaMicrochip, FaAtom, FaProjectDiagram } from "react-icons/fa";
import ProductBackground from "../public/images/product background.jpg";
import Hero from "../components/Hero";
import Northend from "../public/images/northend_packet.png";
import Noodles from "../public/images/noodles.png";
import Tea from "../public/images/tea.png";
import Jet from "../public/images/jet.png";
import Milk from "../public/images/milk.png";
import Chips from "../public/images/chips.png";
import Moshla from "../public/images/moshla.png";
import Bombay from "../public/images/bombay.png";
import Nationwide from "../public/images/nationwide.jpg";
import LoadingScreen from "../components/LoadingScreen";
import { useInView } from "react-intersection-observer";
import CountUp from 'react-countup';
import dynamic from 'next/dynamic';
import React from "react";

import ZakirNezum from "../public/images/zakir_hossain_nezum.png";
import KanizZehera from "../public/images/kaniz_zehera.png";
import BabHossain from "../public/images/arbab_hossain.png";
import AzmatHossain from "../public/images/azmat_hossain.png";
import AdnanHossain from "../public/images/adnan_hossain.png";

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const ModernCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-5xl md:text-7xl font-bold mb-16 text-white ${className}`}
  >
    {children}
  </motion.h2>
);

const CapacityItem = ({ icon: Icon, title, value, unit, imageSrc }) => (
  <motion.div
    className="relative h-64 rounded-xl overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        alt={title}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute inset-0 z-20 flex items-center p-6">
      <div className="text-white">
        <motion.div
          className="text-4xl mb-2"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <Icon />
        </motion.div>
        <h3 className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:translate-x-2">{title}</h3>
        <p className="text-4xl font-extrabold transition-transform duration-300 group-hover:translate-x-2">
          <CountUp end={parseInt(value)} duration={2} /> {unit}
        </p>
      </div>
    </div>
  </motion.div>
);

const TimelineEvent = ({ year, title, description, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`}
  >
    <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
      <h4 className="text-2xl font-bold text-white">{year}</h4>
      <h5 className="text-xl font-semibold text-white mb-2">{title}</h5>
      <p className="text-gray-300">{description}</p>
    </div>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
      <div className="w-4 h-4 bg-white rounded-full"></div>
    </div>
    <div className="w-1/2"></div>
  </motion.div>
);

const ProductSlider = () => {
  const products = [
    { 
      name: "Smart Packaging", 
      image: Northend,
      link: "/product-portfolio#smart-packaging",
      description: "Intelligent solutions for the digital age",
      icon: FaRocket,
      color: "from-purple-500/30 to-blue-500/30"
    },
    { 
      name: "Eco-Friendly Boxes", 
      image: Tea,
      link: "/product-portfolio#eco-friendly",
      description: "Sustainable packaging for a greener future",
      icon: FaLeaf,
      color: "from-green-500/30 to-emerald-500/30"
    },
    { 
      name: "Custom Designs", 
      image: Milk,
      link: "/product-portfolio#custom-designs",
      description: "Tailored to your unique brand identity",
      icon: FaCogs,
      color: "from-blue-500/30 to-cyan-500/30"
    },
    { 
      name: "Protective Packaging", 
      image: Chips,
      link: "/product-portfolio#protective",
      description: "Maximum security for delicate items",
      icon: FaBox,
      color: "from-orange-500/30 to-yellow-500/30"
    },
    { 
      name: "Luxury Packaging", 
      image: Noodles,
      link: "/product-portfolio#luxury",
      description: "Premium solutions for upscale brands",
      icon: FaCertificate,
      color: "from-rose-500/30 to-pink-500/30"
    },
    { 
      name: "Food-Grade Containers", 
      image: Jet,
      link: "/product-portfolio#food-grade",
      description: "Safe and certified for food products",
      icon: FaBoxOpen,
      color: "from-teal-500/30 to-cyan-500/30"
    },
    { 
      name: "Industrial Packaging", 
      image: Moshla,
      link: "/product-portfolio#industrial",
      description: "Heavy-duty solutions for manufacturing",
      icon: FaIndustry,
      color: "from-slate-500/30 to-gray-500/30"
    },
    { 
      name: "Retail Packaging", 
      image: Bombay,
      link: "/product-portfolio#retail",
      description: "Stand out on the shelf",
      icon: FaWarehouse,
      color: "from-indigo-500/30 to-violet-500/30"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  }, [products.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  }, [products.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full py-20">
      {/* Main Display */}
      <div className="container mx-auto px-4">
        {/* Animated Product Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatedProductTitle />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of packaging solutions designed to meet your specific needs. 
            From smart packaging to eco-friendly options, we deliver excellence in every product.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.div
              className="flex items-center text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaLeaf className="text-green-400 mr-2" />
              <span>Eco-Friendly</span>
            </motion.div>
            <motion.div
              className="flex items-center text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaRocket className="text-blue-400 mr-2" />
              <span>Smart Solutions</span>
            </motion.div>
            <motion.div
              className="flex items-center text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaRecycle className="text-teal-400 mr-2" />
              <span>Sustainable</span>
            </motion.div>
            <motion.div
              className="flex items-center text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaCertificate className="text-yellow-400 mr-2" />
              <span>Premium Quality</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Instructions Text */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <FaMousePointer className="text-white" />
            Hover over products to explore details
          </p>
        </motion.div>

        {/* Innovative Packaging Solutions Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Innovative Packaging Solutions
          </h3>
        </div>

        <div className="relative h-[700px]">
          {/* Center Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            {products.map((product, index) => {
              const position = (index - activeIndex + products.length) % products.length;
              const isActive = position === 0;
              const offset = position - Math.floor(products.length / 2);
              
              return (
                <motion.div
                  key={index}
                  className={`absolute w-[500px] transition-all duration-700 ease-out
                            ${isActive ? 'z-20' : 'z-10'}`}
                  initial={false}
                  animate={{
                    x: `${offset * 130}%`,
                    scale: isActive ? 1 : 0.7,
                    opacity: isActive ? 1 : 0.4,
                    rotateY: offset * -15,
                  }}
                  transition={{ 
                    duration: 0.7,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <div 
                    className={`relative h-[600px] rounded-[2rem] overflow-hidden group
                              ${isActive ? 'shadow-2xl' : 'shadow-xl'} 
                              transition-all duration-700`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Product Image */}
                    <div className="relative h-full">
                      <Image
                        src={product.image}
                        layout="fill"
                        objectFit="cover"
                        alt={product.name}
                        className="transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Hover overlay - simplified and removed blue tint */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    </div>

                    {/* Content Container */}
                    <div className="absolute inset-0 p-10 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {/* Top Content */}
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-between items-start"
                      >
                        {/* Icon Container */}
                        <motion.div
                          className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                        >
                          <product.icon className="text-2xl text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Bottom Content */}
                      <div className="space-y-4">
                        <motion.h3 
                          className="text-4xl font-bold text-white"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {product.name}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-lg text-gray-200"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          {product.description}
                        </motion.p>

                        <Link href={product.link}>
                          <motion.div
                            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full
                                     hover:bg-white/30 transition-all duration-300"
                            whileHover={{ x: 10 }}
                          >
                            <span className="text-white font-medium">Explore</span>
                            <FaArrowRight className="text-white" />
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Category Labels */}
        <div className="flex justify-center mt-8 mb-4">
          <motion.div
            className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-gray-300 text-sm">
              {products[activeIndex].name} • {activeIndex + 1}/{products.length}
            </p>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-8 mt-8">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <FaChevronLeft className="text-white text-xl" />
          </motion.button>

          {/* Progress Dots */}
          <div className="flex space-x-3">
            {products.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300
                          ${index === activeIndex ? 'bg-white' : 'bg-white/40'}`}
                whileHover={{ scale: 1.2 }}
              >
                {index === activeIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <FaChevronRight className="text-white text-xl" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const InnovationFeature = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="text-6xl text-blue-300 mb-4" />
    </motion.div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const ImpactStat = ({ icon: Icon, value, label }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-4xl text-blue-300 mb-2" />
    <motion.span 
      className="text-3xl font-bold text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {value}
    </motion.span>
    <span className="text-gray-300">{label}</span>
  </motion.div>
);

const LeaderCard = ({ leader, isActive }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 50 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className={`flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden ${isActive ? 'z-10' : 'z-0'}`}
  >
    <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px]">
      <Image
        src={leader.image}
        layout="fill"
        objectFit="cover"
        alt={leader.name}
      />
    </div>
    <div className="w-full md:w-1/2 p-12">
      <h3 className="text-4xl font-bold text-blue-800 mb-4">{leader.name}</h3>
      <p className="text-2xl text-blue-600 mb-6">{leader.position}</p>
      <p className="text-blue-500 text-xl leading-relaxed">{leader.description}</p>
    </div>
  </motion.div>
);

const LeaderSlider = () => {
  const leaders = [
    {
      name: "M M Azmat Hossain",
      position: "Director",
      image: AzmatHossain,
      description: "Marketing genius behind our brand's global recognition. Azmat has successfully positioned Arbab Pack as a leader in innovative and sustainable packaging solutions.",
      expertise: ["Strategic Marketing", "Global Expansion", "Brand Development"],
      achievements: ["Global Market Penetration", "Brand Value Growth", "Strategic Partnerships"]
    },
    {
      name: "M M Adnan Hossain",
      position: "Director",
      image: AdnanHossain,
      description: "Financial strategist driving Arbab Pack's growth and profitability. Adnan's expertise has been crucial in our expansion into new markets and strategic acquisitions.",
      expertise: ["Financial Strategy", "Market Analysis", "Business Development"],
      achievements: ["Revenue Growth", "Market Expansion", "Strategic Investments"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Meet the Leaders</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
        <p className="text-2xl text-blue-200 max-w-3xl mx-auto">
          Visionaries shaping the future of packaging innovation
        </p>
      </motion.div>

      {/* Leaders Display */}
      <div className="container mx-auto px-4">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Leader Image */}
              <motion.div 
                className="relative group"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Image
                    src={leaders[currentIndex].image}
                    layout="fill"
                    objectFit="cover"
                    alt={leaders[currentIndex].name}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Floating Achievement Cards */}
                {leaders[currentIndex].achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    className="absolute bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      x: 0,
                      top: `${20 + index * 20}%`,
                      left: index % 2 === 0 ? '-20%' : '85%'
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-white text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Leader Info */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-2"
                    layoutId={`name-${currentIndex}`}
                  >
                    {leaders[currentIndex].name}
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-blue-300 mb-6"
                    layoutId={`position-${currentIndex}`}
                  >
                    {leaders[currentIndex].position}
                  </motion.p>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed">
                  {leaders[currentIndex].description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-3">
                  {leaders[currentIndex].expertise.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm border border-white/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            {leaders.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-4 h-4 rounded-full transition-colors duration-300
                          ${index === currentIndex ? 'bg-blue-500' : 'bg-white/20'}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-500"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedNumber = ({ value, duration = 2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5 }
      });
    }
  }, [controls, inView]);

  return (
    <motion.span ref={ref} animate={controls}>
      <CountUp end={parseInt(value)} duration={duration} />
    </motion.span>
  );
};

const VisionFeature = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="text-6xl text-blue-300 mb-4" />
    </motion.div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const ContactInfo = ({ icon: Icon, title, info }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="bg-blue-900 rounded-full p-6 mb-4"
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="text-5xl text-blue-300" />
    </motion.div>
    <h4 className="text-2xl font-semibold mb-2 text-white">{title}</h4>
    <p className="text-xl text-gray-300">{info}</p>
  </motion.div>
);

const CollaboratorLogo = ({ src, alt, index }) => {
  return (
    <motion.div
      className="flex-1 flex items-center justify-center p-4"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        className="object-contain"
      />
    </motion.div>
  );
};

const NewsCard = ({ title, date, category, excerpt, image, index, active }) => (
  <motion.div
    className={`absolute inset-0 transition-all duration-500 ${
      active ? 'opacity-100 z-10' : 'opacity-0 z-0'
    }`}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: active ? 1 : 0, x: active ? 0 : 100 }}
    transition={{ duration: 0.5 }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="relative h-full rounded-3xl overflow-hidden">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            {category}
          </span>
          <div className="flex items-center text-gray-300 mb-4">
            <FaCalendar className="mr-2" />
            <span>{date}</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <p className="text-xl text-gray-300 mb-8">{excerpt}</p>
          <motion.button
            whileHover={{ x: 10 }}
            className="inline-flex items-center text-blue-300 font-semibold text-lg hover:text-blue-400 transition-colors"
          >
            Read Full Article <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const AnimatedProductTitle = () => {
  const titles = [
    "APL Products",
    "Food Packaging",
    "Personal Care & Hygiene",
    "Household Products",
    "Beverage Packaging",
    "Pharmaceutical Packaging",
    "Tobacco Packaging"
  ];

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="relative h-24 overflow-hidden mb-16">
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentTitle}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-bold text-white text-center absolute w-full"
        >
          {titles[currentTitle]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

const VisionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">APL Vision</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-2xl text-blue-200 max-w-3xl mx-auto">
            Shaping a sustainable future through innovative packaging solutions
          </p>
        </motion.div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: FaLightbulb,
              title: "Innovation First",
              description: "Pioneering breakthrough technologies in smart packaging solutions",
              gradient: "from-blue-500/20 to-cyan-500/20",
              delay: 0.2
            },
            {
              icon: FaGlobeAsia,
              title: "Global Impact",
              description: "Creating sustainable solutions that benefit communities worldwide",
              gradient: "from-purple-500/20 to-pink-500/20",
              delay: 0.4
            },
            {
              icon: FaChartLine,
              title: "Future Growth",
              description: "Expanding our reach while maintaining excellence in quality",
              gradient: "from-emerald-500/20 to-teal-500/20",
              delay: 0.6
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              className={`relative group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl h-full
                            hover:border-white/20 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6 mx-auto"
                >
                  <item.icon className="text-2xl text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">{item.title}</h3>
                <p className="text-gray-300 text-center">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "20+", label: "Years Experience", icon: FaClock },
            { value: "50+", label: "Countries Served", icon: FaGlobe },
            { value: "1000+", label: "Products", icon: FaBox },
            { value: "100%", label: "Customer Satisfaction", icon: FaSmile }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4
                         group-hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className="text-2xl text-blue-300" />
              </motion.div>
              <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InnovationHub = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const innovationFeatures = [
    {
      title: "Smart Packaging",
      icon: FaMicrochip,
      description: "Integrating IoT and NFC technologies for interactive consumer experiences and supply chain visibility",
      stats: ["40% Increased Engagement", "Real-time Tracking", "Anti-counterfeit Protection"],
      color: "from-blue-500 to-cyan-500",
      image: "/images/smart-packaging.jpg"
    },
    {
      title: "Eco-Innovation",
      icon: FaLeaf,
      description: "Revolutionary biodegradable materials and sustainable packaging solutions for a greener future",
      stats: ["100% Biodegradable", "60% Carbon Reduction", "Zero Waste Process"],
      color: "from-green-500 to-emerald-500",
      image: "/images/eco-innovation.jpg"
    },
    {
      title: "Advanced Materials",
      icon: FaAtom,
      description: "Cutting-edge material science creating stronger, lighter, and more adaptable packaging",
      stats: ["2x Durability", "30% Weight Reduction", "Enhanced Protection"],
      color: "from-purple-500 to-pink-500",
      image: "/images/advanced-materials.jpg"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Innovation Hub</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-2xl text-blue-200 max-w-3xl mx-auto">
            Where breakthrough ideas transform into revolutionary packaging solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Feature Display */}
          <motion.div 
            className="relative h-[600px] rounded-3xl overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={innovationFeatures[activeFeature].image}
              layout="fill"
              objectFit="cover"
              alt={innovationFeatures[activeFeature].title}
              className="transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <motion.h3 
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={activeFeature}
              >
                {innovationFeatures[activeFeature].title}
              </motion.h3>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-4">
                {innovationFeatures[activeFeature].stats.map((stat, index) => (
                  <motion.div
                    key={stat}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                  >
                    <span className="text-white text-sm">{stat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <div className="space-y-6">
            {innovationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300
                          ${activeFeature === index ? 'bg-white/10 backdrop-blur-sm' : 'hover:bg-white/5'}`}
                onClick={() => setActiveFeature(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} 
                              flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="text-2xl text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>

                {activeFeature === index && (
                  <motion.div
                    className="absolute inset-0 border-2 rounded-2xl"
                    style={{
                      background: `linear-gradient(90deg, ${feature.color}) border-box`,
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'destination-out',
                      maskComposite: 'exclude'
                    }}
                    layoutId="activeFeature"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Innovation Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "15+", label: "Patents Filed", icon: FaCertificate },
            { value: "30M+", label: "R&D Investment", icon: FaFlask },
            { value: "24/7", label: "Innovation Lab", icon: FaLightbulb },
            { value: "100%", label: "Success Rate", icon: FaChartLine }
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4
                         group-hover:bg-white/20 transition-all duration-300"
              >
                <metric.icon className="text-3xl text-blue-300" />
              </motion.div>
              <h4 className="text-3xl font-bold text-white mb-2">{metric.value}</h4>
              <p className="text-gray-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CollaboratorsSection = () => {
  const collaborators = [
    { src: '/images/bat.png', alt: 'BAT', category: 'Global Brand' },
    { src: '/images/smc.png', alt: 'SMC', category: 'Industry Leader' },
    { src: '/images/pran.png', alt: 'PRAN', category: 'Food & Beverage' },
    { src: '/images/danish.png', alt: 'Danish', category: 'Food Industry' },
    { src: '/images/nestle.png', alt: 'Nestle', category: 'Global FMCG' },
    { src: '/images/akij.png', alt: 'Akij', category: 'Conglomerate' }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">APL Collaborators</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-2xl text-blue-200 max-w-3xl mx-auto">
            Partnering with global leaders to deliver excellence
          </p>
        </motion.div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {collaborators.map((collaborator, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative h-[200px] rounded-2xl overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm" />
                
                {/* Logo Container */}
                <div className="relative h-full flex items-center justify-center p-8">
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={collaborator.src}
                      layout="fill"
                      objectFit="contain"
                      alt={collaborator.alt}
                      className="filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                />

                {/* Category Tag */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white border border-white/20">
                    {collaborator.category}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "20+", label: "Years of Partnership", icon: FaClock },
            { value: "100+", label: "Active Projects", icon: FaProjectDiagram },
            { value: "6", label: "Global Brands", icon: FaGlobeAmericas },
            { value: "24/7", label: "Support & Collaboration", icon: FaHandshake }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
                            group-hover:bg-white/10 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                           flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="text-2xl text-white" />
                </motion.div>
                <h4 className="text-3xl font-bold text-white text-center mb-2">{stat.value}</h4>
                <p className="text-gray-400 text-center text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const [currentNews, setCurrentNews] = useState(0);

  const newsItems = [
    {
      title: "Revolutionary Biodegradable Packaging Solution Unveiled",
      date: "March 15, 2024",
      category: "Innovation",
      excerpt: "Our latest breakthrough in sustainable packaging technology is changing the industry landscape with fully biodegradable materials.",
      image: "/images/n1.jpg"
    },
    {
      title: "Arbab Pack Wins Sustainability Excellence Award",
      date: "March 10, 2024",
      category: "Awards",
      excerpt: "Our commitment to environmental stewardship has been recognized at the International Packaging Summit 2024.",
      image: "/images/n2.png"
    },
    {
      title: "New Smart Packaging Technology Launch",
      date: "March 5, 2024",
      category: "Technology",
      excerpt: "Introducing our revolutionary smart packaging solution with integrated IoT capabilities for enhanced supply chain visibility.",
      image: "/images/n3.png"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden">
      {/* Static gradient overlays */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Static base gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-blue-800/20" />
        
        {/* Static glows */}
        <div 
          className="absolute top-0 left-0 w-[800px] h-[800px] 
                     bg-blue-500/5 rounded-full blur-[130px]"
        />
        <div 
          className="absolute bottom-0 right-0 w-[800px] h-[800px] 
                     bg-blue-600/5 rounded-full blur-[130px]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* APL Products */}
          <section className="mb-32">
            <div className="container mx-auto px-4">
    
              <p className="text-3xl text-white text-center mb-4">
                Discover our wide range of innovative packaging solutions designed to meet your unique needs.
              </p>
            </div>
            <ProductSlider />
          </section>

          {/* APL Capacity - Moved here */}
          <section className="mb-32">
            <SectionTitle>APL Capacity</SectionTitle>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <CapacityItem 
                  icon={FaWarehouse} 
                  title="Factory Space" 
                  value="500000" 
                  unit="sq ft" 
                  imageSrc="/images/area.jpg"
                />
                <CapacityItem 
                  icon={FaUsers} 
                  title="Skilled Workers" 
                  value="4000" 
                  unit="+" 
                  imageSrc="/images/skilled.jpg"
                />
                <CapacityItem 
                  icon={FaCogs} 
                  title="Advanced Machines" 
                  value="200" 
                  unit="+" 
                  imageSrc="/images/advanced.jpg"
                />
                <CapacityItem 
                  icon={FaBoxOpen} 
                  title="Daily Production" 
                  value="1" 
                  unit="M+ units" 
                  imageSrc="/images/1m.jpg"
                />
              </div>

              <motion.div
                className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-6 text-center">Production Excellence</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: FaIndustry, text: "State-of-the-art facilities" },
                    { icon: FaCertificate, text: "ISO 9001:2015 Certified" },
                    { icon: FaChartLine, text: "Continuous improvement" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <item.icon className="text-4xl mr-4 text-blue-300" />
                      <p className="text-lg">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="/capacity-certification"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition duration-300"
                >
                  Explore Our Full Capacity & Certifications
                </Link>
              </motion.div>
            </div>
          </section>

          {/* APL Story - Changed from Our Story */}
          <section className="mb-32">
            <SectionTitle>APL Story</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-4xl font-bold mb-6 text-blue-700">A Legacy of Innovation</h3>
                  <p className="text-xl text-gray-300 mb-6">
                    Since 1988, Arbab Pack Limited has been revolutionizing the packaging industry. Our journey is marked by continuous innovation, sustainable practices, and a commitment to excellence.
                  </p>
                  <Link
                    href="/about-apl"
                    className="text-2xl text-blue-500 hover:text-blue-700 transition duration-300 font-semibold inline-block mb-8"
                  >
                    Discover Our Full Journey →
                  </Link>
                </motion.div>

                {/* Video Player */}
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-w-16 aspect-h-9"
                >
                  <ReactPlayer
                    url="videos/discover.mp4"
                    width="100%"
                    height="100%"
                    playing={inView}
                    muted={true}
                    loop={true}
                    controls={false}
                    playsinline={true}
                  />
                </motion.div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-300"></div>
                <TimelineEvent
                  year="1988"
                  title="Foundation"
                  description="Arbab Pack Limited was established with a vision to revolutionize packaging."
                  isLeft={true}
                />
                <TimelineEvent
                  year="1995"
                  title="Expansion"
                  description="Opened our first international office, marking the beginning of global operations."
                  isLeft={false}
                />
                <TimelineEvent
                  year="2005"
                  title="Eco-Innovation"
                  description="Launched our first line of fully recyclable packaging solutions."
                  isLeft={true}
                />
                <TimelineEvent
                  year="2015"
                  title="Digital Integration"
                  description="Introduced smart packaging with integrated QR and NFC technologies."
                  isLeft={false}
                />
                <TimelineEvent
                  year="2023"
                  title="Sustainability Milestone"
                  description="Achieved carbon neutrality across all our production facilities."
                  isLeft={true}
                />
              </div>
            </div>
          </section>

          {/* Nationwide Impact (Reaching Every Corner) */}
          <section className="mb-32">
            <SectionTitle>Nationwide Impact</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[16/9]"
              >
                <Image
                  src={Nationwide}
                  layout="fill"
                  objectFit="cover"
                  alt="Nationwide Presence"
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-4xl font-bold mb-6 text-blue-400">Reaching Every Corner</h3>
                <p className="text-xl text-blue-400 mb-6">
                  With a strong presence across the country, we&apos;re providing innovative packaging solutions that benefit businesses and contribute to a more sustainable environment.
                </p>
                <ul className="text-xl text-white space-y-4">
                  <motion.li whileHover={{ x: 10 }} className="flex items-center">
                    <FaGlobe className="text-white mr-4" /> 8 Divisions
                  </motion.li>
                  <motion.li whileHover={{ x: 10 }} className="flex items-center">
                    <FaIndustry className="text-white mr-4" /> 15 Production Facilities
                  </motion.li>
                  <motion.li whileHover={{ x: 10 }} className="flex items-center">
                    <FaUsers className="text-white mr-4" /> 5000+ Employees Nationwide
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Vision Section - Changed from Our Vision to APL Vision */}
          <VisionSection />

          {/* Meet the Leaders */}
          <section className="mb-40">
            <SectionTitle className="mb-24">Meet the Leaders</SectionTitle>
            <div className="max-w-7xl mx-auto">
              <LeaderSlider />
            </div>
          </section>

          {/* Innovation Hub */}
          <InnovationHub />

          {/* News Carousel */}
          <section className="py-24 relative overflow-hidden">
            <SectionTitle className="text-center">Latest News</SectionTitle>
            <div className="relative z-10 container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl text-gray-300">
                  Stay updated with our latest innovations and industry insights
                </p>
              </motion.div>

              {/* News Carousel */}
              <div className="relative h-[600px] mb-16">
                {newsItems.map((news, index) => (
                  <NewsCard
                    key={index}
                    {...news}
                    index={index}
                    active={currentNews === index}
                  />
                ))}

                {/* Navigation Arrows */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentNews((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1))}
                    className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <FaChevronLeft className="text-xl" />
                  </motion.button>
                  <div className="flex space-x-2">
                    {newsItems.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentNews(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentNews === index ? 'bg-blue-600' : 'bg-blue-200'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentNews((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1))}
                    className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <FaChevronRight className="text-xl" />
                  </motion.button>
                </div>
              </div>

              <motion.div
                className="text-center mt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="/news"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition duration-300"
                >
                  <span>View More</span>
                  <FaArrowRight />
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Collaborators Section */}
          <section className="py-24 relative overflow-hidden">
            <SectionTitle className="text-center mb-16">APL Collaborators</SectionTitle>
            <div className="relative z-10 container mx-auto px-4">
              <motion.div 
                className="flex flex-wrap justify-center items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {[
                  { src: '/images/bat.png', alt: 'BAT', category: 'Global Brand' },
                  { src: '/images/smc.png', alt: 'SMC', category: 'Industry Leader' },
                  { src: '/images/pran.png', alt: 'PRAN', category: 'Food & Beverage' },
                  { src: '/images/danish.png', alt: 'Danish', category: 'Food Industry' },
                  { src: '/images/nestle.png', alt: 'Nestle', category: 'Global FMCG' },
                  { src: '/images/akij.png', alt: 'Akij', category: 'Conglomerate' }
                ].map((collaborator, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <div className="h-16 w-px bg-blue-200 mx-4"></div>
                    )}
                    <CollaboratorLogo {...collaborator} index={index} />
                  </React.Fragment>
                ))}
              </motion.div>
              
              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Link
                  href="/about-apl#collaborators"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Learn More About Our Partnerships
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Let's Collaborate */}
          <section className="mt-32 relative overflow-hidden py-24">
            <SectionTitle className="text-center">Let&apos;s Collaborate</SectionTitle>
            <div className="relative z-10 container mx-auto px-4">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-4xl font-bold mb-8 text-white">Ready to Transform Your Packaging?</h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <ContactInfo
                  icon={FaPhone}
                  title="Give us a call"
                  info="+1234567890"
                />
                <ContactInfo
                  icon={FaEnvelope}
                  title="Send us an email"
                  info="contact@arbabpack.com"
                />
              </div>

              <motion.div 
                className="text-center"
                style={{ scale }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full text-2xl font-semibold hover:bg-blue-700 transition duration-300 group"
                >
                  <span>Start the Conversation</span>
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    animate={{ x: 5 }}
                    transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
                  >
                    <FaArrowRight className="text-xl" />
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
