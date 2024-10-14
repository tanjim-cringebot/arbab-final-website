'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { FaLeaf, FaRecycle, FaSolarPanel, FaWater, FaTree, FaChartLine } from 'react-icons/fa'

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    className={`bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600 ${className}`}
  >
    {children}
  </motion.h2>
);

const initiatives = [
  { icon: FaLeaf, title: 'Eco-friendly Materials', description: 'We prioritize the use of recycled and biodegradable materials in our packaging products.' },
  { icon: FaRecycle, title: 'Circular Economy', description: 'Our products are designed for easy recycling and reuse, promoting a circular economy.' },
  { icon: FaSolarPanel, title: 'Renewable Energy', description: 'We are transitioning to 100% renewable energy sources in our manufacturing processes.' },
  { icon: FaWater, title: 'Water Conservation', description: 'Implementing water-saving technologies and practices throughout our operations.' },
  { icon: FaTree, title: 'Reforestation Projects', description: 'We actively participate in reforestation initiatives to offset our carbon footprint.' },
  { icon: FaChartLine, title: 'Continuous Improvement', description: 'Constantly innovating to reduce our environmental impact and improve sustainability.' },
]

export default function Sustainability() {
  const [selectedInitiative, setSelectedInitiative] = useState(null)

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
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
          Sustainability at Arbab Pack
        </motion.h1>

        <section className="mb-24">
          <SectionTitle>Our Green Vision</SectionTitle>
          <GlassCard>
            <p className="text-xl text-teal-200 mb-8 text-center">
              At Arbab Pack Ltd, we are committed to leading the packaging industry towards a more sustainable future. Our innovative approach combines cutting-edge technology with eco-friendly practices to create packaging solutions that protect both your products and our planet.
            </p>
          </GlassCard>
        </section>

        <section className="mb-24">
          <SectionTitle>Sustainability Initiatives</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                onClick={() => setSelectedInitiative(initiative)}
              >
                <GlassCard className="h-full cursor-pointer">
                  <initiative.icon className="text-4xl text-teal-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-300">{initiative.title}</h3>
                  <p className="text-teal-200">{initiative.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <SectionTitle>Our Impact</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '50%', label: 'Reduction in Carbon Emissions' },
              { value: '75%', label: 'Recycled Materials Used' },
              { value: '1M+', label: 'Trees Planted' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <GlassCard className="text-center">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    <span className="text-5xl font-bold text-teal-400">{stat.value}</span>
                  </motion.div>
                  <p className="text-xl text-emerald-200 mt-4">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <SectionTitle>Sustainable Product Showcase</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Biodegradable Packaging', description: 'Our latest line of fully biodegradable packaging materials.' },
              { title: 'Recycled Plastic Containers', description: 'Durable containers made from 100% recycled ocean plastics.' },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard>
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-300">{product.title}</h3>
                  <p className="text-teal-200 mb-4">{product.description}</p>
                  <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-lg" />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <SectionTitle>Join Our Green Journey</SectionTitle>
          <GlassCard className="text-center">
            <p className="text-xl text-teal-200 mb-8">
              Partner with us to make your packaging more sustainable and contribute to a greener future.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition duration-300 inline-block"
              >
                Get Started
              </Link>
            </motion.div>
          </GlassCard>
        </section>
      </div>

      <AnimatePresence>
        {selectedInitiative && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedInitiative(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-xl p-8 max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <selectedInitiative.icon className="text-5xl text-teal-400 mb-4" />
              <h3 className="text-3xl font-semibold mb-4 text-emerald-300">{selectedInitiative.title}</h3>
              <p className="text-teal-200 mb-6">{selectedInitiative.description}</p>
              <button
                className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 rounded-full font-semibold hover:from-teal-600 hover:to-emerald-600 transition duration-300"
                onClick={() => setSelectedInitiative(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}