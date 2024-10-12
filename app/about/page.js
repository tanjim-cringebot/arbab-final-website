'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-24">
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
          About Arbab Pack Ltd
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-white mb-8"
        >
          Arbab Pack Ltd is a leading packaging solutions provider, offering innovative and sustainable packaging products for various industries.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-700">
            To deliver high-quality, eco-friendly packaging solutions that meet our clients' needs while minimizing environmental impact.
          </p>
        </motion.div>
      </motion.div>
    </main>
  )
}
