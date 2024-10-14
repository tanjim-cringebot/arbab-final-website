"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaLeaf,
  FaPalette,
  FaCog,
  FaRecycle,
  FaBoxOpen,
  FaTruck,
  FaChartLine,
  FaGlobe,
  FaIndustry,
  FaUsers,
} from "react-icons/fa";

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600 ${className}`}
  >
    {children}
  </h2>
);

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const categories = [
    "Flexible Packaging",
    "Rigid Packaging",
    "Sustainable Solutions",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600">
              Arbab Pack
            </h1>
            <p className="text-2xl md:text-3xl text-teal-200">
              Redefining Packaging Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-20">
            {/* What is Arbab Section */}
            <section>
              <SectionTitle>What is Arbab?</SectionTitle>
              <GlassCard>
                <p className="text-xl text-teal-200 leading-relaxed mb-6">
                  Arbab Pack Ltd is a pioneering force in the packaging
                  industry, blending cutting-edge technology with sustainable
                  practices. We deliver innovative solutions that not only meet
                  but exceed the evolving needs of our clients across various
                  sectors.
                </p>
                <ul className="space-y-2 text-emerald-300">
                  <li>• Industry-leading packaging solutions</li>
                  <li>• Commitment to sustainability and innovation</li>
                  <li>• Serving diverse sectors with tailored approaches</li>
                  <li>• State-of-the-art manufacturing facilities</li>
                </ul>
              </GlassCard>
            </section>

            {/* Product Category Section */}
            <section>
              <SectionTitle>Our Product Categories</SectionTitle>
              <motion.div
                className="relative h-64 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl overflow-hidden mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <AnimatePresence mode="wait">
                  {categories.map(
                    (category, index) =>
                      currentCategory === index && (
                        <motion.div
                          key={category}
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.5 }}
                        >
                          <h3 className="text-4xl font-bold text-white">
                            {category}
                          </h3>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </motion.div>
              <div className="space-y-6">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard>
                      <h4 className="text-2xl font-semibold mb-2 text-teal-300">
                        {category}
                      </h4>
                      <p className="text-emerald-200 mb-4">
                        Discover our range of {category.toLowerCase()} solutions
                        designed to meet your specific needs.
                      </p>
                      <Link
                        href={`/products/${category
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="text-teal-400 hover:text-teal-300 transition duration-300"
                      >
                        Learn more →
                      </Link>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Vision Section */}
            <section>
              <SectionTitle>Our Vision</SectionTitle>
              <GlassCard>
                <p className="text-xl text-teal-200 mb-8">
                  To revolutionize the packaging industry with sustainable
                  innovations, setting new benchmarks for quality and
                  environmental responsibility while delivering unparalleled
                  value to our clients and stakeholders.
                </p>
                <Link
                  href="/about"
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition duration-300 inline-block"
                >
                  Learn More About Us
                </Link>
              </GlassCard>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-20">
            {/* Why Choose Arbab Section */}
            <section>
              <SectionTitle>Why Choose Arbab?</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: FaLeaf,
                    title: "Sustainable",
                    description: "Eco-friendly packaging solutions",
                  },
                  {
                    icon: FaPalette,
                    title: "Customizable",
                    description: "Tailored to your brand identity",
                  },
                  {
                    icon: FaCog,
                    title: "Efficient",
                    description: "Streamlined production process",
                  },
                  {
                    icon: FaRecycle,
                    title: "Recyclable",
                    description: "Circular economy focused",
                  },
                  {
                    icon: FaChartLine,
                    title: "Innovative",
                    description: "Cutting-edge market solutions",
                  },
                  {
                    icon: FaGlobe,
                    title: "Global Reach",
                    description: "Worldwide client base",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard className="h-full">
                      <feature.icon className="w-10 h-10 mb-4 text-teal-400" />
                      <h3 className="text-xl font-semibold mb-2 text-emerald-300">
                        {feature.title}
                      </h3>
                      <p className="text-teal-200">{feature.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Production Capabilities Section */}
            <section>
              <SectionTitle>Production Capabilities</SectionTitle>
              <div className="space-y-6">
                {[
                  {
                    icon: FaIndustry,
                    title: "State-of-the-art machinery",
                    description:
                      "Cutting-edge equipment for precision and efficiency",
                  },
                  {
                    icon: FaChartLine,
                    title: "High-volume production",
                    description:
                      "Capacity to handle large-scale orders with consistent quality",
                  },
                  {
                    icon: FaCog,
                    title: "Quality control measures",
                    description:
                      "Rigorous testing and inspection at every stage",
                  },
                  {
                    icon: FaUsers,
                    title: "Skilled workforce",
                    description:
                      "Experienced professionals dedicated to excellence",
                  },
                ].map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard>
                      <capability.icon className="w-10 h-10 mb-4 text-emerald-400" />
                      <h3 className="text-xl font-semibold mb-2 text-teal-300">
                        {capability.title}
                      </h3>
                      <p className="text-emerald-200">
                        {capability.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Collaborations Section */}
            <section>
              <SectionTitle>Our Collaborations</SectionTitle>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((partner) => (
                  <motion.div
                    key={partner}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <GlassCard className="h-32 flex items-center justify-center">
                      <span className="text-teal-300 font-semibold">
                        Partner {partner}
                      </span>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Full Width Sections */}
        {/* Get in Touch Section */}
        <section className="mt-20">
          <SectionTitle className="text-center">Get in Touch</SectionTitle>
          <GlassCard className="text-center">
            <p className="text-xl text-teal-200 mb-8">
              Ready to elevate your packaging experience? Let's connect!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition duration-300 inline-block"
              >
                Contact Us
              </Link>
            </motion.div>
          </GlassCard>
        </section>

        {/* Photo Gallery Section */}
        <section className="mt-20">
          <SectionTitle className="text-center">Photo Gallery</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((photo) => (
              <motion.div
                key={photo}
                className="aspect-square rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Replace with actual photos */}
                <div className="w-full h-full bg-gradient-to-br from-teal-400 to-emerald-500" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="text-teal-400 hover:text-teal-300 transition duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
