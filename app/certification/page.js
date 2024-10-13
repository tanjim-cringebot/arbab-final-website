import { motion } from "framer-motion";
import { FaCertificate, FaIndustry, FaUsers, FaCogs } from "react-icons/fa";
import Image from "next/image";

const CertificationPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 className="text-4xl font-bold text-center mb-12" {...fadeIn}>
          Capacity and Certification
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="bg-white p-6 rounded-lg shadow-lg" {...fadeIn}>
            <h2 className="text-2xl font-semibold mb-4">Our Capabilities</h2>
            <ul className="space-y-4">
              <motion.li className="flex items-center" {...fadeIn}>
                <FaIndustry className="text-blue-500 mr-2" />
                <span>
                  State-of-the-art machinery including gravure printing,
                  lamination, and coating machines
                </span>
              </motion.li>
              <motion.li className="flex items-center" {...fadeIn}>
                <FaUsers className="text-blue-500 mr-2" />
                <span>
                  Experienced workforce dedicated to maintaining high production
                  standards
                </span>
              </motion.li>
              <motion.li className="flex items-center" {...fadeIn}>
                <FaCogs className="text-blue-500 mr-2" />
                <span>
                  Efficient, sustainable, and innovative production strategies
                </span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-lg" {...fadeIn}>
            <h2 className="text-2xl font-semibold mb-4">Our Certifications</h2>
            <ul className="space-y-4">
              <motion.li className="flex items-center" {...fadeIn}>
                <FaCertificate className="text-green-500 mr-2" />
                <span>ISO Certification for Quality Management</span>
              </motion.li>
              <motion.li className="flex items-center" {...fadeIn}>
                <FaCertificate className="text-green-500 mr-2" />
                <span>FSSC Certification for Food Packaging</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/path-to-your-animated-gif.gif"
            alt="Certification Process"
            width={400}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationPage;
