"use client";

import { useState, useEffect } from "react";
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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

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
          className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 max-w-2xl w-full border border-white border-opacity-30 shadow-xl"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors"
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
          <p className="text-white">{description}</p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Certification() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedCert) {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = "unset";
    }
  }, [selectedCert]);

  return (
    <>
      <main
        className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-24 font-sans text-white ${
          isModalOpen ? "blur-sm" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <Link
            href="/"
            className="text-gray-300 flex items-center mb-12 hover:text-white transition-colors duration-300 font-poppins"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-7xl font-bold mb-8 font-poppins leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Our Capacity and Certifications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl mb-16 font-inter leading-relaxed text-gray-300"
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
                className={`bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 ${
                  cert.clickable ? "cursor-pointer" : ""
                }`}
                onClick={() => cert.clickable && setSelectedCert(cert)}
              >
                <cert.icon className={`${cert.color} w-16 h-16 mb-6`} />
                <h2 className="text-3xl font-semibold mb-4 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {cert.title}
                </h2>
                <p className="text-gray-300 font-inter">{cert.description}</p>
                {cert.clickable && (
                  <p className="text-blue-400 mt-6 font-semibold font-poppins">
                    Click to view certificate →
                  </p>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-24 text-center"
          >
            <h2 className="text-5xl font-bold mb-6 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Our Commitment to Excellence
            </h2>
            <p className="text-2xl text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
              We continuously strive to improve our processes, invest in
              cutting-edge technology, and uphold the highest standards in the
              packaging industry. Our certifications and capabilities reflect
              our dedication to providing top-quality products and services to
              our valued customers.
            </p>
          </motion.div>
        </motion.div>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-40"></div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title}
        description={selectedCert?.description}
        imageSrc={selectedCert?.imageSrc}
      />
    </>
  );
}
