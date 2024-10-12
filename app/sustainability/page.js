'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const initiatives = [
  { title: 'Recycled Materials', description: 'We use recycled materials in our packaging products whenever possible.' },
  { title: 'Energy Efficiency', description: 'Our manufacturing processes are designed to minimize energy consumption.' },
  { title: 'Waste Reduction', description: 'We implement strategies to reduce waste in our production and encourage recycling.' },
  { title: 'Eco-friendly Inks', description: 'We use water-based and soy-based inks that are better for the environment.' },
]

export default function Sustainability() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-400 to-teal-600 p-24">
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
          className="text-5xl font-bold text-white mb-8"
        >
          Our Commitment to Sustainability
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-white mb-12"
        >
          At Arbab Pack Ltd, we are dedicated to reducing our environmental impact and promoting sustainable packaging solutions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 2), duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-teal-600">{initiative.title}</h2>
              <p className="text-gray-700">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
