"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaIndustry, FaBolt, FaPrint, FaLayerGroup, FaCut, FaBox, FaSearch, FaCog, FaRocket, FaCertificate, FaClipboardCheck, FaShip, FaGlobe, FaArrowLeft, FaFilePdf } from "react-icons/fa";
import capacityCert from "../../public/images/capacityCert.jpg"

const ModernSection = ({ title, children, icon: Icon }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-24"
  >
    <div className="flex items-center mb-8">
      <Icon className="text-4xl text-blue-600 mr-4" />
      <h2 className="text-3xl font-bold text-blue-900">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const AnimatedNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useState(() => {
    let start = 0;
    const end = parseInt(value.substring(0, value.length - 1));
    const timer = setInterval(() => {
      start += end / duration;
      setCount(Math.floor(start));
      if (start >= end) clearInterval(timer);
    }, 50);
  }, [value, duration]);

  return <span>{count}{value.slice(-1)}</span>;
};

const HighlightCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-xl p-6 shadow-lg"
  >
    <Icon className="text-4xl text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ProcessStep = ({ number, title, description }) => (
  <motion.div 
    className="flex items-start mb-6"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: number * 0.1 }}
  >
    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const CertificateCard = ({ title, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white rounded-xl p-4 shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <div className="w-full h-40 mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
      <FaFilePdf className="text-6xl text-red-600" />
    </div>
    <h3 className="text-lg font-semibold text-center">{title}</h3>
  </motion.div>
);

const Modal = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 100 }}
          className="bg-white p-8 rounded-xl w-full max-w-4xl h-[80vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function CapacityCertification() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { title: "ISO 9001:2015", pdfSrc: "/certificates/ISO 9001-2015 Certificate.pdf", imgSrc: "/certificates/ISO 9001-2015 Certificate.jpg" },
    { title: "FSSC 22000", pdfSrc: "/certificates/DOC-20240923-WA0007..pdf", imgSrc: "/certificates/DOC-20240923-WA0007.jpg" },
    { title: "REX", pdfSrc: "/certificates/ISO 9001-2015 Certificate.pdf", imgSrc: "/certificates/ISO 9001-2015 Certificate.jpg" },
    { title: "ERC", pdfSrc: "/certificates/DOC-20240923-WA0007..pdf", imgSrc: "/certificates/DOC-20240923-WA0007.jpg" },
  ];

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/" className="text-blue-600 flex items-center mb-16 hover:text-blue-800 transition duration-300">
          <FaArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900"
        >
          Our Production Capacity & Capabilities
        </motion.h1>

        {/* Unrivaled Production Capacity Section */}
        <section className="mb-32 relative">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-100 rounded-r-full z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 mb-8 md:mb-0"
            >
              <Image src={capacityCert} alt="Production Facility" width={500} height={300} className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 md:pl-12"
            >
              <h2 className="text-4xl font-bold mb-6 text-blue-900">Unrivaled Production Capacity</h2>
              <p className="text-blue-700 text-lg mb-4">
                Our facility is equipped with a comprehensive range of advanced machinery that enables us to handle large-scale production with efficiency and precision. We have invested significantly in our production lines, with a total capital investment exceeding BDT 1.2 billion.
              </p>
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4">Total Capital Investment</h3>
                <p className="text-5xl font-bold">
                  <AnimatedNumber value="1.2B+" duration={3} /> BDT
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Production Highlights Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Key Production Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaPrint, title: "10-Color Roto Printing Machines", description: "Capable of high-definition, multi-color printing with a maximum width of 1250mm, ensuring top-quality packaging designs." },
              { icon: FaLayerGroup, title: "Lamination Machines", description: "Offering both dry and extrusion lamination, we deliver flexible and durable packaging materials that provide moisture and oxygen resistance, extending product shelf life." },
              { icon: FaCut, title: "Slitting and Rewinding Machines", description: "These machines ensure precision cutting and shaping of materials, enhancing packaging integrity and aesthetic quality." },
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <motion.div 
                    className="bg-blue-100 rounded-full p-4 mb-4 inline-block"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <highlight.icon className="text-3xl text-blue-600" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2 text-blue-700">{highlight.title}</h3>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-blue-600 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{highlight.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-8">
            {[
              { icon: FaBox, title: "Bag-Making Machines", description: "From side gusseted to stand-up pouches, our machines can handle a variety of custom packaging designs to meet specific client requirements." },
              { icon: FaSearch, title: "Inspection Machines", description: "Ensuring that every product meets the highest standards of quality and safety, we continuously monitor and test our materials throughout the production process." },
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 3), duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col justify-between group relative overflow-hidden w-full md:w-1/3"
              >
                <div>
                  <motion.div 
                    className="bg-blue-100 rounded-full p-4 mb-4 inline-block"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <highlight.icon className="text-3xl text-blue-600" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2 text-blue-700">{highlight.title}</h3>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-blue-600 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{highlight.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advanced Technology and Automation Section */}
        <section className="mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-100 -skew-x-12 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Advanced Technology and Automation</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto"
            >
              <p>
                We utilize cutting-edge technology throughout our manufacturing process to ensure consistency, efficiency, and quality. Our automated systems streamline production, allowing us to reduce lead times and deliver high-quality packaging on time.
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: FaCog, text: "Extrusion Coating Machines" },
                { icon: FaCut, text: "High-Speed Cutting and Sealing Machines" },
                { icon: FaBolt, text: "Corona Treatment Machines" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg"
                >
                  <div className="bg-blue-100 rounded-full p-6 mb-4">
                    <item.icon className="text-5xl text-blue-600" />
                  </div>
                  <p className="text-blue-800 font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible and Customizable Solutions Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Flexible and Customizable Solutions</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto text-center"
          >
            <p>
              We understand that every client has unique packaging needs, which is why our manufacturing process is designed to be flexible and customizable. Our production lines can handle a wide range of materials, from paper and board to flexible plastics and laminates.
            </p>
          </motion.div>
          <motion.div 
            className="bg-blue-900 text-white p-8 rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">Industries We Serve</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {['Food', 'Beverages', 'Pharmaceuticals', 'Personal Care', 'Household Goods'].map((industry, index) => (
                <motion.div
                  key={industry}
                  className="bg-blue-800 px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Industry-Leading Standards and Certifications Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Industry-Leading Standards and Certifications</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto text-center"
          >
            <p>
              Arbab Pack Limited is committed to adhering to global industry standards to ensure that our packaging solutions meet the highest levels of quality, safety, and sustainability.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <CertificateCard
                  title={cert.title}
                  onClick={() => setSelectedCertificate(cert)}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Excellence Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Process Excellence: From Concept to Completion</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto text-center"
          >
            <p>
              Our manufacturing process follows stringent protocols to ensure that every step—from design to production to delivery—meets our high standards for quality and efficiency. We work closely with clients from the initial design phase, offering expert advice on materials and packaging solutions that best suit their products.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-16">
              {[
                { number: 1, title: "Design Consultation", description: "Tailoring packaging designs to the client's specifications, ensuring both functionality and aesthetic appeal." },
                { number: 2, title: "Material Selection", description: "Using advanced lamination and coating technologies to create custom packaging materials that meet specific barrier and durability requirements." },
                { number: 3, title: "Production and Printing", description: "Utilizing high-speed, multi-color printing and lamination machines to create vibrant and durable packaging." },
                { number: 4, title: "Inspection and Quality Control", description: "Continuous quality checks throughout the production process to ensure compliance with industry standards." },
                { number: 5, title: "Final Delivery", description: "Timely and efficient delivery of finished products, ready to be distributed or used by our clients." },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h3 className="text-2xl font-semibold mb-2 text-blue-700">{step.title}</h3>
                    <p className="text-blue-600">{step.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold z-10">
                    {step.number}
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition duration-300"
          >
            Contact Us for Custom Solutions
          </Link>
        </motion.div>
      </div>

      <Modal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      >
        {selectedCertificate && (
          <div className="h-full">
            <h2 className="text-2xl font-bold mb-4">{selectedCertificate.title}</h2>
            <iframe
              src={`${selectedCertificate.pdfSrc}#toolbar=0`}
              className="w-full h-[calc(100%-3rem)]"
              title={selectedCertificate.title}
            />
          </div>
        )}
      </Modal>
    </main>
  );
}
