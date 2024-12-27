'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const OrderForm = () => {
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
    'Food Packaging',
    'Hygiene Packaging',
    'Beverage Packaging',
    'Industrial Packaging',
    'Other'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/90 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-8 border border-white/[0.05]
                   shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Place Your Order</h1>
          <p className="text-blue-100/80 mb-8">
            We offer a range of packaging solutions tailored to your needs. To place an order, please provide the following details:
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Name/Business Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-blue-500
                           transition-colors duration-300"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                />
                <p className="text-xs text-white/50">Identify yourself or your company for our records</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-blue-500
                           transition-colors duration-300"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <p className="text-xs text-white/50">Your contact email for updates and communication</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-blue-500
                           transition-colors duration-300"
                  placeholder="+1 (234) 567-8900"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <p className="text-xs text-white/50">A valid number for real-time support if needed</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Product Line
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white focus:outline-none focus:border-blue-500
                           transition-colors duration-300"
                  value={formData.productLine}
                  onChange={(e) => setFormData({...formData, productLine: e.target.value})}
                >
                  <option value="" className="bg-gray-900">Select a product line</option>
                  {productLines.map((line) => (
                    <option key={line} value={line} className="bg-gray-900">
                      {line}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-white/50">Choose from our offerings (e.g., food packaging, hygiene packaging, etc.)</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Product Type
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-blue-500
                           transition-colors duration-300"
                  placeholder="e.g., milk powder packaging"
                  value={formData.productType}
                  onChange={(e) => setFormData({...formData, productType: e.target.value})}
                />
                <p className="text-xs text-white/50">Specify the exact product(s) (e.g., milk powder packaging, detergent packaging)</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Quantity Required
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-blue-500
                           transition-colors duration-300"
                  placeholder="Enter quantity"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                />
                <p className="text-xs text-white/50">Provide the order quantity for better accuracy in processing</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Customization Details
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-blue-500
                           transition-colors duration-300 min-h-[100px]"
                  placeholder="Enter your customization requirements"
                  value={formData.customization}
                  onChange={(e) => setFormData({...formData, customization: e.target.value})}
                />
                <p className="text-xs text-white/50">Mention special requests such as material, size, or design specifications</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Delivery Address
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-blue-500
                           transition-colors duration-300"
                  placeholder="Enter delivery address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
                <p className="text-xs text-white/50">Mention your preferred delivery location</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Additional Notes
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1]
                           text-white placeholder-white/40 focus:outline-none focus:border-blue-500
                           transition-colors duration-300"
                  placeholder="Any additional instructions or requirements"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
                <p className="text-xs text-white/50">Add any other instructions or requirements</p>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600
                       text-white font-medium hover:from-blue-600 hover:to-blue-700
                       transition-all duration-300 shadow-lg"
            >
              Submit Order Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default OrderForm 