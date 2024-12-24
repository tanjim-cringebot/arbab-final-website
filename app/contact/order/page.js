'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaShoppingCart } from 'react-icons/fa'

export default function OrderForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    productLine: '',
    productType: '',
    customization: '',
    quantity: '',
    address: '',
    notes: ''
  })

  const productLines = [
    "Food Packaging",
    "Personal Care & Hygiene",
    "Beverages",
    "Pharmaceutical Products",
    "Household Products",
    "Tobacco Industry Packaging"
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
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
            className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaShoppingCart className="text-3xl text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Place an Order</h1>
          <p className="text-lg text-gray-600">
            We offer a range of packaging solutions tailored to your needs. 
            Please provide the following details to process your order.
          </p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          {/* Business Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
              Business Information
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
                           focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your company name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
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
                           focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
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
                           focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your contact number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
              Product Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Line
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  value={formData.productLine}
                  onChange={(e) => setFormData({...formData, productLine: e.target.value})}
                >
                  <option value="">Select a product line</option>
                  {productLines.map((line) => (
                    <option key={line} value={line}>{line}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Type
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="e.g., milk powder packaging"
                  value={formData.productType}
                  onChange={(e) => setFormData({...formData, productType: e.target.value})}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customization Details
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  rows="3"
                  placeholder="Specify material, size, or design requirements"
                  value={formData.customization}
                  onChange={(e) => setFormData({...formData, customization: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity Required
                </label>
                <input
                  type="number"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Enter quantity"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
              Delivery Information
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address
              </label>
              <textarea
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                rows="3"
                placeholder="Enter your complete delivery address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                rows="3"
                placeholder="Any other instructions or requirements"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                     hover:bg-blue-700 transition-colors duration-300"
          >
            Submit Order Request
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
} 