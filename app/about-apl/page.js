'use client'

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FaStar, FaHistory, FaIndustry, FaEye, FaBullseye, FaLeaf, FaCog, 
         FaUsers, FaQuoteLeft, FaAward, FaGlobeAmericas, FaArrowRight, 
         FaChevronRight, FaQuoteRight, FaNewspaper, FaPrint, FaLayerGroup, 
         FaCut, FaBox, FaSearch, FaBolt, FaFilePdf, FaChevronDown, FaRocket, FaRecycle, FaSeedling, FaRegNewspaper, FaChartLine, FaChartBar, FaLightbulb, FaSync, FaTree, FaRegFileAlt, FaHome, FaInfoCircle, FaPhone, FaUserTie, FaBars, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa"
import { RiRecycleLine, RiCustomerService2Line } from "react-icons/ri"
import ArbabOffice from "../../public/images/arbab_office.JPG"
import productionFacility from "../../public/images/advance_machine.jpg"
import dedicatedWorkforce from "../../public/images/workforce.jpg"
import researchDevelopment from "../../public/images/rnd.jpg"
import coverPhoto1 from "../../public/images/cover1.jpg"
import coverPhoto2 from "../../public/images/cover2.jpg"
import coverPhoto3 from "../../public/images/cover3.jpg"
import capacityCert from "../../public/images/capacityCert.jpg"
import Navbar from '../../components/Navbar'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const staggerChildren = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// Enhanced Hero Section with Parallax
const HeroSection = () => {
  return (
    <div className="relative h-[75vh] flex flex-col justify-center items-center bg-gradient-to-br from-white via-blue-50/50 to-blue-100/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
      </div>

      {/* Animated Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="space-y-4"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight text-blue-900"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            PIONEER SINCE 1988
          </motion.h1>
          <motion.p 
            className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            With 37 years of innovation, APL leads in packaging solutions and promotes 
            sustainability through circular economy initiatives.
          </motion.p>

          {/* Added CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6"
          >
            <Link 
              href="#journey"
              className="inline-flex items-center px-5 py-2.5 bg-blue-900 text-white rounded-full
                         font-semibold text-sm hover:bg-blue-800 transition-all duration-300
                         hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Discover Our Story</span>
              <FaArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center space-y-1">
          <span className="text-gray-600 text-xs font-medium">Scroll to explore</span>
          <FaChevronDown className="text-blue-900 text-xl" />
        </div>
      </motion.div>
    </div>
  );
};

// Enhanced Quick Navigation
const QuickNav = () => {
  const sections = [
    { 
      title: "Our Journey", 
      icon: FaHistory
    },
    { 
      title: "Products", 
      icon: FaBox
    },
    { 
      title: "Capacity", 
      icon: FaIndustry
    },
    { 
      title: "Vision", 
      icon: FaEye
    }
  ];

  return (
    <div className="bg-white shadow-2xl rounded-2xl -mt-20 relative z-20 mx-4 md:mx-auto max-w-6xl">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6"
      >
        {sections.map((section, index) => (
          <motion.a
            key={section.title}
            href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
            variants={fadeInScale}
            className="group flex flex-col items-center justify-center p-4 rounded-xl hover:bg-blue-50 
                     transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative mb-3">
              <section.icon className="text-3xl text-blue-600 
                                    transition-transform duration-300 
                                    group-hover:scale-110" />
              <motion.div
                className="absolute -inset-3 bg-blue-100 rounded-full opacity-0 
                         group-hover:opacity-20 transition-opacity duration-300"
                layoutId={`highlight-${index}`}
              />
            </div>
            <span className="text-blue-900 font-medium text-lg text-center">
              {section.title}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

const JourneySection = () => {
  const milestones = [
    { year: 1988, title: "Foundation", description: "APL was established with a vision to revolutionize packaging solutions." },
    { year: 1995, title: "Expansion", description: "Major facility expansion and technology upgrade." },
    { year: 2005, title: "Innovation", description: "Introduction of sustainable packaging solutions." },
    { year: 2023, title: "Present", description: "Leading the industry with cutting-edge technology and sustainable practices." }
  ];

  return (
    <section id="journey" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Journey</h2>
          <p className="text-xl text-blue-700">A legacy of innovation and excellence since 1988</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-1/2 px-8">
                <div className={`${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}>
                  <h3 className="text-3xl font-bold text-blue-600">{milestone.year}</h3>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-12">
                <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="h-4 w-4 bg-white rounded-full" />
                </div>
              </div>
              <div className="w-1/2 px-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const products = [
    {
      title: "Smart Packaging",
      description: "Innovative solutions with integrated technology",
      icon: FaBolt,
      image: productionFacility
    },
    {
      title: "Sustainable Solutions",
      description: "Eco-friendly materials and processes",
      icon: FaLeaf,
      image: researchDevelopment
    },
    {
      title: "Custom Designs",
      description: "Tailored to your specific needs",
      icon: FaLayerGroup,
      image: dedicatedWorkforce
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Products</h2>
          <p className="text-xl text-blue-700">Innovative solutions for modern packaging needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <product.icon className="text-3xl text-white mb-2" />
                  <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                </div>
              </div>
              <p className="text-gray-600">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CapacitySection = () => {
  const capabilities = [
    {
      title: "Factory Space",
      value: "500,000",
      unit: "sq ft",
      icon: FaIndustry,
      description: "State-of-the-art manufacturing facility"
    },
    {
      title: "Workforce",
      value: "4,000",
      unit: "+",
      icon: FaUsers,
      description: "Skilled professionals"
    },
    {
      title: "Daily Production",
      value: "1",
      unit: "M+ units",
      icon: FaCog,
      description: "Daily manufacturing capacity"
    },
    {
      title: "Global Reach",
      value: "25",
      unit: "+ countries",
      icon: FaGlobeAmericas,
      description: "International market presence"
    }
  ];

  return (
    <section id="capacity" className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">APL Capacity</h2>
          <p className="text-xl text-blue-200">Our strength in numbers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <item.icon className="text-4xl text-blue-300 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <div className="text-3xl font-bold text-blue-300 mb-2">
                {item.value}
                <span className="text-xl ml-1">{item.unit}</span>
              </div>
              <p className="text-blue-200">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisionSection = () => {
  const visionPoints = [
    {
      title: "Innovation",
      icon: FaBolt,
      description: "Pioneering new packaging solutions for tomorrow's challenges"
    },
    {
      title: "Sustainability",
      icon: FaLeaf,
      description: "Committed to environmental responsibility and circular economy"
    },
    {
      title: "Quality",
      icon: FaAward,
      description: "Maintaining the highest standards in all our products"
    },
    {
      title: "Global Impact",
      icon: FaGlobeAmericas,
      description: "Expanding our reach while maintaining local excellence"
    }
  ];

  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-50/50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">APL Vision</h2>
          <p className="text-xl text-blue-700">Shaping the future of packaging</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-4">
                  <point.icon className="text-3xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl text-blue-900 italic">
            "Our vision is to be the global leader in innovative and sustainable packaging solutions."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "APL has been instrumental in revolutionizing our product packaging with sustainable solutions.",
      author: "John Smith",
      position: "CEO, Global Foods Inc.",
      image: ArbabOffice,
      rating: 5,
      company: "Global Foods Inc.",
      companyLogo: ArbabOffice,
      yearOfPartnership: "Since 2015"
    },
    {
      quote: "Their commitment to innovation and quality has made them our trusted packaging partner for over a decade.",
      author: "Sarah Johnson",
      position: "Operations Director, EcoProducts",
      image: productionFacility,
      rating: 5,
      company: "EcoProducts",
      companyLogo: productionFacility,
      yearOfPartnership: "Since 2010"
    },
    {
      quote: "APL's sustainable packaging solutions have helped us reduce our environmental impact significantly.",
      author: "Michael Chen",
      position: "Sustainability Head, Green Solutions",
      image: researchDevelopment,
      rating: 5,
      company: "Green Solutions",
      companyLogo: researchDevelopment,
      yearOfPartnership: "Since 2018"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-blue-700">
            Join hundreds of satisfied clients who trust APL for their packaging needs
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-xl p-8 relative group hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Image
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="relative mt-6">
                <FaQuoteLeft className="absolute -left-2 -top-2 text-4xl text-blue-100" />
                <p className="text-gray-600 mb-6 italic relative z-10 pt-4">
                  "{testimonial.quote}"
                </p>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaAward key={i} className="text-yellow-400 text-xl mx-0.5" />
                  ))}
                </div>

                <div className="flex items-center space-x-4 border-t pt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonial.author}</h4>
                    <p className="text-sm text-blue-600">{testimonial.position}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {testimonial.yearOfPartnership}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/5 transition-all duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur">
            <h3 className="text-3xl font-bold text-blue-900">500+</h3>
            <p className="text-blue-600">Active Clients</p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur">
            <h3 className="text-3xl font-bold text-blue-900">98%</h3>
            <p className="text-blue-600">Client Retention</p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur">
            <h3 className="text-3xl font-bold text-blue-900">25+</h3>
            <p className="text-blue-600">Countries Served</p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur">
            <h3 className="text-3xl font-bold text-blue-900">35+</h3>
            <p className="text-blue-600">Years of Excellence</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={productionFacility}
          alt="APL Facility"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Packaging?</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Join the countless businesses that trust APL for their packaging needs. 
            Let's create sustainable solutions together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/product-portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Update the main component to include all sections
export default function About() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <HeroSection />
      <QuickNav />
      <JourneySection />
      <ProductsSection />
      <CapacitySection />
      <VisionSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}

// Add these styles to your global CSS file (globals.css)
const styles = `
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.bg-grid-pattern {
  background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                    linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
  background-size: 24px 24px;
}
`;
