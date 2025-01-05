'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaUtensils, 
  FaPumpSoap, 
  FaWineBottle, 
  FaPills, 
  FaHome, 
  FaSmoking, 
  FaArrowRight, 
  FaChevronLeft, 
  FaArrowLeft, 
  FaCog, 
  FaPalette, 
  FaRuler, 
  FaBoxOpen, 
  FaClock, 
  FaMicrochip, 
  FaPaperPlane, 
  FaSearch, 
  FaCheckCircle, 
  FaInfoCircle, 
  FaTruck, 
  FaCalendar 
} from 'react-icons/fa'
import ProductPortfolioBG from '../../public/images/product_bg.jpg'

const SectionTitle = ({ children, className = "" }) => (
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-5xl md:text-7xl font-bold mb-16 text-white ${className}`}
  >
    {children}
  </motion.h2>
);

const CategoryIcon = ({ icon: Icon }) => (
  <div className="bg-blue-900/50 p-4 rounded-full">
    <Icon className="text-3xl text-blue-300" />
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
  const [flippedCards, setFlippedCards] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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

  const upcomingProducts = [
    {
      title: "Smart Packaging Solutions",
      description: "Incorporating IoT sensors for real-time monitoring of product freshness and temperature control",
      status: "Coming Q3 2024",
      icon: "🔷",
      details: {
        features: [
          "Real-time temperature monitoring",
          "Freshness indicators",
          "Mobile app integration"
        ],
        technology: "IoT sensors and NFC connectivity",
        applications: "Perishable goods, pharmaceuticals, cold chain logistics"
      }
    },
    {
      title: "Nano-Enhanced Materials",
      description: "Advanced materials with improved barrier properties and extended shelf life capabilities",
      status: "In Development",
      icon: "🔸",
      details: {
        features: [
          "Enhanced oxygen barrier",
          "Improved moisture resistance",
          "Antimicrobial properties"
        ],
        technology: "Nanocomposite materials",
        applications: "Food packaging, medical supplies, electronics"
      }
    },
    {
      title: "Zero-Waste Packaging",
      description: "100% biodegradable packaging solutions made from agricultural waste",
      status: "Coming Q4 2024",
      icon: "🔷",
      details: {
        features: [
          "Fully compostable",
          "Agricultural waste-based",
          "Carbon negative production"
        ],
        technology: "Proprietary biomaterial processing",
        applications: "Consumer goods, food service, retail"
      }
    }
  ];

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
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

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <Link href="/" className="text-blue-300 flex items-center mb-16 hover:text-blue-100 transition duration-300">
          <FaArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-white">Our Products</h1>
        
        <p className="text-xl text-blue-300 mb-16 text-center max-w-3xl mx-auto">
          Discover our comprehensive range of packaging solutions designed to meet the unique needs of various industries.
        </p>

        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src={ProductPortfolioBG}
            alt="Product Portfolio Background"
            layout="fill"
            objectFit="cover"
            className="opacity-5"
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
                      selectedCategory === category 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white/10 text-blue-100 hover:bg-white/20'
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
                      <h3 className="text-3xl font-bold mb-8 text-white">{selectedCategory.title}</h3>
                      <p className="text-xl mb-8 text-blue-300">{selectedCategory.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {selectedCategory.subcategories.map((subcategory, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleSubcategoryClick(subcategory)}
                            className="bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <h4 className="text-2xl font-semibold mb-4 text-white">{subcategory.name}</h4>
                            <p className="text-blue-300">{subcategory.items.length} products</p>
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
                      <button onClick={handleBack} className="mb-8 text-blue-300 flex items-center hover:text-blue-100">
                        <FaChevronLeft className="mr-2" /> Back to {selectedCategory.title}
                      </button>
                      <h3 className="text-3xl font-bold mb-8 text-white">{selectedSubcategory.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {selectedSubcategory.items.map((product, index) => (
                          <motion.div
                            key={index}
                            onClick={() => handleProductClick(product)}
                            className="bg-white/10 rounded-lg shadow-lg hover:bg-white/20 transition-all cursor-pointer overflow-hidden flex flex-col"
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
                              <h4 className="text-lg font-semibold mb-2 text-white">{product.title}</h4>
                              <p className="text-blue-300 text-sm line-clamp-3 flex-grow">{product.description}</p>
                              <div className="mt-4">
                                <span className="text-blue-400 text-sm font-medium">Learn More →</span>
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
                      <button onClick={handleBack} className="mb-8 text-blue-300 flex items-center hover:text-blue-100">
                        <FaChevronLeft className="mr-2" /> Back to {selectedSubcategory.name}
                      </button>
                      <div className="bg-white/10 p-8 rounded-lg shadow-xl">
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
                        <h3 className="text-3xl font-bold mb-4 text-white">{selectedProduct.title}</h3>
                        <p className="text-xl text-blue-300 mb-8">{selectedProduct.description}</p>
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
            <h2 className="text-5xl font-bold mb-6 text-white">Customize Your Packaging</h2>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto">
              Explore our interactive tool to visualize and customize your perfect packaging solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
            <div className="space-y-8">
              <motion.div
                className="bg-white/10 p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <FaBoxOpen className="text-3xl text-blue-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Package Type</h3>
                </div>
                <select
                  value={customizationProduct.type}
                  onChange={(e) => handleCustomizationChange('type', e.target.value)}
                  className="w-full p-3 bg-white/5 border border-blue-400/30 rounded-lg text-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="bg-white/10 p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <FaRuler className="text-3xl text-blue-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Dimensions</h3>
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
                className="bg-white/10 p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <FaPalette className="text-3xl text-blue-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Color & Material</h3>
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
                className="bg-white/10 p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <FaCog className="text-3xl text-blue-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Order Quantity</h3>
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
              className="bg-white/10 p-8 rounded-2xl shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Live Preview</h3>
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
                <h4 className="text-xl font-semibold mb-4 text-white">Price Breakdown</h4>
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
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <Link href="/product-portfolio/submit-innovation">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold 
                               hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
                    >
                      Submit Your Innovation
                      <FaArrowRight className="ml-2" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mt-32 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-blue-400/30 
                            bg-blue-500/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-4">
              Innovation Hub
            </span>
            <h2 className="text-5xl font-bold mb-6 text-white">Submit Your Idea to ARBAB PACK Ltd.</h2>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto">
              We are committed to fostering innovation in packaging. Share your ideas that can enhance our packaging solutions and improve efficiency, sustainability, and functionality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">Areas of Interest</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Package Enhancement",
                  description: "Innovations that offer differentiation on the shelf, enhancing the appeal and functionality of packaging.",
                  icon: FaBoxOpen,
                  details: [
                    "New printing and decoration technologies",
                    "Improved sustainability solutions",
                    "Enhanced product protection features"
                  ]
                },
                {
                  title: "Manufacturing Improvements",
                  description: "Innovations that lead to more efficient manufacturing processes.",
                  icon: FaCog,
                  details: [
                    "Improved manufacturing speed",
                    "Enhanced output efficiency",
                    "Waste reduction solutions"
                  ]
                },
                {
                  title: "Shelf Life & Barrier Performance",
                  description: "Ideas that enhance the preservation of products through improved barrier performance.",
                  icon: FaClock,
                  details: [
                    "Extended shelf life technologies",
                    "Advanced coating solutions",
                    "Barrier performance innovations"
                  ]
                },
                {
                  title: "Smart / Intelligent Packaging",
                  description: "Solutions that incorporate smart features to improve user experience.",
                  icon: FaMicrochip,
                  details: [
                    "IoT integration",
                    "Smart monitoring features",
                    "Interactive packaging solutions"
                  ]
                },
                {
                  title: "Branding and Customization",
                  description: "New branding options to enhance visibility and engagement.",
                  icon: FaPalette,
                  details: [
                    "Custom design solutions",
                    "Brand enhancement features",
                    "Unique identification methods"
                  ]
                },
                {
                  title: "Transit Packaging",
                  description: "Innovations that enhance the safety and efficiency of transporting goods.",
                  icon: FaTruck,
                  details: [
                    "Protective packaging solutions",
                    "Secure transportation features",
                    "Efficient logistics innovations"
                  ]
                }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                      <area.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">{area.title}</h4>
                  </div>
                  <p className="text-blue-300 mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="text-blue-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <h3 className="text-3xl font-bold mb-6 text-white">Submission Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  step: "Step 1",
                  title: "Submission",
                  description: "Review our Areas of Interest and complete the Submission Form with your innovative idea.",
                  icon: FaPaperPlane
                },
                {
                  step: "Step 2",
                  title: "Assessment",
                  description: "Our Technology and Innovation teams will review your submission based on relevance and potential.",
                  icon: FaSearch
                },
                {
                  step: "Step 3",
                  title: "Response",
                  description: "We aim to evaluate and respond to your submission within 30 days.",
                  icon: FaCheckCircle
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 backdrop-blur-sm" />
                  <div className="relative z-10">
                    <div className="bg-blue-500/20 w-fit p-2 rounded-lg mb-4">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-blue-400 font-medium mb-2">{step.step}</div>
                    <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                    <p className="text-blue-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-blue-400/20 mb-12"
            >
              <div className="flex items-center mb-4">
                <FaInfoCircle className="text-blue-400 w-5 h-5 mr-3" />
                <h4 className="text-xl font-semibold text-white">Important Note</h4>
              </div>
              <p className="text-blue-300">
                We only accept non-confidential information at the initial stage. If we decide to pursue your submission further, 
                we may require a confidentiality agreement to facilitate more detailed discussions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Link href="/product-portfolio/submit-innovation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold 
                           hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
                >
                  Submit Your Innovation
                  <FaArrowRight className="ml-2" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="mt-32 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Upcoming Products & Innovation</h2>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto">
              Discover our latest innovations and upcoming product releases that are shaping the future of packaging
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-full h-[400px]"
                >
                  {/* Front of card */}
                  <div
                    className={`absolute w-full h-full backface-hidden bg-white/10 rounded-xl p-8 shadow-lg 
                               hover:bg-white/20 transition-all duration-300 ${
                                 flippedCards[index] ? 'opacity-0' : 'opacity-100'
                               }`}
                  >
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-blue-300 mb-6">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                        {item.status}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-blue-300 hover:text-blue-100"
                        onClick={() => setFlippedCards(prev => ({ ...prev, [index]: true }))}
                      >
                        <FaArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className={`absolute w-full h-full backface-hidden bg-white/10 rounded-xl p-8 shadow-lg 
                               [transform:rotateY(180deg)] ${
                                 flippedCards[index] ? 'opacity-100' : 'opacity-0'
                               }`}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-white">{item.title}</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-blue-300 font-semibold mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside text-white space-y-1">
                          {item.details.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-blue-300 font-semibold mb-2">Technology:</h4>
                        <p className="text-white">{item.details.technology}</p>
                      </div>
                      <div>
                        <h4 className="text-blue-300 font-semibold mb-2">Applications:</h4>
                        <p className="text-white">{item.details.applications}</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute bottom-8 right-8 text-blue-300 hover:text-blue-100"
                      onClick={() => setFlippedCards(prev => ({ ...prev, [index]: false }))}
                    >
                      <FaArrowLeft className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-300 hover:text-blue-100 font-semibold"
            >
              Learn more about our innovation pipeline
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        <section className="mt-32 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Schedule a Consultant</h2>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto">
              Book a free consultation with our packaging experts to discuss your specific needs and requirements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Calendar Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center mb-6">
                  <FaCalendar className="text-blue-400 w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Select Date</h3>
                </div>
                
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {/* Calendar Header */}
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-blue-300 text-center text-sm py-2">
                      {day}
                    </div>
                  ))}
                  
                  {/* Calendar Days */}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 3; // Adjust starting day
                    return (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={day < 1 || day > 31}
                        onClick={() => setSelectedDate(day)}
                        className={`rounded-lg p-2 text-center ${
                          day < 1 || day > 31
                            ? 'opacity-0'
                            : selectedDate === day
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-blue-500/30 focus:bg-blue-500/50 focus:ring-2 focus:ring-blue-400'
                        }`}
                      >
                        <span className={`text-sm ${
                          day < 1 || day > 31 ? 'invisible' : 'text-white'
                        }`}>
                          {day}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
                {selectedDate && (
                  <p className="text-blue-300 text-sm">
                    Selected date: Day {selectedDate}
                  </p>
                )}
              </motion.div>

              {/* Time Slots Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center mb-6">
                  <FaClock className="text-blue-400 w-6 h-6 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Select Time</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
                    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
                  ].map((time) => (
                    <motion.button
                      key={time}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTime(time)}
                      className={`${
                        selectedTime === time
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 hover:bg-blue-500/30'
                      } rounded-lg py-3 px-4 text-sm font-medium
                        transition-all duration-200 focus:ring-2 focus:ring-blue-400`}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
                {selectedTime && (
                  <p className="text-blue-300 text-sm">
                    Selected time: {selectedTime}
                  </p>
                )}
              </motion.div>
            </div>

            {/* Contact Information Form - Only show when both date and time are selected */}
            {selectedDate && selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-blue-400/30 rounded-lg px-4 py-3 text-white
                               focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-blue-400/30 rounded-lg px-4 py-3 text-white
                               focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-blue-300 text-sm font-medium mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    className="w-full bg-white/10 border border-blue-400/30 rounded-lg px-4 py-3 text-white
                               focus:ring-2 focus:ring-blue-400 focus:border-transparent h-32"
                    placeholder="Tell us about your packaging needs"
                  />
                </div>
              </motion.div>
            )}

            {/* Submit Button - Only show when both date and time are selected */}
            {selectedDate && selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold 
                           hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
                >
                  Schedule Consultation
                  <FaArrowRight className="ml-2" />
                </motion.button>
                <p className="text-blue-300 text-sm mt-4">
                  Scheduling consultation for Day {selectedDate} at {selectedTime}
                </p>
                <p className="text-blue-300 text-sm mt-2">
                  Our team will confirm your appointment within 24 hours
                </p>
              </motion.div>
            )}
          </div>
        </section>

        <section className="mt-32 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Study Materials</h2>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto">
              Access our comprehensive collection of packaging guides, research papers, and technical documentation
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Packaging Design Guidelines 2024",
                description: "Comprehensive guide covering fundamental principles of packaging design, materials, and sustainability.",
                fileSize: "2.8 MB",
                category: "Design Guide",
                downloadCount: "1.2k",
                lastUpdated: "Jan 2024",
                icon: "📕"
              },
              {
                title: "Sustainable Packaging Materials",
                description: "Research paper on eco-friendly packaging materials and their environmental impact.",
                fileSize: "1.5 MB",
                category: "Research Paper",
                downloadCount: "856",
                lastUpdated: "Feb 2024",
                icon: "📗"
              },
              {
                title: "Food Packaging Safety Standards",
                description: "Technical documentation on international food packaging safety regulations and compliance.",
                fileSize: "3.2 MB",
                category: "Technical Guide",
                downloadCount: "2.1k",
                lastUpdated: "Mar 2024",
                icon: "📘"
              },
              {
                title: "Smart Packaging Technologies",
                description: "Overview of emerging smart packaging technologies and their applications in various industries.",
                fileSize: "2.1 MB",
                category: "Technology Guide",
                downloadCount: "945",
                lastUpdated: "Mar 2024",
                icon: "📙"
              },
              {
                title: "Packaging Cost Optimization",
                description: "Strategic guide for optimizing packaging costs while maintaining quality and effectiveness.",
                fileSize: "1.8 MB",
                category: "Business Guide",
                downloadCount: "1.5k",
                lastUpdated: "Feb 2024",
                icon: "📔"
              },
              {
                title: "Material Testing Procedures",
                description: "Detailed procedures for testing packaging materials and quality assurance protocols.",
                fileSize: "4.2 MB",
                category: "Technical Guide",
                downloadCount: "678",
                lastUpdated: "Mar 2024",
                icon: "📓"
              }
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{material.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{material.title}</h3>
                    <p className="text-blue-300 text-sm mb-4">{material.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-blue-400 text-xs mb-1">Category</p>
                        <p className="text-white text-sm">{material.category}</p>
                      </div>
                      <div>
                        <p className="text-blue-400 text-xs mb-1">File Size</p>
                        <p className="text-white text-sm">{material.fileSize}</p>
                      </div>
                      <div>
                        <p className="text-blue-400 text-xs mb-1">Downloads</p>
                        <p className="text-white text-sm">{material.downloadCount}</p>
                      </div>
                      <div>
                        <p className="text-blue-400 text-xs mb-1">Last Updated</p>
                        <p className="text-white text-sm">{material.lastUpdated}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-300">PDF Document</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium 
                                 hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
                      >
                        Download PDF
                        <svg 
                          className="w-4 h-4 ml-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-blue-300 text-sm">
              Need more resources? Contact our technical team for additional documentation and support.
            </p>
          </motion.div>
        </section>

        <section className="mt-32 bg-blue-900/50 text-white py-24 rounded-3xl relative overflow-hidden backdrop-blur-sm">
          <div className="relative z-10 text-center px-4">
            <h2 className="text-5xl font-bold mb-8 text-white">Need a Custom Solution?</h2>
            <p className="text-2xl mb-12 text-blue-300 max-w-3xl mx-auto">
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
