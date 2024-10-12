'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const products = [
  { title: 'Corrugated Boxes', description: 'Durable and customizable corrugated packaging solutions.' },
  { title: 'Flexible Packaging', description: 'Versatile and lightweight packaging for various products.' },
  { title: 'Rigid Boxes', description: 'Premium packaging for high-end products and gifts.' },
  { title: 'Eco-Friendly Packaging', description: 'Sustainable packaging options made from recycled materials.' },
]

export default function Products() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-600 p-24">
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
          Our Products
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 2), duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">{product.title}</h2>
              <p className="text-gray-700">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
