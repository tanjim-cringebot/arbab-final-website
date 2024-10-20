"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ModernCard = ({ children, className = "" }) => (
  <motion.div
    className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 0, 255, 0.1)" }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-4xl md:text-5xl font-bold mb-16 text-blue-900 ${className}`}
  >
    {children}
  </motion.h2>
);

const SisterConcern = ({ logo, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="relative w-32 h-32 mb-6"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1 }}
    >
      <Image src={logo} alt={title} layout="fill" objectFit="contain" />
    </motion.div>
    <h3 className="text-2xl font-semibold mb-4 text-blue-700">{title}</h3>
    <p className="text-blue-600 max-w-sm">{description}</p>
  </motion.div>
);

export default function AboutAG() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/" className="text-blue-600 flex items-center mb-16 hover:text-blue-800 transition duration-300">
          <FaArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>

        <section className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/arbabGroup.png" alt="Arbab Group Logo" width={300} height={300} className="mx-auto mb-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-8 text-blue-900"
          >
            About Arbab Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-blue-700 max-w-3xl mx-auto"
          >
            Arbab Group is a leading conglomerate in the packaging industry, known for its innovative solutions and commitment to sustainability. With a global presence and a diverse portfolio of companies, we strive to deliver excellence in every aspect of packaging and related services.
          </motion.p>
        </section>

        <section className="mb-32 relative">
          <SectionTitle>Our Sister Concerns</SectionTitle>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
            {[
              { logo: "/images/arbab_logo.png", title: "Arbab Pack Ltd.", description: "Leading manufacturer of flexible packaging solutions, serving diverse industries with innovative and sustainable products." },
              { logo: "/images/zkFoil.png", title: "ZK Foils Ltd", description: "Specializing in high-quality printing services for packaging materials, ensuring vibrant and durable designs." },
              { logo: "/images/zkPlastic.png", title: "ZK Plastics Ltd", description: "State-of-the-art warehousing and inventory management solutions, optimizing supply chain efficiency." },
              { logo: "/images/zkicl.png", title: "ZK Ink Ltd.", description: "Dedicated to sustainable practices, this division focuses on recycling and repurposing packaging materials." },
              { logo: "/images/zkHealth.png", title: "ZK Healthcare", description: "Providing end-to-end logistics solutions, ensuring timely and efficient delivery of products across the globe." },
              { logo: "/images/aant.png", title: "Aant Cosmetics Ltd", description: "Diverse manufacturing arm of the group, producing a wide range of industrial products and components." },
            ].map((concern, index) => (
              <motion.div
                key={concern.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <SisterConcern 
                  logo={concern.logo}
                  title={concern.title}
                  description={concern.description}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <ModernCard className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8">
              Be part of our growth story. Explore opportunities to collaborate with the Arbab Group.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-white text-blue-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center"
              >
                Connect With Us <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </ModernCard>
        </section>
      </div>
    </main>
  );
}
