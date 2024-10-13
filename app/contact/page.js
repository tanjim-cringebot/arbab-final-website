'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-8 md:p-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <Link href="/" className="text-white flex items-center mb-8 hover:underline">
          <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl font-bold text-white mb-12 text-center"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-semibold mb-8 text-white">Our Digital Presence</h2>
            <p className="mb-6 text-white text-opacity-90">We make it easy for you to engage with us digitally. Through our user-friendly website, you can:</p>
            <ul className="space-y-4 mb-8">
              {[
                "Track your order in real-time from placement to delivery",
                "Get instant quotes for your packaging needs",
                "Place orders seamlessly with just a few clicks"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                  <span className="text-white text-opacity-90">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-semibold mb-6 text-white">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: FaPhone, text: "[Insert Number]" },
                { icon: FaEnvelope, text: "[Insert Email]" },
                { icon: FaMapMarkerAlt, text: "[Insert Address]" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <item.icon className="text-2xl text-white mr-4" />
                  <span className="text-white text-opacity-90">{item.text}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mt-10 mb-6 text-white">Connect With Us</h3>
            <div className="flex space-x-6">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                <Icon key={index} className="text-3xl text-white hover:text-pink-300 transition-colors duration-300 cursor-pointer" />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">Send Us a Message</h2>
            <form className="space-y-8">
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Email", type: "email", name: "email" },
              ].map((field, index) => (
                <div key={index}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-white mb-2">{field.label}</label>
                  <input 
                    type={field.type} 
                    id={field.name} 
                    name={field.name} 
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border-transparent text-white placeholder-white::placeholder focus:border-white focus:bg-opacity-30 focus:ring-0 transition-all duration-200" 
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border-transparent text-white placeholder-white::placeholder focus:border-white focus:bg-opacity-30 focus:ring-0 transition-all duration-200"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 rounded-lg text-lg font-semibold text-purple-600 bg-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
