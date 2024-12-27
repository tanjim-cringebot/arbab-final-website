'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FaShoppingCart, FaHandshake, FaHeart, FaComments, FaIndustry, FaRecycle, FaUserTie, FaBox, FaFlask, FaGlobe, FaBoxOpen, FaClipboardCheck } from "react-icons/fa"
import { useRouter } from "next/navigation"

const ContactOption = ({ icon: Icon, title, link, gradientFrom, gradientTo }) => (
  <motion.div
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.98 }}
    className="group relative"
  >
    <Link 
      href={link}
      className="block relative overflow-hidden"
    >
      {/* Glass morphism background */}
      <div className="relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md
                    border border-white/[0.05] shadow-[0_8px_16px_rgba(0,0,0,0.2)]
                    group-hover:bg-white/[0.06] transition-all duration-300">
        {/* Gradient orb effect */}
        <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full
                      bg-gradient-to-br ${gradientFrom} ${gradientTo} blur-2xl
                      opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        
        {/* Content container */}
        <div className="relative flex flex-col items-center text-center">
          {/* Icon container with floating effect */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo}
                     flex items-center justify-center mb-4 shadow-lg
                     group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                     transition-all duration-300`}
          >
            <Icon className="text-white text-xl transform group-hover:scale-110 
                         transition-transform duration-300" />
          </motion.div>

          {/* Title with gradient effect */}
          <h3 className="text-base font-semibold bg-gradient-to-r from-white to-white/80
                      bg-clip-text text-transparent">
            {title}
          </h3>

          {/* Interactive particles effect */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 rounded-full
                         bg-gradient-to-br ${gradientFrom} ${gradientTo}
                         opacity-0 group-hover:opacity-40
                         transition-all duration-700 delay-${i * 100}`}
                style={{
                  top: `${20 + i * 30}%`,
                  left: `${80 + i * 5}%`,
                  transform: 'scale(0)',
                  animation: 'particle 2s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom highlight effect */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px]
                    bg-gradient-to-r ${gradientFrom} ${gradientTo}
                    opacity-0 group-hover:opacity-50
                    blur-sm transition-opacity duration-300`} />
    </Link>
  </motion.div>
);

// Add this CSS to your global styles
const globalStyles = `
  @keyframes particle {
    0% { transform: scale(0) translateY(0); }
    50% { transform: scale(1) translateY(-10px); }
    100% { transform: scale(0) translateY(-20px); }
  }
`;

const contactOptions = [
  {
    icon: FaShoppingCart,
    title: "Contact for Business",
    description: "Get in touch with our sales team for orders and inquiries",
    link: "/contact/business",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    hoverFrom: "blue-600",
    hoverTo: "blue-700"
  },
  {
    icon: FaHandshake,
    title: "Contact for Partnership",
    description: "Explore collaboration opportunities with us",
    link: "/contact/partnership",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600",
    hoverFrom: "emerald-600",
    hoverTo: "emerald-700"
  },
  {
    icon: FaHeart,
    title: "Contact for CSR",
    description: "Learn about our social responsibility initiatives",
    link: "/contact/csr",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    hoverFrom: "purple-600",
    hoverTo: "purple-700"
  },
  {
    icon: FaIndustry,
    title: "Manufacturing Inquiries",
    description: "Questions about our production capabilities",
    link: "/contact/manufacturing",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    hoverFrom: "blue-600",
    hoverTo: "blue-700"
  },
  {
    icon: FaRecycle,
    title: "Sustainability Office",
    description: "Connect with our sustainability team",
    link: "/contact/sustainability",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600",
    hoverFrom: "green-600",
    hoverTo: "green-700"
  },
  {
    icon: FaUserTie,
    title: "Corporate Relations",
    description: "For business partnerships and media",
    link: "/contact/corporate",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-indigo-600",
    hoverFrom: "indigo-600",
    hoverTo: "indigo-700"
  },
  {
    icon: FaBox,
    title: "Flexible Packaging",
    description: "Contact for flexible packaging solutions",
    link: "/contact/flexible-packaging",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-600",
    hoverFrom: "cyan-600",
    hoverTo: "cyan-700"
  },
  {
    icon: FaFlask,
    title: "Technical Support",
    description: "Get technical assistance and specifications",
    link: "/contact/technical",
    gradientFrom: "from-teal-500",
    gradientTo: "to-teal-600",
    hoverFrom: "teal-600",
    hoverTo: "teal-700"
  },
  {
    icon: FaGlobe,
    title: "Global Inquiries",
    description: "International business development",
    link: "/contact/global",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    hoverFrom: "blue-600",
    hoverTo: "blue-700"
  }
];

const NavOption = ({ icon: Icon, title, description, link }) => (
  <Link 
    href={link}
    className="flex-1 group"
  >
    <div className="relative px-8 py-6 h-full bg-white/5 backdrop-blur-sm
                  border-l border-white/10 first:border-l-0
                  hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20
                      flex items-center justify-center
                      group-hover:from-blue-500/30 group-hover:to-blue-600/30
                      transition-all duration-300">
          <Icon className="text-blue-400 text-xl 
                        group-hover:text-blue-300 group-hover:scale-110 
                        transition-all duration-300" />
        </div>
        <h3 className="ml-4 text-lg font-medium text-white/90 
                     group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
      </div>
      
      <p className="text-sm text-white/60 group-hover:text-white/80 
                  transition-colors duration-300 pr-4">
        {description}
      </p>

      <div className="mt-4 flex items-center text-blue-400 text-sm font-medium
                    group-hover:text-blue-300 transition-colors duration-300">
        Learn more
        <svg 
          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </Link>
);

const contactNavOptions = [
  {
    icon: FaShoppingCart,
    title: "Business Inquiries",
    description: "Connect with our sales team for orders and product information",
    link: "/contact/business"
  },
  {
    icon: FaHandshake,
    title: "Partnership",
    description: "Explore collaboration opportunities and business partnerships",
    link: "/contact/partnership"
  },
  {
    icon: FaHeart,
    title: "CSR & Sustainability",
    description: "Learn about our commitment to social responsibility",
    link: "/contact/csr"
  }
];

const ArrowButton = ({ direction, onClick, isVisible }) => (
  <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-20
              ${direction === 'left' ? '-left-12' : '-right-12'}
              w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
              flex items-center justify-center
              hover:bg-white/20 transition-colors duration-300
              border border-white/20`}
  >
    <svg
      className="w-6 h-6 text-white/80"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === 'left' 
          ? "M15 19l-7-7 7-7"
          : "M9 5l7 7-7 7"}
      />
    </svg>
  </motion.button>
);

const followUpOptions = [
  {
    icon: FaBoxOpen,
    title: "Track Your Order",
    link: "/follow-up/order",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
  },
  {
    icon: FaHandshake,
    title: "Partnership Status",
    link: "/follow-up/partnership",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600",
  },
  {
    icon: FaClipboardCheck,
    title: "Inquiry Status",
    link: "/follow-up/inquiry",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
  }
];

const HeroSection = () => {
  const [activeOption, setActiveOption] = useState(0);
  const router = useRouter();
  
  return (
    <section className="relative h-[68vh] flex flex-col items-center justify-center py-8">
      {/* Background Image and Overlay */}
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
        
        <div className="absolute bottom-0 left-0 right-0 h-24 
                     bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* Modern Interactive Title Button */}
          <motion.button
            onClick={() => router.push('/follow-up')}
            whileHover="hover"
            className="group relative inline-block px-8 py-2"
          >
            {/* Animated Background Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 
                       rounded-xl opacity-0 group-hover:opacity-100 backdrop-blur-sm
                       transition-all duration-500"
              variants={{
                hover: {
                  scale: 1.05,
                  opacity: 1
                }
              }}
            />
            
            {/* Animated Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl overflow-hidden"
              variants={{
                hover: {
                  scale: 1.05
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-30" />
              <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-gray-900 to-blue-900/90" />
            </motion.div>

            {/* Title Text */}
            <h1 className="relative text-4xl md:text-5xl font-bold
                         bg-clip-text text-transparent bg-gradient-to-r 
                         from-white via-blue-200 to-white
                         group-hover:from-blue-200 group-hover:via-white group-hover:to-blue-200
                         transition-all duration-500 ease-out
                         drop-shadow-lg"
            >
              Follow up APL
            </h1>

            {/* Subtle Glow Effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 
                       rounded-xl opacity-0 blur-xl group-hover:opacity-20
                       transition-opacity duration-500"
              variants={{
                hover: {
                  scale: 1.1,
                  opacity: 0.2
                }
              }}
            />

            {/* Interactive Particles */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  variants={{
                    hover: {
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * -100],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }
                    }
                  }}
                  style={{
                    left: `${50 + i * 20}%`,
                    top: '50%'
                  }}
                />
              ))}
            </div>
          </motion.button>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mt-8 mb-8
                     drop-shadow-md"
          >
            Track the progress of your interactions with us
          </p>
        </motion.div>

        {/* Options Grid */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {followUpOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ContactOption {...option} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/70 text-center"
        >
          <div className="w-4 h-7 border-2 border-white/20 rounded-full mx-auto mb-1 
                       flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 h-2 bg-white/30 rounded-full"
            />
          </div>
          <span className="text-[10px] font-medium">Scroll</span>
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
