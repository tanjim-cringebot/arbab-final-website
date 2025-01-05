'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa'

export default function SubmitInnovation() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: '',
    email: '',
    phone: '',
    company: '',
    
    // Idea Overview
    title: '',
    briefDescription: '',
    
    // Categories
    categories: {
      packageEnhancement: {
        selected: false,
        subcategories: {
          printing: false,
          sustainability: false,
          protection: false
        }
      },
      manufacturing: {
        selected: false,
        subcategories: {
          efficiency: false,
          wastePrevention: false
        }
      },
      shelfLife: {
        selected: false,
        subcategories: {
          preservation: false,
          coating: false
        }
      },
      smartPackaging: {
        selected: false
      },
      branding: {
        selected: false
      },
      transitPackaging: {
        selected: false,
        subcategories: {
          strapping: false,
          protective: false,
          stretchWrap: false
        }
      }
    },
    
    // Detailed Description
    detailedDescription: '',
    
    // Supporting Materials
    hasSupportingMaterials: false,
    supportingFiles: [],
    
    // Terms
    acceptTerms: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Background Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/product-portfolio" className="text-blue-300 flex items-center mb-16 hover:text-blue-100 transition duration-300">
          <FaArrowLeft className="w-5 h-5 mr-2" /> Back to Products
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Submit Your Idea</h1>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            Please fill out the following details to submit your idea to ARBAB PACK Ltd.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Contact Information */}
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-blue-400/30 rounded-lg p-3 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-blue-400/30 rounded-lg p-3 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-blue-400/30 rounded-lg p-3 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white/5 border border-blue-400/30 rounded-lg p-3 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="(if applicable)"
                />
              </div>
            </div>
          </div>

          {/* Idea Overview */}
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Idea Overview</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Idea Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-white/5 border border-blue-400/30 rounded-lg p-3 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Brief Description *</label>
                <textarea
                  required
                  value={formData.briefDescription}
                  onChange={(e) => setFormData({ ...formData, briefDescription: e.target.value })}
                  rows={3}
                  className="w-full bg-white/5 border border-blue-400/30 rounded-lg p-3 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Provide a short summary of your idea in 2–3 sentences"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Category of Interest</h2>
            <div className="space-y-6">
              {/* Package Enhancement */}
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.categories.packageEnhancement.selected}
                    onChange={(e) => {
                      const newCategories = { ...formData.categories }
                      newCategories.packageEnhancement.selected = e.target.checked
                      setFormData({ ...formData, categories: newCategories })
                    }}
                    className="w-4 h-4 rounded border-blue-400/30 bg-white/5 text-blue-600"
                  />
                  <span className="text-white font-medium">Package Enhancement</span>
                </label>
                {formData.categories.packageEnhancement.selected && (
                  <div className="ml-7 space-y-3">
                    {Object.entries({
                      printing: 'New printing and decoration technologies',
                      sustainability: 'Improved sustainability',
                      protection: 'Enhanced product protection or user experience'
                    }).map(([key, label]) => (
                      <label key={key} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.categories.packageEnhancement.subcategories[key]}
                          onChange={(e) => {
                            const newCategories = { ...formData.categories }
                            newCategories.packageEnhancement.subcategories[key] = e.target.checked
                            setFormData({ ...formData, categories: newCategories })
                          }}
                          className="w-4 h-4 rounded border-blue-400/30 bg-white/5 text-blue-600"
                        />
                        <span className="text-blue-300">{label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Continue with other categories in the same pattern... */}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Detailed Description</h2>
            <textarea
              required
              value={formData.detailedDescription}
              onChange={(e) => setFormData({ ...formData, detailedDescription: e.target.value })}
              rows={8}
              className="w-full bg-white/5 border border-blue-400/30 rounded-lg p-3 text-white 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Please provide detailed non-confidential information about your idea, including its potential benefits, functionality, and alignment with ARBAB PACK Ltd.'s areas of interest..."
            />
          </div>

          {/* Supporting Materials */}
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Supporting Materials</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    checked={formData.hasSupportingMaterials}
                    onChange={() => setFormData({ ...formData, hasSupportingMaterials: true })}
                    className="w-4 h-4 border-blue-400/30 bg-white/5 text-blue-600"
                  />
                  <span className="text-blue-300">Yes</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    checked={!formData.hasSupportingMaterials}
                    onChange={() => setFormData({ ...formData, hasSupportingMaterials: false })}
                    className="w-4 h-4 border-blue-400/30 bg-white/5 text-blue-600"
                  />
                  <span className="text-blue-300">No</span>
                </label>
              </div>
              {formData.hasSupportingMaterials && (
                <div>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={(e) => setFormData({ ...formData, supportingFiles: Array.from(e.target.files) })}
                    className="block w-full text-blue-300 
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-blue-600 file:text-white
                             hover:file:bg-blue-700"
                  />
                  <p className="mt-2 text-sm text-blue-400">File types allowed: PDF, PNG, JPG; Max size: 10MB</p>
                </div>
              )}
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Submission Terms</h2>
              <div className="space-y-4">
                <p className="text-blue-300">By submitting this form, I acknowledge that:</p>
                <ul className="list-disc list-inside text-blue-300 space-y-2 ml-4">
                  <li>I am submitting non-confidential information.</li>
                  <li>ARBAB PACK Ltd. may require a confidentiality agreement if the idea progresses to further stages.</li>
                  <li>My submission aligns with ARBAB PACK Ltd.&apos;s areas of interest and excludes unrelated ideas or categories.</li>
                </ul>
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    required
                    id="terms"
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    className="w-4 h-4 rounded border-blue-400/30 bg-white/5 text-blue-600"
                  />
                  <label htmlFor="terms" className="ml-2 text-blue-300">
                    I agree to the submission terms *
                  </label>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg
                       hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Submit Your Idea
              <FaPaperPlane className="ml-2" />
            </motion.button>

            <p className="text-center text-blue-300 text-sm">
              Once submitted, you will receive an email confirmation. The assessment process typically takes up to 30 days.
            </p>
          </div>
        </motion.form>
      </div>
    </main>
  )
} 