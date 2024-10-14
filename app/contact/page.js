'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    className={`bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
)

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600 ${className}`}
  >
    {children}
  </motion.h2>
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
    <main className="bg-gradient-to-b from-gray-900 to-black text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/" className="text-teal-400 flex items-center mb-16 hover:text-teal-300 transition duration-300">
          <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard>
              <SectionTitle>Contact Information</SectionTitle>
              <div className="space-y-6 mb-8">
                {[
                  { icon: FaPhone, text: "+1 (123) 456-7890" },
                  { icon: FaEnvelope, text: "contact@arbabpack.com" },
                  { icon: FaMapMarkerAlt, text: "123 Packaging St, Industry City, 12345" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <item.icon className="text-2xl text-teal-400 mr-4" />
                    <span className="text-emerald-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <SectionTitle>Connect With Us</SectionTitle>
              <div className="flex justify-center space-x-6">
                {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-3xl text-teal-400 hover:text-emerald-300 transition-colors duration-300 cursor-pointer" />
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard>
              <SectionTitle>Send Us a Message</SectionTitle>
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
                    <label htmlFor={field.name} className="block text-sm font-medium text-teal-300 mb-2">{field.label}</label>
                    <input 
                      type={field.type} 
                      id={field.name} 
                      name={field.name}
                      value={formState[field.name]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border-transparent text-white placeholder-gray-400 focus:border-teal-500 focus:bg-opacity-20 focus:ring-0 transition-all duration-200" 
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-teal-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border-transparent text-white placeholder-gray-400 focus:border-teal-500 focus:bg-opacity-20 focus:ring-0 transition-all duration-200"
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <button 
                    type="submit" 
                    className="w-full py-3 px-6 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 shadow-lg"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Additional Section: FAQ or Quick Links */}
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
                <GlassCard>
                  <h3 className="text-xl font-semibold mb-4 text-teal-300">{faq.question}</h3>
                  <p className="text-emerald-200">{faq.answer}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}