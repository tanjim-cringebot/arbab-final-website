'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHandshake, FaRecycle, FaLeaf } from 'react-icons/fa'

export default function CollaborationForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    currentChallenges: '',
    sustainabilityGoals: '',
    specifications: '',
    timeline: '',
    additionalInfo: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaHandshake className="text-3xl text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Collaborate on Sustainable Packaging
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to designing eco-friendly packaging solutions that align with global 
            sustainability goals. Let&apos;s work together to create a greener future.
          </p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
        >
          {/* Organization Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 flex items-center gap-2">
              <FaHandshake className="text-green-600" />
              Organization Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  placeholder="Your company name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  placeholder="Primary contact name"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  placeholder="Your contact number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 flex items-center gap-2">
              <FaRecycle className="text-green-600" />
              Project Details
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Packaging Challenges
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  rows="4"
                  placeholder="Describe your current packaging challenges and pain points"
                  value={formData.currentChallenges}
                  onChange={(e) => setFormData({...formData, currentChallenges: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sustainability Goals
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  rows="4"
                  placeholder="What are your goals for sustainable packaging? (e.g., recyclability, biodegradable materials)"
                  value={formData.sustainabilityGoals}
                  onChange={(e) => setFormData({...formData, sustainabilityGoals: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specifications & Requirements
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  rows="4"
                  placeholder="Share any existing specifications or requirements for your packaging"
                  value={formData.specifications}
                  onChange={(e) => setFormData({...formData, specifications: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Timeline
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  placeholder="Expected timeline for implementation"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 flex items-center gap-2">
              <FaLeaf className="text-green-600" />
              Additional Information
            </h2>
            
            <div>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                rows="4"
                placeholder="Any other information you'd like to share"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold
                     hover:bg-green-700 transition-colors duration-300"
          >
            Submit Collaboration Request
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
} 