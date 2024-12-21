'use client'

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FaHistory, FaIndustry, FaEye, FaBullseye, FaLeaf, FaCog, FaUsers, FaQuoteLeft, FaAward, FaGlobeAmericas, FaArrowLeft, FaChevronRight, FaQuoteRight, FaNewspaper, FaPrint, FaLayerGroup, FaCut, FaBox, FaSearch, FaBolt, FaFilePdf } from "react-icons/fa"
import { RiRecycleLine, RiCustomerService2Line } from "react-icons/ri"
import ArbabOffice from "../../public/images/arbab_office.JPG"
import productionFacility from "../../public/images/advance_machine.jpg"
import dedicatedWorkforce from "../../public/images/workforce.jpg"
import researchDevelopment from "../../public/images/rnd.jpg"
import coverPhoto1 from "../../public/images/cover1.jpg"
import coverPhoto2 from "../../public/images/cover2.jpg"
import coverPhoto3 from "../../public/images/cover3.jpg"
import capacityCert from "../../public/images/capacityCert.jpg"

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-4xl md:text-5xl font-bold mb-8 text-blue-900 ${className}`}
  >
    {children}
  </motion.h2>
);

const TypeWriter = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return <span>{displayText}</span>
}

const CoreValueCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden relative group h-64"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 flex flex-col items-center justify-center h-full">
        <Icon className="text-6xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">{title}</h3>
      </div>
      <motion.div
        className="absolute inset-0 bg-blue-600 text-white p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-center">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const CoverPhotoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const slides = [
    {
      image: coverPhoto1,
      title: "Innovation in Packaging",
      subtitle: "Leading the Future of Sustainable Solutions"
    },
    {
      image: coverPhoto2,
      title: "Global Excellence",
      subtitle: "Serving Industries Worldwide"
    },
    {
      image: coverPhoto3,
      title: "Quality & Precision",
      subtitle: "Setting New Industry Standards"
    }
  ]

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 7000)
      return () => clearInterval(timer)
    }
  }, [isHovered, slides.length])

  return (
    <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence initial={false}>
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                x: { type: "tween", duration: 1.5, ease: "easeInOut" },
                opacity: { duration: 1 }
              }}
              className="absolute inset-0 z-10"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute z-20 w-full h-full bg-gradient-to-b from-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-30 text-white text-center px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          PIONEER SINCE 1988
        </motion.h1>
        <motion.p 
          className="text-xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          With 37 years of innovation, APL leads in packaging solutions and promotes sustainability
          through circular economy initiatives.
        </motion.p>
      </div>

      {/* Slide Indicators - moved up from bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

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

const AnimatedNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {  // Changed from useState to useEffect
    let start = 0;
    const end = parseInt(value.substring(0, value.length - 1));
    const timer = setInterval(() => {
      start += end / duration;
      setCount(Math.floor(start));
      if (start >= end) clearInterval(timer);
    }, 50);

    return () => clearInterval(timer);  // Cleanup on unmount
  }, [value, duration]);

  return <span>{count}{value.slice(-1)}</span>;
};

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    { quote: "Working at APL has given me the opportunity to grow in an environment focused on innovation.", author: "APL Employee" },
    { quote: "APL delivers consistent quality and innovative solutions that support our packaging needs.", author: "Client Testimonial" },
    { quote: "The team's commitment to sustainability aligns perfectly with our company values.", author: "Partner Company" },
    { quote: "Their expertise in customized packaging solutions has significantly improved our product presentation.", author: "Satisfied Customer" },
  ]

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  const certificates = [
    { title: "ISO 9001:2015", pdfSrc: "/certificates/ISO 9001-2015 Certificate.pdf", imgSrc: "/certificates/ISO 9001-2015 Certificate.jpg" },
    { title: "FSSC 22000", pdfSrc: "/certificates/DOC-20240923-WA0007..pdf", imgSrc: "/certificates/DOC-20240923-WA0007.jpg" },
    { title: "REX", pdfSrc: "/certificates/ISO 9001-2015 Certificate.pdf", imgSrc: "/certificates/ISO 9001-2015 Certificate.jpg" },
    { title: "ERC", pdfSrc: "/certificates/DOC-20240923-WA0007..pdf", imgSrc: "/certificates/DOC-20240923-WA0007.jpg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 10000) // Change testimonial every 10 seconds

    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <main className="bg-gradient-to-b from-white to-blue-50 min-h-screen pb-32">
      <CoverPhotoSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* APL Story Section */}
        <section className="mb-32 relative pt-16">
          <SectionTitle className="text-center mb-20">APL Journey</SectionTitle>
          <div className="absolute top-1/4 left-0 w-1/3 h-[300px] bg-blue-100 rounded-r-full z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2"
            >
              <Image src={ArbabOffice} alt="APL History" width={500} height={300} className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 md:pl-12"
            >
              <h4 className="text-3xl font-semibold text-blue-800 mb-6">From Small Beginnings to Global Leadership</h4>
              <p className="text-blue-700 text-lg mb-4">
                Founded in 1988, APL has grown from a small paper converting facility into a leader in packaging solutions. With over 37 years of experience, we have earned a reputation for excellence and innovation, serving industries across the nation.
              </p>
              <Link href="/news">
                <motion.div 
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <FaNewspaper className="mr-2" />
                  <span>Explore more about APL</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Corporate Profile Section */}
        <section className="mb-32">
          <SectionTitle className="text-center">APL Expertise</SectionTitle>
          <h3 className="text-3xl font-semibold text-blue-800 mb-6 text-center">World-Class Packaging Solutions</h3>
          <p className="text-blue-700 text-lg mb-16 text-center max-w-3xl mx-auto">
            APL is committed to delivering world-class packaging solutions that prioritize quality, sustainability, and customer satisfaction.
          </p>
          <div className="space-y-24">
            {[
              { icon: FaIndustry, text: "Cutting-edge Technology", image: productionFacility, alt: "Advanced production facility" },
              { 
                icon: FaUsers, 
                text: "Decades of Expertise", 
                image: dedicatedWorkforce, 
                alt: "Dedicated workforce",
                description: "With over 37 years of experience, APL combines knowledge and craftsmanship to provide reliable, high-quality packaging solutions tailored to diverse needs. This expertise allows APL to adapt to industry trends and consistently exceed customer expectations."
              },
              { 
                icon: FaCog, 
                text: "Deep Commitment to Sustainability", 
                image: researchDevelopment, 
                alt: "Research and development",
                description: "APL leads the way in sustainable packaging practices, integrating a circular economy approach to reduce waste and minimize environmental impact. By prioritizing eco-friendly materials and processes, APL is driving positive change across the industry."
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="w-full md:w-1/2">
                  <Image 
                    src={item.image} 
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="bg-blue-100 rounded-full p-4 mr-4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <item.icon className="text-3xl text-blue-600" />
                    </motion.div>
                    <h4 className="text-2xl font-semibold text-blue-800">{item.text}</h4>
                  </div>
                  <p className="text-blue-700">
                    {item.description || "APL leverages advanced technology to deliver innovative and efficient packaging solutions, setting new benchmarks in the industry. Its state-of-the-art systems ensure precision, quality, and scalability for every project."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision and Mission Section - Moved here */}
        <section className="mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-100 -skew-x-12 z-0"></div>
          <div className="relative z-10">
            <SectionTitle className="text-center">Vision & Mission</SectionTitle>
            <div className="flex flex-col md:flex-row gap-16 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <FaEye className="text-6xl text-blue-600 mb-6 mx-auto" />
                <h3 className="text-3xl font-semibold mb-4 text-center text-blue-800">Our Vision</h3>
                <p className="text-lg text-center text-blue-700">
                  To become the global leader in sustainable packaging solutions through innovation, technology, and long-term partnerships.
                </p>
              </motion.div>
              <div className="hidden md:block w-px bg-blue-300 self-stretch"></div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1"
              >
                <FaBullseye className="text-6xl text-blue-800 mb-6 mx-auto" />
                <h3 className="text-3xl font-semibold mb-4 text-center text-blue-800">Our Mission</h3>
                <p className="text-lg text-center text-blue-700">
                  To provide innovative packaging solutions that meet the highest standards of quality, sustainability, and customer service.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section (Essence of our Strength) */}
        <section className="mb-32 relative overflow-hidden">
          <SectionTitle className="text-center">Essence of APL Strength</SectionTitle>
          <p className="text-xl text-blue-700 text-center mb-12 max-w-3xl mx-auto">
            We nurtured our belief to create the establishment of our success– aspiring diligence through thick & thin
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CoreValueCard
              icon={FaCog}
              title="Innovation"
              description="Cutting-edge technology for precision and efficiency"
            />
            <CoreValueCard
              icon={FaUsers}
              title="Expertise"
              description="Decades of experience in packaging solutions"
            />
            <CoreValueCard
              icon={FaLeaf}
              title="Sustainability"
              description="Deep commitment to eco-friendly practices"
            />
          </div>
        </section>

        {/* Unique Selling Proposition Section */}
        <section className="mb-32 relative">
          <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-blue-100 rounded-tr-full z-0"></div>
          <div className="relative z-10">
            <SectionTitle className="text-center">Why Choose APL?</SectionTitle>
            <h3 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Unique Selling Proposition</h3>
            <p className="text-blue-700 text-xl mb-16 text-center max-w-3xl mx-auto">
              We offer unmatched quality, customization, and sustainable solutions, making us the preferred partner for companies worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-16">
              {[
                { icon: FaAward, text: "Unmatched Quality" },
                { icon: RiCustomerService2Line, text: "Customized Solutions" },
                { icon: RiRecycleLine, text: "Sustainable Practices" },
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

        {/* Testimonials Section */}
        <section className="mb-32 relative overflow-hidden py-20">
          <SectionTitle className="text-center mb-16">What People Say</SectionTitle>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100 rounded-full opacity-20"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center relative z-10"
              >
                <FaQuoteLeft className="text-5xl text-blue-300 mb-6 mx-auto" />
                <p className="text-blue-800 italic text-2xl mb-6 min-h-[6rem]">
                  <TypeWriter text={testimonials[activeTestimonial].quote} speed={30} />
                </p>
                <p className="text-blue-600 font-semibold text-xl">
                  — {testimonials[activeTestimonial].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-blue-900 opacity-5"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FaQuoteRight />
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-blue-900 text-white py-16 px-8 rounded-3xl mb-20"
        >
          <SectionTitle className="text-center text-white">Ready to Revolutionize Your Packaging?</SectionTitle>
          <p className="text-2xl mb-10 text-blue-100">
            Let&apos;s collaborate to create innovative and sustainable packaging solutions that will set your products apart.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-10 py-4 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center"
            >
              Get in Touch <FaChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.section>

        {/* Flexible and Customizable Solutions Section */}
        <section className="mb-32">
          <SectionTitle>Flexible and Customizable Solutions</SectionTitle>
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

        {/* Process Excellence Section */}
        <section className="mb-32">
          <SectionTitle>Process Excellence: From Concept to Completion</SectionTitle>
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

        {/* Production Capacity & Capabilities Section */}
        <section className="mb-32">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900"
          >
            Our Production Capacity & Capabilities
          </motion.h1>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2"
            >
              <Image src={capacityCert} alt="Production Facility" width={500} height={300} className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 md:pl-12"
            >
              <h4 className="text-3xl font-semibold text-blue-800 mb-6">State-of-the-Art Facilities</h4>
              <p className="text-blue-700 text-lg mb-4">
                Our facility is equipped with comprehensive advanced machinery enabling large-scale production with efficiency and precision. With a total capital investment exceeding BDT 1.2 billion, we ensure top-quality packaging solutions.
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
          <SectionTitle>Key Production Highlights</SectionTitle>
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
        </section>

        {/* Advanced Technology and Automation Section */}
        <section className="mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-100 -skew-x-12 z-0"></div>
          <div className="relative z-10">
            <SectionTitle>Advanced Technology and Automation</SectionTitle>
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

        {/* Industry-Leading Standards and Certifications Section */}
        <section className="mb-32">
          <SectionTitle>Industry-Leading Standards and Certifications</SectionTitle>
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
      </div>

      {/* Certificate Modal */}
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

// Add Modal component if not already present
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
