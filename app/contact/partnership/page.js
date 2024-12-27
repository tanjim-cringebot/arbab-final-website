'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaRecycle, FaHandshake } from 'react-icons/fa';

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    email: '',
    phone: '',
    currentChallenges: '',
    sustainabilityGoals: '',
    specifications: '',
    timeline: '',
    additionalInfo: ''
  });

  const industries = [
    'Food & Beverage',
    'Cosmetics & Personal Care',
    'Pharmaceuticals',
    'Retail',
    'E-commerce',
    'Industrial',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900/70 to-gray-900">
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
              className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20
                       flex items-center justify-center"
            >
              <FaHandshake className="text-3xl text-emerald-400" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-4">Sustainable Partnership</h1>
            <p className="text-emerald-100/80 max-w-2xl mx-auto">
              We are committed to designing eco-friendly packaging solutions that align with global sustainability goals. 
              If you&apos;re in an industry seeking to minimize waste and contribute to a greener future, let&apos;s work together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Business Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-emerald-500
                           transition-colors duration-300"
                  placeholder="Your company name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Industry
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white focus:outline-none focus:border-emerald-500
                           transition-colors duration-300"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                >
                  <option value="" className="bg-gray-900">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry} className="bg-gray-900">
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-emerald-500
                           transition-colors duration-300"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-emerald-500
                           transition-colors duration-300"
                  placeholder="Your contact number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Current Packaging Challenges
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-emerald-500
                           transition-colors duration-300 min-h-[100px]"
                  placeholder="Describe your current packaging challenges and pain points..."
                  value={formData.currentChallenges}
                  onChange={(e) => setFormData({...formData, currentChallenges: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Sustainability Goals
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-emerald-500
                           transition-colors duration-300 min-h-[100px]"
                  placeholder="What are your sustainability goals? (e.g., recyclability, biodegradable materials)"
                  value={formData.sustainabilityGoals}
                  onChange={(e) => setFormData({...formData, sustainabilityGoals: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Specifications & Requirements
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-emerald-500
                           transition-colors duration-300 min-h-[100px]"
                  placeholder="Share any existing specifications or requirements..."
                  value={formData.specifications}
                  onChange={(e) => setFormData({...formData, specifications: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Additional Information
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-emerald-500
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
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600
                       text-white font-medium hover:from-emerald-600 hover:to-emerald-700
                       transition-all duration-300 shadow-lg"
            >
              Submit Partnership Proposal
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnershipForm; 