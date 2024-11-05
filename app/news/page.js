"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaCalendar, FaArrowLeft, FaTags, FaSearch, FaNewspaper, FaTv, FaBookOpen } from "react-icons/fa";

const categories = [
  { id: "all", label: "All", icon: FaNewspaper },
  { id: "news", label: "News", icon: FaNewspaper },
  { id: "case-studies", label: "Case Studies", icon: FaBookOpen },
  { id: "tv-reports", label: "TV Reports", icon: FaTv },
];

const newsItems = [
  {
    id: 1,
    title: "Revolutionary Biodegradable Packaging Solution Unveiled",
    date: "March 15, 2024",
    category: "news",
    excerpt: "Our latest breakthrough in sustainable packaging technology is changing the industry landscape with fully biodegradable materials.",
    image: "/images/n1.jpg",
    tags: ["Innovation", "Sustainability", "Technology"]
  },
  {
    id: 2,
    title: "Case Study: PRAN Group Packaging Transformation",
    date: "March 10, 2024",
    category: "case-studies",
    excerpt: "How we helped PRAN Group reduce their carbon footprint by 40% through innovative packaging solutions.",
    image: "/images/n2.png",
    tags: ["Case Study", "Success Story", "Sustainability"]
  },
  {
    id: 3,
    title: "Arbab Pack Featured on Business Today",
    date: "March 5, 2024",
    category: "tv-reports",
    excerpt: "Our CEO discusses the future of sustainable packaging and Arbab Pack's role in shaping industry standards.",
    image: "/images/n3.png",
    tags: ["Media", "Leadership", "Industry Insights"]
  },
  // Add more news items as needed
];

const NewsCard = ({ title, date, category, excerpt, image, tags }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="bg-white rounded-2xl shadow-xl overflow-hidden"
  >
    <div className="relative h-64">
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt={title}
        className="transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
        {category}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center text-blue-500 text-sm mb-3">
        <FaCalendar className="mr-2" />
        <span>{date}</span>
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-blue-600 mb-4 line-clamp-3">
        {excerpt}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <motion.button
        whileHover={{ x: 5 }}
        className="text-blue-600 font-semibold flex items-center"
      >
        Read More →
      </motion.button>
    </div>
  </motion.div>
);

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <Link href="/" className="text-blue-600 flex items-center mb-8 hover:text-blue-800 transition duration-300">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-8 text-blue-900"
        >
          Latest Updates
        </motion.h1>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                    selectedCategory === cat.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <Icon />
                  <span>{cat.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* News Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredNews.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
} 