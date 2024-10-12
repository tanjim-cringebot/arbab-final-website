'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaLeaf, FaPalette, FaCog, FaRecycle, FaBoxOpen, FaTruck } from 'react-icons/fa'
import Hero from '../components/Hero'  // Import the Hero component

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero />  {/* Add the Hero component here */}

      {/* Existing Sections */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Innovative Packaging Solutions
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Sustainable, customizable, and efficient packaging for your business needs.
            </motion.p>
            <motion.div 
              className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/products" className="rounded-md bg-white text-indigo-600 px-8 py-3 text-base font-medium hover:bg-gray-50 md:py-4 md:text-lg md:px-10 flex items-center">
                <FaBoxOpen className="mr-2" /> Our Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12"
              variants={fadeInUp}
            >
              Why Choose Arbab Pack Ltd?
            </motion.h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: FaLeaf, title: 'Sustainable Materials', description: 'We prioritize eco-friendly packaging solutions, using recycled and biodegradable materials to minimize environmental impact.' },
                { icon: FaPalette, title: 'Custom Designs', description: 'Our team of expert designers create tailored packaging that perfectly fits your brand identity and product requirements.' },
                { icon: FaCog, title: 'Efficient Production', description: 'State-of-the-art technology and streamlined processes ensure quick turnaround times without compromising on quality.' },
                { icon: FaRecycle, title: 'Circular Economy', description: 'We promote a circular economy by designing packaging that is easy to recycle and reuse, reducing waste in the long term.' },
                { icon: FaBoxOpen, title: 'Diverse Product Range', description: 'From corrugated boxes to flexible packaging, we offer a wide range of solutions to meet diverse industry needs.' },
                { icon: FaTruck, title: 'Reliable Logistics', description: 'Our robust supply chain ensures timely delivery of your packaging materials, keeping your production on schedule.' },
              ].map((feature, index) => (
                <motion.div key={feature.title} className="pt-6" variants={fadeInUp}>
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg transform -translate-y-1/2">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-indigo-300">Contact us today for a quote.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Let's work together to create the perfect packaging solution for your products.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          >
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                <FaBoxOpen className="mr-2" /> Get in touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
