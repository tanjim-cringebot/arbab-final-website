'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const services = [
  { title: 'Custom Packaging Design', description: 'Tailored packaging solutions to fit your brand and product needs.' },
  { title: 'Printing Services', description: 'High-quality printing for your packaging, including digital and offset printing.' },
  { title: 'Packaging Consultation', description: 'Expert advice on materials, design, and sustainability for your packaging needs.' },
  { title: 'Fulfillment Services', description: 'End-to-end packaging and shipping solutions for e-commerce businesses.' },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-400 to-red-600 p-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
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
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 2), duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-red-600">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
