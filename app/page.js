"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { FaLeaf, FaBox, FaRecycle, FaArrowRight, FaLightbulb, FaIndustry, FaUsers, FaPhone, FaEnvelope, FaChevronDown, FaGlobe, FaWarehouse, FaCogs, FaBoxOpen, FaFlag, FaCertificate, FaChartLine, FaPlay, FaSolarPanel, FaRocket, FaEye, FaGlobeAmericas, FaHandshake, FaQuoteLeft, FaCalendar, FaArrowLeft, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import ProductBackground from "../public/images/product background.jpg";
import Hero from "../components/Hero";
import Northend from "../public/images/northend_packet.png";
import Noodles from "../public/images/noodles.png";
import Tea from "../public/images/tea.png";
import Jet from "../public/images/jet.png";
import Milk from "../public/images/milk.png";
import Chips from "../public/images/chips.png";
import Moshla from "../public/images/moshla.png";
import Bombay from "../public/images/bombay.png";
import Nationwide from "../public/images/nationwide.jpg";
import LoadingScreen from "../components/LoadingScreen";
import { useInView } from "react-intersection-observer";
import CountUp from 'react-countup';
import dynamic from 'next/dynamic';
import React from "react";

import ZakirNezum from "../public/images/zakir_hossain_nezum.png";
import KanizZehera from "../public/images/kaniz_zehera.png";
import BabHossain from "../public/images/arbab_hossain.png";
import AzmatHossain from "../public/images/azmat_hossain.png";
import AdnanHossain from "../public/images/adnan_hossain.png";

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const ModernCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-5xl md:text-7xl font-bold mb-16 text-blue-900 ${className}`}
  >
    {children}
  </motion.h2>
);

const CapacityItem = ({ icon: Icon, title, value, unit, imageSrc }) => (
  <motion.div
    className="relative h-64 rounded-xl overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        alt={title}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/70 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
    <div className="absolute inset-0 z-20 flex items-center p-6">
      <div className="text-white">
        <motion.div
          className="text-4xl mb-2"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <Icon />
        </motion.div>
        <h3 className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:translate-x-2">{title}</h3>
        <p className="text-4xl font-extrabold transition-transform duration-300 group-hover:translate-x-2">
          <CountUp end={parseInt(value)} duration={2} /> {unit}
        </p>
      </div>
    </div>
  </motion.div>
);

const TimelineEvent = ({ year, title, description, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`}
  >
    <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
      <h4 className="text-2xl font-bold text-blue-700">{year}</h4>
      <h5 className="text-xl font-semibold text-blue-600 mb-2">{title}</h5>
      <p className="text-blue-500">{description}</p>
    </div>
    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
      <div className="w-4 h-4 bg-white rounded-full"></div>
    </div>
    <div className="w-1/2"></div>
  </motion.div>
);

const ProductSlider = () => {
  const products = [
    { 
      name: "Smart Packaging", 
      image: Northend,
      link: "/product-portfolio#smart-packaging"
    },
    { 
      name: "Eco-Friendly Boxes", 
      image: Tea,
      link: "/product-portfolio#eco-friendly"
    },
    { 
      name: "Custom Designs", 
      image: Milk,
      link: "/product-portfolio#custom-designs"
    },
    { 
      name: "Protective Packaging", 
      image: Chips,
      link: "/product-portfolio#protective"
    },
    { 
      name: "Luxury Packaging", 
      image: Noodles,
      link: "/product-portfolio#luxury"
    },
    { 
      name: "Food-Grade Containers", 
      image: Jet,
      link: "/product-portfolio#food-grade"
    },
    { 
      name: "Industrial Packaging", 
      image: Moshla,
      link: "/product-portfolio#industrial"
    },
    { 
      name: "Retail Packaging", 
      image: Bombay,
      link: "/product-portfolio#retail"
    }
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="relative w-screen overflow-hidden -mx-[50vw] left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
      {/* Background Image */}
      <Image
        src={ProductBackground}
        layout="fill"
        objectFit="cover"
        alt="Factory Background"
        className="absolute inset-0 w-full"
      />
      {/* Conveyor Belt Animation */}
      <div className="relative z-10 py-20">
        <motion.div
          className="flex space-x-8"
          animate={controls}
          style={{ width: "3840px" }}
        >
          {[...products, ...products].map((product, index) => (
            <Link 
              key={index}
              href={product.link}
              className="group relative"
            >
              <motion.div
                className="flex-shrink-0 w-72 h-72 relative rounded-2xl overflow-hidden group-hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Image
                  src={product.image}
                  layout="fill"
                  objectFit="cover"
                  alt={product.name}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay with product name */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white text-xl font-semibold text-center">
                    {product.name}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const InnovationFeature = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="text-6xl text-blue-500 mb-4" />
    </motion.div>
    <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
    <p className="text-blue-600">{description}</p>
  </motion.div>
);

const ImpactStat = ({ icon: Icon, value, label }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-4xl text-blue-500 mb-2" />
    <motion.span 
      className="text-3xl font-bold text-blue-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {value}
    </motion.span>
    <span className="text-sm text-blue-600">{label}</span>
  </motion.div>
);

const LeaderCard = ({ leader, isActive }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 50 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className={`flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden ${isActive ? 'z-10' : 'z-0'}`}
  >
    <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px]">
      <Image
        src={leader.image}
        layout="fill"
        objectFit="cover"
        alt={leader.name}
      />
    </div>
    <div className="w-full md:w-1/2 p-12">
      <h3 className="text-4xl font-bold text-blue-800 mb-4">{leader.name}</h3>
      <p className="text-2xl text-blue-600 mb-6">{leader.position}</p>
      <p className="text-blue-500 text-xl leading-relaxed">{leader.description}</p>
    </div>
  </motion.div>
);

const LeaderSlider = () => {
  const leaders = [
    {
      name: "Zakir Hossain Nezum",
      position: "Managing Director",
      image: ZakirNezum,
      description: "Visionary leader with 20+ years of experience in the packaging industry. Zakir has been instrumental in driving Arbab Pack's global expansion and sustainable initiatives."
    },
    {
      name: "Kaniz Zehera",
      position: "Chairman",
      image: KanizZehera,
      description: "Innovation expert driving our technological advancements in smart packaging. Kaniz's forward-thinking approach has revolutionized our product offerings."
    },
    {
      name: "Arbab Hossain",
      position: "Director",
      image: BabHossain,
      description: "Operations maestro ensuring efficiency across our global production facilities. Arbab's leadership has optimized our supply chain and manufacturing processes."
    },
    {
      name: "M M Azmat Hossain",
      position: "Director",
      image: AzmatHossain,
      description: "Marketing genius behind our brand's global recognition. Azmat has successfully positioned Arbab Pack as a leader in innovative and sustainable packaging solutions."
    },
    {
      name: "M M Adnan Hossain",
      position: "Director",
      image: AdnanHossain,
      description: "Financial strategist driving Arbab Pack's growth and profitability. Adnan's expertise has been crucial in our expansion into new markets and strategic acquisitions."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextLeader = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % leaders.length);
  }, [leaders.length]);

  const prevLeader = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + leaders.length) % leaders.length);
  };

  useEffect(() => {
    const interval = setInterval(nextLeader, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [nextLeader]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <LeaderCard key={currentIndex} leader={leaders[currentIndex]} isActive={true} />
      </AnimatePresence>
      <motion.button
        className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevLeader}
      >
        <FaChevronDown className="text-blue-600 text-3xl transform rotate-90" />
      </motion.button>
      <motion.button
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextLeader}
      >
        <FaChevronDown className="text-blue-600 text-3xl transform -rotate-90" />
      </motion.button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {leaders.map((_, index) => (
          <motion.div
            key={index}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-blue-200'}`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const AnimatedNumber = ({ value, duration = 2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5 }
      });
    }
  }, [controls, inView]);

  return (
    <motion.span ref={ref} animate={controls}>
      <CountUp end={parseInt(value)} duration={duration} />
    </motion.span>
  );
};

const VisionFeature = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="text-6xl text-blue-500 mb-4" />
    </motion.div>
    <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
    <p className="text-blue-600">{description}</p>
  </motion.div>
);

const ContactInfo = ({ icon: Icon, title, info }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="bg-blue-100 rounded-full p-6 mb-4"
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="text-5xl text-blue-600" />
    </motion.div>
    <h4 className="text-2xl font-semibold mb-2 text-blue-700">{title}</h4>
    <p className="text-xl text-blue-600">{info}</p>
  </motion.div>
);

const CollaboratorLogo = ({ src, alt, index }) => {
  return (
    <motion.div
      className="flex-1 flex items-center justify-center p-4"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        className="object-contain"
      />
    </motion.div>
  );
};

const NewsCard = ({ title, date, category, excerpt, image, index, active }) => (
  <motion.div
    className={`absolute inset-0 transition-all duration-500 ${
      active ? 'opacity-100 z-10' : 'opacity-0 z-0'
    }`}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: active ? 1 : 0, x: active ? 0 : 100 }}
    transition={{ duration: 0.5 }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="relative h-full rounded-3xl overflow-hidden">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
      </div>
      <div className="flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            {category}
          </span>
          <div className="flex items-center text-blue-500 mb-4">
            <FaCalendar className="mr-2" />
            <span>{date}</span>
          </div>
          <h3 className="text-3xl font-bold text-blue-900 mb-4">{title}</h3>
          <p className="text-xl text-blue-600 mb-8">{excerpt}</p>
          <motion.button
            whileHover={{ x: 10 }}
            className="inline-flex items-center text-blue-600 font-semibold text-lg"
          >
            Read Full Article <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const AnimatedProductTitle = () => {
  const titles = [
    "APL Products",
    "Food Packaging",
    "Personal Care & Hygiene",
    "Household Products",
    "Beverage Packaging",
    "Pharmaceutical Packaging",
    "Tobacco Packaging"
  ];

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="relative h-24 overflow-hidden mb-16">
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentTitle}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-bold text-blue-900 text-center absolute w-full"
        >
          {titles[currentTitle]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};


export default function Home() {
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const [currentNews, setCurrentNews] = useState(0);

  const newsItems = [
    {
      title: "Revolutionary Biodegradable Packaging Solution Unveiled",
      date: "March 15, 2024",
      category: "Innovation",
      excerpt: "Our latest breakthrough in sustainable packaging technology is changing the industry landscape with fully biodegradable materials.",
      image: "/images/n1.jpg"
    },
    {
      title: "Arbab Pack Wins Sustainability Excellence Award",
      date: "March 10, 2024",
      category: "Awards",
      excerpt: "Our commitment to environmental stewardship has been recognized at the International Packaging Summit 2024.",
      image: "/images/n2.png"
    },
    {
      title: "New Smart Packaging Technology Launch",
      date: "March 5, 2024",
      category: "Technology",
      excerpt: "Introducing our revolutionary smart packaging solution with integrated IoT capabilities for enhanced supply chain visibility.",
      image: "/images/n3.png"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* APL Products - Changed back from APL Packaging Solutions */}
        <section className="mb-32">
          <div className="container mx-auto px-4">
            <AnimatedProductTitle />
            <p className="text-3xl text-blue-600 text-center mb-4">
              Discover our wide range of innovative packaging solutions designed to meet your unique needs.
            </p>
          </div>
          <ProductSlider />
        </section>

        {/* APL Capacity - Moved here */}
        <section className="mb-32">
          <SectionTitle>APL Capacity</SectionTitle>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <CapacityItem 
                icon={FaWarehouse} 
                title="Factory Space" 
                value="500000" 
                unit="sq ft" 
                imageSrc="/images/area.jpg"
              />
              <CapacityItem 
                icon={FaUsers} 
                title="Skilled Workers" 
                value="4000" 
                unit="+" 
                imageSrc="/images/skilled.jpg"
              />
              <CapacityItem 
                icon={FaCogs} 
                title="Advanced Machines" 
                value="200" 
                unit="+" 
                imageSrc="/images/advanced.jpg"
              />
              <CapacityItem 
                icon={FaBoxOpen} 
                title="Daily Production" 
                value="1" 
                unit="M+ units" 
                imageSrc="/images/1m.jpg"
              />
            </div>

            <motion.div
              className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-center">Production Excellence</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: FaIndustry, text: "State-of-the-art facilities" },
                  { icon: FaCertificate, text: "ISO 9001:2015 Certified" },
                  { icon: FaChartLine, text: "Continuous improvement" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="text-4xl mr-4 text-blue-300" />
                    <p className="text-lg">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/capacity-certification"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition duration-300"
              >
                Explore Our Full Capacity & Certifications
              </Link>
            </motion.div>
          </div>
        </section>

        {/* APL Story - Changed from Our Story */}
        <section className="mb-32">
          <SectionTitle>APL Story</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-4xl font-bold mb-6 text-blue-700">A Legacy of Innovation</h3>
                <p className="text-xl text-blue-600 mb-6">
                  Since 1988, Arbab Pack Limited has been revolutionizing the packaging industry. Our journey is marked by continuous innovation, sustainable practices, and a commitment to excellence.
                </p>
                <Link
                  href="/about-apl"
                  className="text-2xl text-blue-500 hover:text-blue-700 transition duration-300 font-semibold inline-block mb-8"
                >
                  Discover Our Full Journey →
                </Link>
              </motion.div>

              {/* Video Player */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-w-16 aspect-h-9"
              >
                <ReactPlayer
                  url="videos/discover.mp4"
                  width="100%"
                  height="100%"
                  playing={inView}
                  muted={true}
                  loop={true}
                  controls={false}
                  playsinline={true}
                />
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-300"></div>
              <TimelineEvent
                year="1988"
                title="Foundation"
                description="Arbab Pack Limited was established with a vision to revolutionize packaging."
                isLeft={true}
              />
              <TimelineEvent
                year="1995"
                title="Expansion"
                description="Opened our first international office, marking the beginning of global operations."
                isLeft={false}
              />
              <TimelineEvent
                year="2005"
                title="Eco-Innovation"
                description="Launched our first line of fully recyclable packaging solutions."
                isLeft={true}
              />
              <TimelineEvent
                year="2015"
                title="Digital Integration"
                description="Introduced smart packaging with integrated QR and NFC technologies."
                isLeft={false}
              />
              <TimelineEvent
                year="2023"
                title="Sustainability Milestone"
                description="Achieved carbon neutrality across all our production facilities."
                isLeft={true}
              />
            </div>
          </div>
        </section>

        {/* Nationwide Impact (Reaching Every Corner) */}
        <section className="mb-32">
          <SectionTitle>Nationwide Impact</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[16/9]"
            >
              <Image
                src={Nationwide}
                layout="fill"
                objectFit="cover"
                alt="Nationwide Presence"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl font-bold mb-6 text-blue-700">Reaching Every Corner</h3>
              <p className="text-xl text-blue-600 mb-6">
                With a strong presence across the country, we&apos;re providing innovative packaging solutions that benefit businesses and contribute to a more sustainable environment.
              </p>
              <ul className="text-xl text-blue-600 space-y-4">
                <motion.li whileHover={{ x: 10 }} className="flex items-center">
                  <FaGlobe className="text-blue-500 mr-4" /> 8 Divisions
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="flex items-center">
                  <FaIndustry className="text-blue-500 mr-4" /> 15 Production Facilities
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="flex items-center">
                  <FaUsers className="text-blue-500 mr-4" /> 5000+ Employees Nationwide
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Vision Section - Changed from Our Vision to APL Vision */}
        <section className="py-24 relative overflow-hidden">
          <SectionTitle className="text-center">APL Vision</SectionTitle>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl text-blue-700">
                Shaping a sustainable future through innovative packaging solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <VisionFeature 
                icon={FaEye} 
                title="Forward-Thinking" 
                description="Anticipating market needs and driving industry trends."
              />
              <VisionFeature 
                icon={FaGlobeAmericas} 
                title="Global Impact" 
                description="Expanding our reach to serve diverse markets worldwide."
              />
              <VisionFeature 
                icon={FaHandshake} 
                title="Collaborative Growth" 
                description="Fostering partnerships for mutual success and innovation."
              />
            </div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-blue-700">APL Commitment</h3>
              <p className="text-xl text-blue-600 max-w-3xl mx-auto">
                We are dedicated to pushing the boundaries of packaging technology while maintaining our commitment to sustainability and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meet the Leaders */}
        <section className="mb-40">
          <SectionTitle className="mb-24">Meet the Leaders</SectionTitle>
          <div className="max-w-7xl mx-auto">
            <LeaderSlider />
          </div>
        </section>

        {/* Innovation Hub */}
        <section className="py-24 relative overflow-hidden">
          <SectionTitle className="text-center">Innovation Hub</SectionTitle>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl text-blue-700">
                At Arbab Pack, we&apos;re revolutionizing packaging through sustainable innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <InnovationFeature 
                icon={FaLeaf} 
                title="Eco-Friendly Materials" 
                description="Pioneering fully biodegradable packaging solutions."
              />
              <InnovationFeature 
                icon={FaLightbulb} 
                title="Smart Packaging" 
                description="Integrating IoT and NFC for interactive experiences."
              />
              <InnovationFeature 
                icon={FaRecycle} 
                title="RePro-RP Initiative" 
                description="Integrating recycled materials to reduce our footprint."
              />
            </div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-blue-700">Our Impact</h3>
              <div className="flex justify-center space-x-12">
                <ImpactStat icon={FaLeaf} value="50%" label="Carbon Reduction" />
                <ImpactStat icon={FaRecycle} value="75%" label="Recycled Materials" />
                <ImpactStat icon={FaSolarPanel} value="60%" label="Renewable Energy" />
              </div>
            </motion.div>

            <motion.div 
              className="mt-16 text-center"
              style={{ scale }}
            >
              <Link
                href="/innovation-sustainability"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                <span>Explore Our Innovations</span>
                <FaRocket className="text-xl" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* News Carousel */}
        <section className="py-24 relative overflow-hidden">
          <SectionTitle className="text-center">Latest News</SectionTitle>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl text-blue-700">
                Stay updated with our latest innovations and industry insights
              </p>
            </motion.div>

            {/* News Carousel */}
            <div className="relative h-[600px] mb-16">
              {newsItems.map((news, index) => (
                <NewsCard
                  key={index}
                  {...news}
                  index={index}
                  active={currentNews === index}
                />
              ))}

              {/* Navigation Arrows */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentNews((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1))}
                  className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaChevronLeft className="text-xl" />
                </motion.button>
                <div className="flex space-x-2">
                  {newsItems.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentNews(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentNews === index ? 'bg-blue-600' : 'bg-blue-200'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentNews((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1))}
                  className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaChevronRight className="text-xl" />
                </motion.button>
              </div>
            </div>

            <motion.div
              className="text-center mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/news"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition duration-300"
              >
                <span>View More</span>
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Collaborators Section */}
        <section className="py-24 relative overflow-hidden">
          <SectionTitle className="text-center mb-16">APL Collaborators</SectionTitle>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div 
              className="flex flex-wrap justify-center items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[
                { src: '/images/bat.png', alt: 'Collaborator 1' },
                { src: '/images/smc.png', alt: 'Collaborator 2' },
                { src: '/images/pran.png', alt: 'Collaborator 3' },
                { src: '/images/danish.png', alt: 'Collaborator 4' },
                { src: '/images/nestle.png', alt: 'Collaborator 5' },
                { src: '/images/akij.png', alt: 'Collaborator 6' },
              ].map((collaborator, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <div className="h-16 w-px bg-blue-200 mx-4"></div>
                  )}
                  <CollaboratorLogo {...collaborator} index={index} />
                </React.Fragment>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/about-apl#collaborators"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Learn More About Our Partnerships
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Let's Collaborate */}
        <section className="mt-32 relative overflow-hidden py-24">
          <SectionTitle className="text-center">Let&apos;s Collaborate</SectionTitle>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl font-bold mb-8 text-blue-700">Ready to Transform Your Packaging?</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <ContactInfo
                icon={FaPhone}
                title="Give us a call"
                info="+1234567890"
              />
              <ContactInfo
                icon={FaEnvelope}
                title="Send us an email"
                info="contact@arbabpack.com"
              />
            </div>

            <motion.div 
              className="text-center"
              style={{ scale }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full text-2xl font-semibold hover:bg-blue-700 transition duration-300 group"
              >
                <span>Start the Conversation</span>
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
                >
                  <FaArrowRight className="text-xl" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
