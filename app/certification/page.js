"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaCertificate, FaIndustry, FaUsers, FaCogs, FaLeaf, FaRecycle } from "react-icons/fa";

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    className={`bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600 ${className}`}
  >
    {children}
  </motion.h2>
);

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System",
    icon: FaCertificate,
    color: "text-blue-400",
    imageSrc: "/images/iso-9001.jpg",
  },
  {
    title: "FSSC 22000",
    description: "Food Safety System Certification",
    icon: FaCertificate,
    color: "text-green-400",
    imageSrc: "/images/fssc-22000.jpg",
  },
  {
    title: "ISO 14001:2015",
    description: "Environmental Management System",
    icon: FaCertificate,
    color: "text-teal-400",
    imageSrc: "/images/iso-14001.jpg",
  },
  {
    title: "OHSAS 18001",
    description: "Occupational Health and Safety Management",
    icon: FaCertificate,
    color: "text-red-400",
    imageSrc: "/images/ohsas-18001.jpg",
  },
];

const capabilities = [
  {
    title: "State-of-the-art Machinery",
    description: "Advanced gravure printing, lamination, and coating machines",
    icon: FaIndustry,
  },
  {
    title: "Expert Workforce",
    description: "Skilled professionals ensuring highest production standards",
    icon: FaUsers,
  },
  {
    title: "Sustainable Practices",
    description: "Eco-friendly processes minimizing environmental impact",
    icon: FaLeaf,
  },
  {
    title: "Recycling Initiatives",
    description: "Comprehensive recycling programs and use of recyclable materials",
    icon: FaRecycle,
  },
];

const Modal = ({ isOpen, onClose, title, description, imageSrc }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, rotateY: -90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.9, opacity: 0, rotateY: 90 }}
          transition={{ type: "spring", damping: 15 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-6 max-w-2xl w-full border border-teal-500 shadow-xl"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-teal-400">{title}</h2>
            <button
              onClick={onClose}
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={400}
            className="mb-4 rounded"
          />
          <p className="text-emerald-200">{description}</p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Certification() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="text-teal-400 flex items-center mb-16 hover:text-teal-300 transition duration-300">
          <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600"
        >
          Our Certifications & Capabilities
        </motion.h1>

        <section className="mb-24">
          <SectionTitle>Our Certifications</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer"
              >
                <GlassCard className="h-full flex flex-col items-center justify-center text-center">
                  <cert.icon className={`text-6xl ${cert.color} mb-4`} />
                  <h3 className="text-2xl font-semibold mb-2 text-emerald-300">{cert.title}</h3>
                  <p className="text-teal-200">{cert.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <SectionTitle>Our Capabilities</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-center mb-4">
                    <capability.icon className="text-4xl text-teal-400 mr-4" />
                    <h3 className="text-2xl font-semibold text-emerald-300">{capability.title}</h3>
                  </div>
                  <p className="text-teal-200">{capability.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <SectionTitle>Our Commitment</SectionTitle>
          <GlassCard>
            <p className="text-xl text-teal-200 text-center">
              At Arbab Pack Ltd, we are committed to maintaining the highest standards of quality, safety, and sustainability. Our certifications and capabilities reflect our dedication to excellence and continuous improvement in the packaging industry.
            </p>
          </GlassCard>
        </section>

        <section>
          <SectionTitle>Get in Touch</SectionTitle>
          <GlassCard className="text-center">
            <p className="text-xl text-teal-200 mb-8">
              Interested in learning more about our certifications and capabilities? Contact us today!
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
      </div>

      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title}
        description={selectedCert?.description}
        imageSrc={selectedCert?.imageSrc}
      />
    </main>
  );
}