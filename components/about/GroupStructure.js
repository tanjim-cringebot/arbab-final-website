'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GroupStructure() {
  const companies = [
    {
      name: "Arbab Pack Ltd.",
      logo: "/images/arbab_logo.png",
      color: "from-blue-500 to-blue-600",
      angle: 0
    },
    {
      name: "ZK Foils Ltd.", 
      logo: "/images/zkFoil.png",
      color: "from-purple-500 to-purple-600",
      angle: 51.43
    },
    {
      name: "ZK Plastic Ltd.",
      logo: "/images/zkPlastic.png", 
      color: "from-green-500 to-green-600",
      angle: 102.86
    },
    {
      name: "ZK Ink & Chemical Ltd.",
      logo: "/images/zkicl.png",
      color: "from-red-500 to-red-600", 
      angle: 154.29
    },
    {
      name: "ZK Health Care Ltd.",
      logo: "/images/zkHealth.png",
      color: "from-teal-500 to-teal-600",
      angle: 205.71
    },
    {
      name: "AANT Cosmetics Ltd.",
      logo: "/images/aant.png",
      color: "from-pink-500 to-pink-600",
      angle: 257.14
    },
    {
      name: "RePro",
      logo: "/images/repro.png",
      color: "from-emerald-500 to-emerald-600",
      angle: 308.57
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black py-32">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-blue-400/30 
                       bg-blue-500/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-4">
            Our Companies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AG Group Structure
          </h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            A diverse portfolio of innovative enterprises
          </p>
        </motion.div>

        {/* Circular Layout */}
        <div className="relative w-[800px] h-[800px] mx-auto">
          {/* Center Circle */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1, 
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 
                     bg-white/5 backdrop-blur-md rounded-full flex items-center 
                     justify-center z-20 overflow-hidden
                     border-2 border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.2)]
                     before:content-[''] before:absolute before:inset-0 
                     before:bg-gradient-to-r before:from-blue-500/10 before:to-purple-500/10
                     before:rounded-full before:animate-pulse"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative w-44 h-44 p-4 rounded-full 
                       bg-gradient-to-br from-white/10 to-transparent"
            >
              <Image
                src="/images/arbabGroup.png"
                alt="AG Group"
                fill
                className="object-contain p-2"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Company Cards */}
          {companies.map((company, index) => {
            const radius = 340;
            const angle = (index * (360 / companies.length)) * (Math.PI / 180);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  x: x,
                  y: y
                }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2 + (index * 0.1),
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.1,
                  zIndex: 10
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${company.color} rounded-2xl opacity-0 
                               group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg 
                               border border-white/10 group-hover:border-transparent transition-all duration-500
                               w-52">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 relative">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-base font-bold text-white text-center">
                        {company.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 z-0" width="800" height="800">
            {companies.map((_, index) => {
              const angle = (index * (360 / companies.length)) * (Math.PI / 180);
              const x = 400 + 300 * Math.cos(angle);
              const y = 400 + 300 * Math.sin(angle);
              
              return (
                <motion.line
                  key={index}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ 
                    duration: 1.5,
                    delay: 0.5 + (index * 0.1),
                    ease: "easeInOut"
                  }}
                  x1="400"
                  y1="400"
                  x2={x}
                  y2={y}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                />
              );
            })}
            <defs>
              <linearGradient id="lineGradient">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
} 