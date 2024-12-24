'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FaShoppingCart, FaHandshake, FaHeart, FaComments } from "react-icons/fa"

const ContactOption = ({ icon: Icon, title, description, link }) => (
  <motion.div
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/90 backdrop-blur-md rounded-2xl p-8 cursor-pointer 
               hover:bg-white transition-all duration-500 relative overflow-hidden group"
  >
    <Link href={link} className="flex flex-col items-center text-center relative z-10">
      <motion.div
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 
                   rounded-xl flex items-center justify-center mb-6 
                   shadow-lg transform group-hover:scale-105 
                   transition-all duration-500"
      >
        <Icon className="text-2xl text-white" />
      </motion.div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 
                     group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
        {description}
      </p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium
                   hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
      >
        Contact Now
        <svg 
          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </motion.button>
    </Link>
  </motion.div>
);

const HeroSection = () => {
  const contactOptions = [
    {
      icon: FaShoppingCart,
      title: "Contact to Order",
      description: "Get in touch with our sales team to discuss your packaging needs and place customized orders.",
      link: "/contact/order"
    },
    {
      icon: FaHandshake,
      title: "Contact to Sustainable Partnership",
      description: "Partner with us to develop eco-friendly packaging solutions that align with global sustainability goals.",
      link: "/contact/collaborate"
    },
    {
      icon: FaHeart,
      title: "Contact to CSR",
      description: "Join our Sustainability Stewardship Program to promote eco-friendly practices and innovations.",
      link: "/contact/sustainability"
    }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-bg.jpg"
          alt="Contact Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-black/80 to-black/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 
                         bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Get in Touch
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Choose how you'd like to connect with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ContactOption {...option} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What are your minimum order quantities?",
      answer: "Our minimum order quantities vary by product type. Please contact our sales team for specific details."
    },
    {
      question: "How can we establish a business partnership?",
      answer: "We welcome partnerships that align with our sustainable business practices. Contact our partnership team to discuss opportunities."
    },
    {
      question: "What CSR initiatives do you currently support?",
      answer: "We actively support environmental conservation, education, and community development programs."
    },
    {
      question: "What are your delivery timeframes?",
      answer: "Delivery times vary based on order size and destination. Standard delivery is 5-7 business days."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-blue-900 text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChatbotButton = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-8 right-8 z-50"
  >
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg 
                 flex items-center gap-2 transition-all duration-300"
      onClick={() => console.log('Open chatbot')}
    >
      <FaComments className="text-2xl" />
      <span className="hidden md:inline font-medium">Chat with us</span>
    </button>
  </motion.div>
);

export default function Contact() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FAQSection />
      <ChatbotButton />
    </main>
  );
}
