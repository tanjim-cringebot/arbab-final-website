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
    <main className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 p-8 md:p-24">
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
          className="text-5xl font-bold text-white mb-12"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-6">Digital Presence</h2>
            <p className="mb-4">We make it easy for you to engage with us digitally. Through our user-friendly website, you can:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Real-Time Order Tracking: Track the status of your order from placement to delivery.</li>
              <li>Order Price Calculation: Get an instant quote for your packaging needs based on custom specifications.</li>
              <li>Order Placement: Place your orders seamlessly through our online platform with just a few clicks.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="mr-3" />
                <span>[Insert Number]</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3" />
                <span>[Insert Email]</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3" />
                <span>[Insert Address]</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-blue-300 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-blue-300 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-blue-300 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-blue-300 cursor-pointer" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent placeholder-white::placeholder text-white focus:border-white focus:bg-opacity-30 focus:ring-0 transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent placeholder-white::placeholder text-white focus:border-white focus:bg-opacity-30 focus:ring-0 transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent placeholder-white::placeholder text-white focus:border-white focus:bg-opacity-30 focus:ring-0 transition-all duration-200"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">
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
