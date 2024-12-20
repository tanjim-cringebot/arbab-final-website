'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaUtensils, FaPumpSoap, FaWineBottle, FaPills, FaHome, FaSmoking, FaArrowRight, FaChevronLeft, FaArrowLeft, FaCog, FaPalette, FaRuler, FaBoxOpen } from 'react-icons/fa'
import ProductPortfolioBG from '../../public/images/product_bg.jpg'

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-5xl md:text-7xl font-bold mb-16 text-blue-900 ${className}`}
  >
    {children}
  </motion.h2>
);

const CategoryIcon = ({ icon: Icon }) => (
  <div className="bg-blue-100 p-4 rounded-full">
    <Icon className="text-3xl text-blue-600" />
  </div>
);

export default function ProductPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customizationProduct, setCustomizationProduct] = useState({
    type: 'food-packaging',
    size: 'medium',
    material: 'plastic',
    color: '#2563eb',
    quantity: 1000
  });

  const customizationControls = useAnimation();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setSelectedProduct(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    if (selectedProduct) {
      setSelectedProduct(null);
    } else if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(null);
    }
  };

  const handleCustomizationChange = (field, value) => {
    setCustomizationProduct(prev => ({
      ...prev,
      [field]: value
    }));
    customizationControls.start({
      scale: [1, 1.02, 1],
      transition: { duration: 0.3 }
    });
  };

  const categories = [
    {
      title: "FOOD PACKAGING",
      icon: FaUtensils,
      description: "Innovative packaging solutions for the food industry, ensuring freshness and safety.",
      subcategories: [
        {
          name: "Dairy Products",
          items: [
            { title: "Milk Powder Packaging", 
              description: "Airtight, moisture-proof packaging for milk powder, often in multilayer pouches to preserve freshness and extend shelf life.",
              image: '/images/products/milk_powder.jpg'
            },
            { title: "Butter Packaging", 
              description: "Foil-wrapped blocks designed to protect against light and oxygen, ensuring product integrity.",
              image: '/images/products/butter.jpg'
            },
            { title: "Yogurt Packaging", 
              description: "Plastic containers with resealable lids or foil seals, often designed with portion control for single servings.",
              image: '/images/products/yogurt.jpg'
            }
          ]
        },
        {
          name: "Snacks",
          items: [
            { title: "Chips Packaging", 
              description: "Air-tight, nitrogen-filled pouches or bags designed to keep products fresh and crunchy.",
              image: '/images/products/chips.jpg'
             },
            { title: "Chanachur Packaging", 
              description: "Moisture-proof, resealable pouches for preserving the crunch and flavor of spiced snacks like Chanachur.",
              image: '/images/products/chanachur.jpg'
            },
            { title: "Instant Noodles Packaging", 
              description: "Packaging for single or multi-serve noodles, often in heat-resistant cups or pillow packs.",
              image: '/images/products/instant_noodles.jpeg'
            }
          ]
        },
        {
          name: "Condiments",
          items: [
            { title: "Sauce and Ketchup Packaging", 
              description: "Sachets designed for preserving viscosity and flavor. Often comes with user-friendly squeeze options.",
              image: '/images/products/sauce_ketchup.jpg'
            },
            { title: "Spices Packaging", 
              description: "Airtight, resealable pouches designed to lock in aroma and flavor, using foil lining or multilayered for moisture and light protection.",
              image: '/images/products/spcies.jpeg'
            }
          ]
        },
        {
          name: "Instant Foods",
          items: [
            { title: "Instant Soup Packaging",
              description: "Heat-sealed foil pouches designed for quick heating. Often in single-serving or multi-serving packs.",
              image: '/images/products/instant_soup.jpg'
            },
            { title: "Tea Mixes and Coffee Mixes", 
              description: "Foil-sealed sachets with desiccant layers to maintain freshness and aroma.",
              image: '/images/products/tea_coffee.jpg'
            }
          ]
        }
      ]
    },
    {
      title: "PERSONAL CARE AND HYGIENE",
      icon: FaPumpSoap,
      description: "Packaging designed for personal care products, combining functionality with aesthetics.",
      subcategories: [
        {
          name: "Diapers",
          items: [
            { title: "Diaper Packaging", 
              description: "Durable designed to protect the product's integrity during transport. Often features resealable options for consumer convenience.",
              image: '/images/products/diaper.jpeg'
            }
          ]
        },
        {
          name: "Sanitary Products",
          items: [
            { title: "Sanitary Napkins Packaging", 
              description: "Individual sanitary pads wrapped in plastic or paper-based materials, with outer packs designed to ensure hygiene and easy storage.",
              image: '/images/products/sanitary_napkin.jpg'
            }
          ]
        },
        {
          name: "Soaps",
          items: [
            { title: "Bar Soap Packaging", 
              description: "Paper or plastic wraps, designed to keep the product fresh and uncontaminated.",
              image: '/images/products/bar_soap.jpg'
            },
            { title: "Detergent Packaging", 
              description: "Designed to keep moisture out and ensure ease of use. Larger quantities are often stored in buckets or resealable pouches.",
              image: '/images/products/detergent.jpg'
            }
          ]
        }
      ]
    },
    {
      title: "BEVERAGES",
      icon: FaWineBottle,
      description: "Diverse packaging options for all types of beverages, from bottles to cartons.",
      subcategories: [
        {
          name: "Tea and Coffee",
          items: [
            { title: "Instant Coffee Packaging", 
              description: "Vacuum-sealed sachets designed to lock in freshness, aroma, and flavor.",
              image: '/images/products/instant_coffee.jpg'
            },
            { title: "Tea Packet Packaging", 
              description: "Laminated foil pouches, paper sachets designed to preserve tea's aroma and quality. Sometimes includes individual tea bags for portion control.",
              image: '/images/products/tea_packet.jpg'
            }
          ]
        },
        {
          name: "Soft Drinks",
          items: [
            { title: "Flavored Powders Packaging", 
              description: "Sachets made from moisture-resistant materials. Often nitrogen-flushed to preserve the taste and nutritional quality.",
              image: '/images/products/flavored_powder.jpg'
            }
          ]
        }
      ]
    },
    {
      title: "PHARMACEUTICAL AND NUTRITIONAL PRODUCTS",
      icon: FaPills,
      description: "Specialized packaging for pharmaceuticals and nutritional supplements, prioritizing safety and compliance.",
      subcategories: [
        {
          name: "Nutritional Supplements",
          items: [
            { title: "Supplement Packaging", 
              description: "Airtight containers or blister packs designed to protect against moisture and maintain product efficacy.",
              image: '/images/products/supplements.jpg'
            },
            { title: "Protein Powders Packaging", 
              description: "Pouches, often foil-lined, to preserve product freshness and prevent exposure to moisture and air.",
              image: '/images/products/protein_powder.jpg'
            },
            { title: "Nutrition Food Packaging", 
              description: "Portion-controlled pouches designed to lock in vitamins and nutrients, often using multilayer packaging to extend shelf life.",
              image: '/images/products/nutrition_food.jpg'
            }
          ]
        }
      ]
    },
    {
      title: "HOUSEHOLD PRODUCTS",
      icon: FaHome,
      description: "Durable and practical packaging solutions for a wide range of household items.",
      subcategories: [
        {
          name: "Cleaning Supplies",
          items: [
            { title: "Cleaning Product Packaging", 
              description: "Durable containers with child-resistant caps for liquid cleaners and resealable pouches for powder products.",
              image: '/images/products/cleaning_product.png'
            },
            { title: "Detergent Packaging", 
              description: "Pouches with resealable options, boxes for powdered detergents, and liquid detergents often come in bottles with easy-pour caps.",
              image: '/images/products/detergent.jpg'
            },
            { title: "Cleaning Agent Packaging", 
              description: "Pouches or refillable options designed for ease of use and protection against spills or evaporation.",
              image: '/images/products/cleaning_agent.png'
            }
          ]
        },
        {
          name: "Paper Products",
          items: [
            { title: "Tissue Paper and Towel Packaging", 
              description: "Soft packs with resealable options for consumer convenience. Bulk packages of tissues are often wrapped in plastic for storage.",
              image: '/images/products/tissue_paper.jpg'
            },
            { title: "Paper Sheets Packaging", 
              description: "Thin, protective wrapping designed to prevent moisture and contamination, often using shrink wrap or paper-based materials.",
              image: '/images/products/paper_sheets.jpg'
            }
          ]
        }
      ]
    },
    {
      title: "TOBACCO INDUSTRY PACKAGING",
      icon: FaSmoking,
      description: "Compliant and innovative packaging solutions for the tobacco industry.",
      subcategories: [
        {
          name: "Cigarette Packaging",
          items: [
            { title: "Hard Packs", 
              description: "Durable, crush-proof packs with sleek designs for premium cigarette brands. Often made with high-quality paperboard and featuring metallic finishes, embossing, or holographic effects.",
              image: '/images/products/hard_pack.jpg'
            },
            { title: "Soft Packs", 
              description: "Flexible, soft packaging for cigarettes, usually with foil-lined inner layers to preserve freshness.",
              image: '/images/products/soft_pack.jpg'
            }
          ]
        }
      ]
    }
  ];

  // Add this pricing configuration after the initial state declarations
  const materialPricing = {
    plastic: {
      small: 1.50,
      medium: 2.50,
      large: 3.50
    },
    paper: {
      small: 1.00,
      medium: 1.75,
      large: 2.50
    },
    biodegradable: {
      small: 2.00,
      medium: 3.25,
      large: 4.50
    }
  };

  // Add this calculation function
  const calculateTotalPrice = () => {
    const basePrice = materialPricing[customizationProduct.material][customizationProduct.size];
    return basePrice * customizationProduct.quantity;
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white text-blue-900 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/" className="text-blue-600 flex items-center mb-16 hover:text-blue-800 transition duration-300">
          <FaArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-blue-900">Our Products</h1>
        
        <p className="text-xl text-blue-600 mb-16 text-center max-w-3xl mx-auto">
          Discover our comprehensive range of packaging solutions designed to meet the unique needs of various industries.
        </p>

        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src={ProductPortfolioBG}
            alt="Product Portfolio Background"
            layout="fill"
            objectFit="cover"
            className="opacity-10"
          />

          <div className="relative z-10 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div 
                className="w-full md:w-1/4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleCategoryClick(category)}
                    className={`flex items-center w-full p-4 mb-4 rounded-lg transition-colors ${
                      selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-blue-900 hover:bg-blue-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CategoryIcon icon={category.icon} />
                    <span className="ml-4 text-lg font-semibold">{category.title}</span>
                  </motion.button>
                ))}
              </motion.div>

              <div className="w-full md:w-3/4">
                <AnimatePresence mode="wait">
                  {selectedCategory && !selectedSubcategory && !selectedProduct && (
                    <motion.div
                      key="category"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-3xl font-bold mb-8">{selectedCategory.title}</h3>
                      <p className="text-xl mb-8">{selectedCategory.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {selectedCategory.subcategories.map((subcategory, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleSubcategoryClick(subcategory)}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <h4 className="text-2xl font-semibold mb-4">{subcategory.name}</h4>
                            <p className="text-blue-600">{subcategory.items.length} products</p>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {selectedSubcategory && !selectedProduct && (
                    <motion.div
                      key="subcategory"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <button onClick={handleBack} className="mb-8 text-blue-600 flex items-center">
                        <FaChevronLeft className="mr-2" /> Back to {selectedCategory.title}
                      </button>
                      <h3 className="text-3xl font-bold mb-8">{selectedSubcategory.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {selectedSubcategory.items.map((product, index) => (
                          <motion.div
                            key={index}
                            onClick={() => handleProductClick(product)}
                            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer overflow-hidden flex flex-col"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="relative h-40 md:h-48 lg:h-56">
                              <Image
                                src={product.image || '/images/default-product.jpg'}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                              <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
                              <p className="text-blue-600 text-sm line-clamp-3 flex-grow">{product.description}</p>
                              <div className="mt-4">
                                <span className="text-blue-500 text-sm font-medium">Learn More →</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {selectedProduct && (
                    <motion.div
                      key="product"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <button onClick={handleBack} className="mb-8 text-blue-600 flex items-center">
                        <FaChevronLeft className="mr-2" /> Back to {selectedSubcategory.name}
                      </button>
                      <div className="bg-white p-8 rounded-lg shadow-xl">
                        <div className="mb-8 rounded-lg overflow-hidden max-w-2xl mx-auto">
                          <Image
                            src={selectedProduct.image || '/images/default-product.jpg'}
                            alt={selectedProduct.title}
                            width={400}
                            height={200}
                            layout="responsive"
                            objectFit="contain"
                          />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{selectedProduct.title}</h3>
                        <p className="text-xl text-blue-600 mb-8">{selectedProduct.description}</p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center"
                          >
                            Request Quote <FaArrowRight className="ml-2" />
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-32 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Customize Your Packaging</h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Explore our interactive tool to visualize and customize your perfect packaging solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
            <div className="space-y-8">
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <FaBoxOpen className="text-3xl text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold">Package Type</h3>
                </div>
                <select
                  value={customizationProduct.type}
                  onChange={(e) => handleCustomizationChange('type', e.target.value)}
                  className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="food-packaging">Food Packaging</option>
                  <option value="beverage-packaging">Personal Care & Hygiene</option>
                  <option value="personal-care">Beverages</option>
                  <option value="personal-care">Pharmaceutical & Nutritional Products</option>
                  <option value="personal-care">Household Products</option>
                  <option value="personal-care">Tobacco Industry Packaging</option>
                </select>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <FaRuler className="text-3xl text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold">Dimensions</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {['small', 'medium', 'large'].map((size) => (
                    <motion.button
                      key={size}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCustomizationChange('size', size)}
                      className={`p-3 rounded-lg ${
                        customizationProduct.size === size
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-50 text-blue-900'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <FaPalette className="text-3xl text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold">Color & Material</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Color</label>
                    <input
                      type="color"
                      value={customizationProduct.color}
                      onChange={(e) => handleCustomizationChange('color', e.target.value)}
                      className="w-full h-12 rounded-lg cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Material</label>
                    <select
                      value={customizationProduct.material}
                      onChange={(e) => handleCustomizationChange('material', e.target.value)}
                      className="w-full p-3 border border-blue-200 rounded-lg"
                    >
                      <option value="plastic">Plastic</option>
                      <option value="paper">Paper</option>
                      <option value="biodegradable">Biodegradable</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <FaCog className="text-3xl text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold">Order Quantity</h3>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Units (Minimum 1,000)</label>
                  <input
                    type="number"
                    min="1000"
                    step="100"
                    value={customizationProduct.quantity}
                    onChange={(e) => handleCustomizationChange('quantity', Math.max(1000, parseInt(e.target.value) || 1000))}
                    className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={customizationControls}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-6">Live Preview</h3>
              <div className="flex-grow relative bg-blue-50 rounded-xl p-8 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 rounded-lg"
                  style={{
                    backgroundColor: customizationProduct.color,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.02, 0.98, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Price Breakdown</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-medium">Base Price (per unit)</p>
                    <p className="text-blue-600">
                      ${materialPricing[customizationProduct.material][customizationProduct.size].toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {customizationProduct.material.charAt(0).toUpperCase() + customizationProduct.material.slice(1)} - {
                        customizationProduct.size.charAt(0).toUpperCase() + customizationProduct.size.slice(1)
                      } Size
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-medium">Order Quantity</p>
                    <p className="text-blue-600">{customizationProduct.quantity.toLocaleString()} units</p>
                  </div>
                  
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <p className="font-medium">Total Estimated Cost</p>
                    <p className="text-blue-600 text-xl font-bold">
                      ${calculateTotalPrice().toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mt-4 mb-6">
                  * Prices are estimates and may vary based on specific requirements and customizations
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                  Request Detailed Quote
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mt-32 bg-blue-900 text-white py-24 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 text-center px-4">
            <h2 className="text-5xl font-bold mb-8">Need a Custom Solution?</h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              Our team of experts is ready to create the perfect packaging solution tailored to your unique needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-12 py-4 rounded-full text-2xl font-bold hover:bg-blue-100 transition duration-300 inline-flex items-center"
              >
                Get in Touch <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
