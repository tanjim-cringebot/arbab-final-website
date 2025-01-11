'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useCallback, useMemo } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaChartLine, FaRecycle, FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollY } = useScroll();

  // Memoize data arrays to prevent unnecessary re-renders
  const leaders = useMemo(() => [
    {
      name: "Kaniz Zehera",
      title: "Chairman",
      image: "/images/kaniz_zehera.png",
      description: "Innovation expert driving our technological advancements in smart packaging. Kaniz's forward-thinking approach has revolutionized our product offerings.",
      strengths: [
        { icon: FaChartLine, text: "Innovation Leadership" },
        { icon: FaRecycle, text: "Sustainable Development" },
        { icon: FaLightbulb, text: "Innovative Solutions" }
      ],
      quote: "Through innovation and strategic vision, we're shaping the future of sustainable packaging."
    },
    {
      name: "M M Azmat Hossain",
      title: "Director",
      image: "/images/azmat_hossain.png",
      description: "Marketing genius behind our brand's global recognition. Azmat has successfully positioned Arbab Pack as a leader in innovative and sustainable packaging solutions.",
      strengths: [
        { icon: FaChartLine, text: "Market Strategy" },
        { icon: FaRecycle, text: "Global Expansion" },
        { icon: FaHandshake, text: "Brand Building" }
      ],
      quote: "Our commitment to excellence drives our global success and market leadership."
    },
    {
      name: "Arbab Hossain",
      title: "Director",
      image: "/images/arbab_hossain.png",
      description: "Visionary leader spearheading our expansion into new markets. Arbab's strategic insight has been instrumental in our continuous growth and innovation.",
      strengths: [
        { icon: FaLightbulb, text: "Strategic Vision" },
        { icon: FaHandshake, text: "Business Development" },
        { icon: FaChartLine, text: "Growth Leadership" }
      ],
      quote: "Innovation and sustainability are the cornerstones of our future growth."
    }
  ], []);

  const companies = useMemo(() => [
    {
      name: "Arbab Pack Ltd.",
      logo: "/images/arbab_logo.png",
      color: "from-blue-500 to-blue-600",
      angle: 0
    },
    {
      name: "ZK Foils Ltd.", 
      logo: "/images/zkFoil.png",
      color: "from-purple-500 to-purple-600",
      angle: 51.43
    },
    {
      name: "ZK Plastic Ltd.",
      logo: "/images/zkPlastic.png", 
      color: "from-green-500 to-green-600",
      angle: 102.86
    },
    {
      name: "ZK Ink & Chemical Ltd.",
      logo: "/images/zkicl.png",
      color: "from-red-500 to-red-600", 
      angle: 154.29
    },
    {
      name: "ZK Health Care Ltd.",
      logo: "/images/zkHealth.png",
      color: "from-teal-500 to-teal-600",
      angle: 205.71
    },
    {
      name: "AANT Cosmetics Ltd.",
      logo: "/images/aant.png",
      color: "from-pink-500 to-pink-600",
      angle: 257.14
    },
    {
      name: "RePro",
      logo: "/images/repro.png",
      color: "from-emerald-500 to-emerald-600",
      angle: 308.57
    }
  ], []);

  // Memoize navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % leaders.length);
  }, [leaders.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + leaders.length) % leaders.length);
  }, [leaders.length]);

  // Optimize scroll-based animations
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="overflow-hidden">
      {/* Hero Section - Optimized animations */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ y: backgroundY, opacity: backgroundOpacity }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
          />
          <motion.div
            style={{ y: backgroundY, opacity: backgroundOpacity }}
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
                  Founders Portfolio
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

      {/* Leadership Section - Optimized animations */}
      <section id="leadership-section" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black py-32">
        <motion.div
          initial={false}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-blue-400/30 
                         bg-blue-500/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-4">
              Our Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AG Leadership Legacy
            </h2>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto">
              Driving innovation and sustainable growth through visionary leadership
            </p>
          </motion.div>

          {/* Leadership Showcase */}
          <div className="relative max-w-5xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <Image
                  src={leaders[currentIndex].image}
                  alt={leaders[currentIndex].name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {leaders[currentIndex].name}
                  </h3>
                  <p className="text-blue-400 text-xl">{leaders[currentIndex].title}</p>
                </div>

                <p className="text-blue-200 text-lg leading-relaxed">
                  {leaders[currentIndex].description}
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {leaders[currentIndex].strengths.map((strength, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3"
                    >
                      <strength.icon className="text-blue-400 text-xl" />
                      <span className="text-blue-200">{strength.text}</span>
                    </div>
                  ))}
                </div>

                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="text-xl text-blue-300 italic">
                    &quot;{leaders[currentIndex].quote}&quot;
                  </div>
                  <footer className="mt-2 text-blue-400 font-medium">
                    {leaders[currentIndex].name}
                  </footer>
                </motion.blockquote>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={prevSlide}
                className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
              >
                <FaChevronLeft className="text-blue-900 text-xl" />
              </button>
              {leaders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                          ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-200'}`}
                />
              ))}
              <button
                onClick={nextSlide}
                className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
              >
                <FaChevronRight className="text-blue-900 text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Group Structure Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black py-32">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-blue-400/30 
                         bg-blue-500/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-4">
              Our Companies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AG Group Structure
            </h2>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto">
              A diverse portfolio of innovative enterprises
            </p>
          </motion.div>

          {/* Centered Circular Layout Container */}
          <div className="flex justify-center items-center w-full">
            <div className="relative w-[800px] h-[800px]">
              {/* Center Circle - Arbab Group with enhanced hover effect */}
              <div className="absolute left-[400px] top-[400px] -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  initial={false}
                  whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 40px rgba(59,130,246,0.4)"
                  }}
                  transition={{ 
                    duration: 0.5,
                    hover: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  className="w-56 h-56 
                           bg-white/5 backdrop-blur-md rounded-full 
                           flex items-center justify-center
                           border-2 border-white/20
                           hover:bg-white/10 hover:border-blue-400/50 
                           transition-all duration-300 cursor-pointer
                           group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative w-44 h-44 p-4 rounded-full 
                             bg-gradient-to-br from-white/10 to-transparent
                             group-hover:from-blue-500/20 group-hover:to-transparent
                             transition-all duration-300"
                  >
                    <Image
                      src="/images/arbabGroup.png"
                      alt="AG Group"
                      fill
                      className="object-contain p-2 transition-transform duration-300
                               group-hover:scale-110"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Company Cards - Using polar coordinates */}
              {companies.map((company, index) => {
                const radius = 300;
                const angleInDegrees = (index * (360 / companies.length)) - 90; // Start from top
                const angleInRadians = (angleInDegrees * Math.PI) / 180;
                
                // Calculate position relative to center (0,0)
                const x = radius * Math.cos(angleInRadians);
                const y = radius * Math.sin(angleInRadians);

                return (
                  <motion.div
                    key={company.name}
                    initial={false}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="absolute"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      left: '50%',
                      top: '50%'
                    }}
                  >
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${company.color} rounded-2xl opacity-0 
                                   group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg 
                                   border border-white/10 group-hover:border-transparent transition-all duration-500
                                   w-48">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="w-16 h-16 relative">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h3 className="text-base font-bold text-white text-center">
                            {company.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connecting Lines - Using same coordinate system */}
              <svg className="absolute inset-0" width="800" height="800" style={{ overflow: 'visible' }}>
                {companies.map((_, index) => {
                  const angleInDegrees = (index * (360 / companies.length)) - 90;
                  const angleInRadians = (angleInDegrees * Math.PI) / 180;
                  const radius = 280; // Slightly shorter than cards for visual balance
                  
                  // Calculate end points relative to center
                  const endX = 400 + radius * Math.cos(angleInRadians);
                  const endY = 400 + radius * Math.sin(angleInRadians);
                  
                  return (
                    <motion.line
                      key={index}
                      initial={false}
                      whileInView={{ opacity: 0.2 }}
                      transition={{ duration: 0.5 }}
                      x1="400"
                      y1="400"
                      x2={endX}
                      y2={endY}
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                    />
                  );
                })}
                <defs>
                  <linearGradient id="lineGradient">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
