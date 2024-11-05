import Link from 'next/link';
import { FaLinkedin, FaWhatsapp, FaFacebookF, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Arbab Pack Ltd</h3>
            <p className="text-sm">Innovative packaging solutions for a sustainable future.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-gray-300">About Us</Link></li>
              <li><Link href="/product-portfolio" className="text-sm hover:text-gray-300">Products</Link></li>
              <li><Link href="/capacity-certification" className="text-sm hover:text-gray-300">Capacity</Link></li>
              <li><Link href="/innovation-sustainability" className="text-sm hover:text-gray-300">Sustainability</Link></li>
              <li><Link href="/news" className="text-sm hover:text-gray-300">News & Updates</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Shimrail, Demra Road</p>
            <p className="text-sm">Shiddhirganj, Narayanganj - 1430</p>
            <p className="text-sm">Phone: +880 1844 454 0790</p>
            <p className="text-sm">Email: info@arbabpackltd.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="mailto:info@arbabpackltd.com" className="text-gray-400 hover:text-white">
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a href="tel:+8801844454079" className="text-gray-400 hover:text-white">
              <FaPhone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm">&copy; 2024 Arbab Pack Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
