'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHandsHelping, FaLightbulb, FaGlobeAmericas } from 'react-icons/fa';

const CSRForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    initiativeType: '',
    contactPerson: '',
    email: '',
    phone: '',
    projectObjectives: '',
    focusAreas: [],
    supportType: [],
    timeline: '',
    impact: '',
    additionalInfo: ''
  });

  const initiativeTypes = [
    'Startup Project',
    'University Event',
    'NGO Initiative',
    'Industry Project',
    'Research Program',
    'Community Event',
    'Other'
  ];

  const focusAreas = [
    'Waste Reduction',
    'Eco-friendly Events',
    'Sustainable Innovations',
    'Environmental Education',
    'Community Engagement',
    'Green Technology',
    'Circular Economy'
  ];

  const supportTypes = [
    'Sustainable Packaging Design',
    'Event Sponsorship',
    'Technical Expertise',
    'Resource Sharing',
    'Partnership Program',
    'Mentorship'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900/70 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-8 border border-white/[0.05]
                   shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20
                       flex items-center justify-center"
            >
              <FaGlobeAmericas className="text-3xl text-green-400" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-4">Sustainability Stewardship Program</h1>
            <p className="text-green-100/80 max-w-2xl mx-auto mb-6">
              At Arbab Pack Limited (APL), we are committed to fostering a sustainable future. Through our Sustainability 
              Stewardship Program, we aim to support initiatives that promote eco-friendly practices and innovative 
              solutions for a greener tomorrow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
              {[
                {
                  icon: FaLeaf,
                  title: "Custom Solutions",
                  desc: "Sustainable packaging design for eco-conscious organizations"
                },
                {
                  icon: FaHandsHelping,
                  title: "Green Events",
                  desc: "Partnerships for sustainability awareness and education"
                },
                {
                  icon: FaLightbulb,
                  title: "Expert Guidance",
                  desc: "Resource sharing and innovative solutions"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                >
                  <item.icon className="text-2xl text-green-400 mb-2" />
                  <h3 className="text-white font-medium mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Organization Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-green-500
                           transition-colors duration-300"
                  placeholder="Your organization name"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Initiative Type
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white focus:outline-none focus:border-green-500
                           transition-colors duration-300"
                  value={formData.initiativeType}
                  onChange={(e) => setFormData({...formData, initiativeType: e.target.value})}
                >
                  <option value="" className="bg-gray-900">Select initiative type</option>
                  {initiativeTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Contact Person
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-green-500
                           transition-colors duration-300"
                  placeholder="Full name"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-green-500
                           transition-colors duration-300"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Project Objectives
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-green-500
                           transition-colors duration-300 min-h-[100px]"
                  placeholder="Describe your initiative's main objectives and goals..."
                  value={formData.projectObjectives}
                  onChange={(e) => setFormData({...formData, projectObjectives: e.target.value})}
                />
              </div>

              {/* Focus Areas */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Focus Areas
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {focusAreas.map((area) => (
                    <label key={area} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox rounded text-green-500 bg-white/10 border-white/20"
                        checked={formData.focusAreas.includes(area)}
                        onChange={(e) => {
                          const newAreas = e.target.checked
                            ? [...formData.focusAreas, area]
                            : formData.focusAreas.filter(a => a !== area);
                          setFormData({...formData, focusAreas: newAreas});
                        }}
                      />
                      <span className="text-sm text-white/70">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Support Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80 mb-2">
                  How can APL support you?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {supportTypes.map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox rounded text-green-500 bg-white/10 border-white/20"
                        checked={formData.supportType.includes(type)}
                        onChange={(e) => {
                          const newTypes = e.target.checked
                            ? [...formData.supportType, type]
                            : formData.supportType.filter(t => t !== type);
                          setFormData({...formData, supportType: newTypes});
                        }}
                      />
                      <span className="text-sm text-white/70">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Expected Impact
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-green-500
                           transition-colors duration-300 min-h-[100px]"
                  placeholder="Describe the expected impact of your initiative..."
                  value={formData.impact}
                  onChange={(e) => setFormData({...formData, impact: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Additional Information
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-green-500
                           transition-colors duration-300"
                  placeholder="Any other details you'd like to share..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-green-500 to-green-600
                       text-white font-medium hover:from-green-600 hover:to-green-700
                       transition-all duration-300 shadow-lg"
            >
              Submit Initiative Proposal
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CSRForm; 