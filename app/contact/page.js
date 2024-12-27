"use client";

import Image from "next/image"
import { motion } from "framer-motion"
import { FaShoppingCart, FaHandshake, FaHeart, FaComments, FaSearch } from "react-icons/fa"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

const contactSections = [
  {
    icon: FaShoppingCart,
    title: "Contact to Order",
    link: "/contact/order",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
  },
  {
    icon: FaHandshake,
    title: "Contact to Partnership",
    link: "/contact/partnership",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600",
  },
  {
    icon: FaHeart,
    title: "Contact to CSR",
    link: "/contact/csr",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
  }
];

const ContactBox = ({ icon: Icon, title, link, gradientFrom, gradientTo }) => (
  <motion.div
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.98 }}
    className="group relative"
  >
    <Link 
      href={link}
      className="block relative overflow-hidden"
    >
      <div className="relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md
                    border border-white/[0.05] shadow-[0_8px_16px_rgba(0,0,0,0.2)]
                    group-hover:bg-white/[0.06] transition-all duration-300">
        {/* Enhanced Gradient Orb */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full
                      bg-gradient-to-br ${gradientFrom} ${gradientTo} blur-2xl
                      opacity-20 group-hover:opacity-30 group-hover:scale-110
                      transition-all duration-300`} />
        
        <div className="relative flex flex-col items-center">
          {/* Enhanced Icon Container */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo}
                     flex items-center justify-center mb-5 shadow-lg
                     group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                     transition-all duration-300`}
          >
            <Icon className="text-white text-2xl transform group-hover:scale-110 
                         transition-transform duration-300" />
          </motion.div>

          {/* Enhanced Title */}
          <h3 className="text-xl font-semibold text-white text-center
                      group-hover:text-blue-200 transition-colors duration-300">
            {title}
          </h3> {/* Closing the <h3> tag here */}
        </div> {/* Closing the div for the icon container */}

      </div> {/* Closing the div for the main content */}
    </Link>
  </motion.div> // Closing the outer motion.div here
);



const FollowUpModal = ({ isOpen, onClose }) => {
  const [trackingCode, setTrackingCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingCode.trim()) {
      setError("Please enter a tracking code");
      return;
    }
    // Here you would typically make an API call to check the status
    console.log("Checking status for:", trackingCode);
    router.push(`/follow-up/${trackingCode}`);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative bg-white/[0.02] backdrop-blur-md rounded-2xl p-8
                 border border-white/[0.05] shadow-[0_8px_16px_rgba(0,0,0,0.2)]
                 w-full max-w-md"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white
                   transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Track Your Progress
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Enter Your Tracking Code
            </label>
            <input
              type="text"
              value={trackingCode}
              onChange={(e) => {
                setTrackingCode(e.target.value);
                setError("");
              }}
              placeholder="e.g., APL-2024-XXXX"
              className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1]
                     text-white placeholder-white/40 focus:outline-none focus:border-blue-500
                     transition-colors duration-300"
            />
            {error && (
              <p className="mt-2 text-sm text-red-400">
                {error}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600
                     text-white font-medium hover:from-blue-600 hover:to-blue-700
                     transition-all duration-300 shadow-lg"
          >
            Track Status
          </motion.button>

          <p className="text-sm text-white/60 text-center">
            Your tracking code can be found in the confirmation email we sent you.
          </p>
        </form>
      </motion.div>
    </motion.div>
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

const HeroSection = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-16">
        {/* Hero section content */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-black/95" />
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        </div>

        {/* Track your contact button and contact sections */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            {/* Updated Follow-up Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex flex-col items-center"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 
                            rounded-2xl blur opacity-25 group-hover:opacity-50 
                            transition duration-500 group-hover:duration-200" />
              
              {/* Button Content */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 
                            backdrop-blur-sm border border-white/10 rounded-2xl p-1 
                            overflow-hidden group-hover:border-blue-500/50 transition-all duration-500">
                <div className="flex items-center justify-center gap-3 px-8 py-4">
                  <h1 className="text-4xl md:text-5xl font-bold
                             bg-clip-text text-transparent bg-gradient-to-r 
                             from-white via-blue-200 to-white
                             group-hover:from-blue-200 group-hover:via-white group-hover:to-blue-200
                             transition-all duration-500 ease-out
                             drop-shadow-lg"
                  >
                    Track your contact
                  </h1>

                  {/* Animated Magnifying Glass */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-blue-400 group-hover:text-blue-300 
                             transition-colors duration-300"
                  >
                    <FaSearch className="w-8 h-8 md:w-10 md:h-10" />
                  </motion.div>
                </div>
              </div>
            </motion.button>
          </motion.div>

          {/* Improved Contact Sections Grid */}
          <div className="relative max-w-5xl mx-auto mt-12">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {contactSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <ContactBox {...section} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />
      <ChatbotButton />
      <FollowUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
