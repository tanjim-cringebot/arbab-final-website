'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FaShoppingCart, FaHandshake, FaHeart, FaComments } from "react-icons/fa"

const ContactOption = ({ icon: Icon, title, link, gradientFrom, gradientTo, hoverFrom, hoverTo }) => (
  <motion.div
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <Link 
      href={link} 
      className="block bg-white/5 backdrop-blur-sm rounded-lg p-4 
                 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group
                 border border-white/10"
    >
      <div className="flex flex-col items-center text-center relative z-10">
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`w-10 h-10 bg-gradient-to-br ${gradientFrom} ${gradientTo}
                   rounded-lg flex items-center justify-center mb-3 
                   shadow-md transform group-hover:scale-105 
                   group-hover:from-${hoverFrom} group-hover:to-${hoverTo}
                   transition-all duration-300`}
        >
          <Icon className="text-sm text-white" />
        </motion.div>
        
        <h3 className={`text-sm font-medium text-white/90
                     group-hover:text-${hoverFrom} transition-colors duration-300`}>
          {title}
        </h3>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-br from-${hoverFrom}/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </Link>
  </motion.div>
);

const contactOptions = [
  {
    icon: FaShoppingCart,
    title: "Contact to Order",
    link: "/contact/order",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    hoverFrom: "blue-600",
    hoverTo: "blue-700"
  },
  {
    icon: FaHandshake,
    title: "Contact to Sustainable Partnership",
    link: "/contact/collaborate",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600",
    hoverFrom: "emerald-600",
    hoverTo: "emerald-700"
  },
  {
    icon: FaHeart,
    title: "Contact to CSR",
    link: "/contact/sustainability",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    hoverFrom: "purple-600",
    hoverTo: "purple-700"
  }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/product_bg.jpg"
          alt="Contact Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-black/80 to-black/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 
                       bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Choose how you&apos;d like to connect with us. Whether it&apos;s for orders, 
            partnerships, or our CSR initiatives, we&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
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
