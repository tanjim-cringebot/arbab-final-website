"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  FaCertificate,
  FaIndustry,
  FaUsers,
  FaCogs,
  FaLeaf,
  FaRecycle,
} from "react-icons/fa";

const certifications = [
  {
    title: "ISO 9001:2015 Certification",
    description:
      "Our Quality Management System meets international standards, ensuring consistent quality in our products and services.",
    icon: FaCertificate,
    color: "text-blue-500",
    imageSrc: "/path-to-iso-certificate.jpg",
    clickable: true,
  },
  {
    title: "FSSC 22000 Certification",
    description:
      "This certification demonstrates our commitment to food safety management in our packaging products for the food industry.",
    icon: FaCertificate,
    color: "text-green-500",
    imageSrc: "/path-to-fssc-certificate.jpg",
    clickable: true,
  },
  {
    title: "State-of-the-art Machinery",
    description:
      "Our facilities boast advanced gravure printing, lamination, and coating machines, enabling high-quality and efficient production.",
    icon: FaIndustry,
    color: "text-purple-500",
    clickable: false,
  },
  {
    title: "Expert Workforce",
    description:
      "Our team of skilled professionals ensures the highest production standards and continuous innovation in packaging solutions.",
    icon: FaUsers,
    color: "text-yellow-500",
    clickable: false,
  },
  {
    title: "Sustainable Practices",
    description:
      "We implement eco-friendly processes and materials, minimizing our environmental impact while maximizing product quality.",
    icon: FaLeaf,
    color: "text-green-400",
    clickable: false,
  },
  {
    title: "Recycling Initiatives",
    description:
      "Our commitment to sustainability includes comprehensive recycling programs and the use of recyclable materials in our packaging.",
    icon: FaRecycle,
    color: "text-blue-400",
    clickable: false,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

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
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg p-6 max-w-2xl w-full"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-indigo-600">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
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
          <p className="text-gray-700">{description}</p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Certification() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 p-8 md:p-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <Link
          href="/"
          className="text-white flex items-center mb-8 hover:underline"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold text-white mb-8"
        >
          Our Capacity and Certifications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-white mb-12"
        >
          At Arbab Pack Ltd, we take pride in our world-class facilities,
          internationally recognized certifications, and our commitment to
          quality and sustainability.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1 * (index + 1) }}
              className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${
                cert.clickable ? "cursor-pointer" : ""
              }`}
              onClick={() => cert.clickable && setSelectedCert(cert)}
            >
              <cert.icon className={`${cert.color} w-12 h-12 mb-4`} />
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
                {cert.title}
              </h2>
              <p className="text-gray-700">{cert.description}</p>
              {cert.clickable && (
                <p className="text-indigo-600 mt-4 font-semibold">
                  Click to view certificate
                </p>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Commitment to Excellence
          </h2>
          <p className="text-xl text-white">
            We continuously strive to improve our processes, invest in
            cutting-edge technology, and uphold the highest standards in the
            packaging industry. Our certifications and capabilities reflect our
            dedication to providing top-quality products and services to our
            valued customers.
          </p>
        </motion.div>
      </motion.div>
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
