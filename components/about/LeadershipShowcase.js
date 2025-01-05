'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaChartLine, FaRecycle, FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function LeadershipShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leaders = [
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
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % leaders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + leaders.length) % leaders.length);
  };

  return (
    <section id="leadership-section" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black py-32">
      {/* Background Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
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
                layout="fill"
                objectFit="cover"
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
  );
}
