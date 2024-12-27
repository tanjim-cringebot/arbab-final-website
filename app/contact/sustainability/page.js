'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaHandshake, FaLightbulb } from 'react-icons/fa'

export default function SustainabilityForm() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    initiativeName: '',
    objective: '',
    focusAreas: [],
    targetAudience: '',
    supportType: [],
    proposedActivities: '',
    timeline: '',
    expectedOutcomes: '',
    additionalInfo: ''
  })

  const focusAreaOptions = [
    "Waste Reduction",
    "Recycling",
    "Education",
    "Circular Economy",
    "Green Events",
    "Sustainable Innovations",
    "Others"
  ]

  const supportTypeOptions = [
    "Sustainable Packaging Design",
    "Event Sponsorship",
    "Resource Sharing",
    "Technical Support",
    "Partnership Programs",
    "Educational Initiatives"
  ]

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
            className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaLeaf className="text-3xl text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sustainability Stewardship Program
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us in fostering a sustainable future through eco-friendly practices and innovative solutions. 
            Whether you&apos;re a startup, university, or organization, let&apos;s collaborate for a greener tomorrow.
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
              <FaHandshake className="text-emerald-600" />
              Organization Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  placeholder="Your organization name"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
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
                           focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
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
                           focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
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
                           focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  placeholder="Your contact number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Initiative Details */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 flex items-center gap-2">
              <FaLightbulb className="text-emerald-600" />
              Initiative Details
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Initiative Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  placeholder="Name of your project or event"
                  value={formData.initiativeName}
                  onChange={(e) => setFormData({...formData, initiativeName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Objective
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  rows="4"
                  placeholder="Describe the goals and purpose of your initiative"
                  value={formData.objective}
                  onChange={(e) => setFormData({...formData, objective: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Focus Areas
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {focusAreaOptions.map((area) => (
                    <div key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        id={area}
                        className="w-4 h-4 text-emerald-600 border-gray-300 rounded 
                                 focus:ring-emerald-500"
                        checked={formData.focusAreas.includes(area)}
                        onChange={(e) => {
                          const updatedAreas = e.target.checked
                            ? [...formData.focusAreas, area]
                            : formData.focusAreas.filter(a => a !== area)
                          setFormData({...formData, focusAreas: updatedAreas})
                        }}
                      />
                      <label htmlFor={area} className="ml-2 text-sm text-gray-700">
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Audience/Beneficiaries
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  placeholder="e.g., students, local communities, industries"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Support Details */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 flex items-center gap-2">
              <FaLeaf className="text-emerald-600" />
              Support Details
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Support Needed
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {supportTypeOptions.map((type) => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={type}
                        className="w-4 h-4 text-emerald-600 border-gray-300 rounded 
                                 focus:ring-emerald-500"
                        checked={formData.supportType.includes(type)}
                        onChange={(e) => {
                          const updatedTypes = e.target.checked
                            ? [...formData.supportType, type]
                            : formData.supportType.filter(t => t !== type)
                          setFormData({...formData, supportType: updatedTypes})
                        }}
                      />
                      <label htmlFor={type} className="ml-2 text-sm text-gray-700">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Proposed Activities
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  rows="4"
                  placeholder="Outline key activities for your initiative"
                  value={formData.proposedActivities}
                  onChange={(e) => setFormData({...formData, proposedActivities: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  placeholder="Expected start and end dates"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Outcomes
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  rows="4"
                  placeholder="Describe the measurable impact of your initiative"
                  value={formData.expectedOutcomes}
                  onChange={(e) => setFormData({...formData, expectedOutcomes: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                rows="4"
                placeholder="Any other relevant details about your initiative"
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
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold
                     hover:bg-emerald-700 transition-colors duration-300"
          >
            Submit Initiative Proposal
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
} 