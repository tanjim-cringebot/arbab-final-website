'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane } from "react-icons/fa"

const ModernCard = ({ children, className = "" }) => (
  <motion.div
    className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 0, 255, 0.1)" }}
  >
    {children}
  </motion.div>
)

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-5xl md:text-7xl font-bold mb-16 text-blue-900 ${className}`}
  >
    {children}
  </motion.h2>
)

const ContactInfo = ({ icon: Icon, text }) => (
  <motion.div
    className="flex items-center mb-6"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-3xl text-blue-600 mr-4" />
    <span className="text-xl text-blue-700">{text}</span>
  </motion.div>
)

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
  }

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/" className="text-blue-600 flex items-center mb-16 hover:text-blue-800 transition duration-300">
          <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ModernCard>
              <SectionTitle className="text-4xl mb-8">Contact Information</SectionTitle>
              <ContactInfo icon={FaPhone} text="+880 1844 454 0790" />
              <ContactInfo icon={FaEnvelope} text="info@arbabpackltd.com" />
              <ContactInfo icon={FaMapMarkerAlt} text="Shimrail, Demra Road, Siddhirganj, Narayanganj-1430, Bangladesh" />

              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Connect With Us</h3>
                <div className="flex space-x-6">
                  {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="text-3xl text-blue-600 hover:text-blue-700 transition-colors duration-300 cursor-pointer" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ModernCard>
              <SectionTitle className="text-4xl mb-8">Send Us a Message</SectionTitle>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Name", type: "text", name: "name" },
                  { label: "Email", type: "email", name: "email" },
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <label htmlFor={field.name} className="block text-sm font-medium text-blue-700 mb-2">{field.label}</label>
                    <input 
                      type={field.type} 
                      id={field.name} 
                      name={field.name}
                      value={formState[field.name]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-blue-50 border-transparent text-blue-900 placeholder-blue-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-200" 
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg bg-blue-50 border-transparent text-blue-900 placeholder-blue-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <button 
                    type="submit" 
                    className="w-full py-3 px-6 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </button>
                </motion.div>
              </form>
            </ModernCard>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-24"
        >
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { question: "What are your delivery times?", answer: "Our standard delivery time is 5-7 business days. Express shipping options are available." },
              { question: "Do you offer custom packaging solutions?", answer: "Yes, we specialize in creating tailored packaging solutions to meet your specific needs." },
              { question: "What materials do you use?", answer: "We use a variety of eco-friendly materials, including recycled paper, biodegradable plastics, and sustainable wood products." },
              { question: "Can I request a sample before placing a bulk order?", answer: "Absolutely! We offer sample kits for all our standard products and can create custom samples for bespoke designs." },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <ModernCard>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">{faq.question}</h3>
                  <p className="text-blue-600">{faq.answer}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}
