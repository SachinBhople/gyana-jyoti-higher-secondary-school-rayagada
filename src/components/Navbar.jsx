import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Faculty', href: '#faculty' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Rules', href: '#rules' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Admission', href: '#admission' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-300">
          <div className="flex-1 flex items-center min-w-0 pr-2">
            <a href="#home" className="flex items-center gap-2 sm:gap-3 group shrink min-w-0">
              <div className="bg-white p-1 sm:p-1.5 rounded-full shadow-sm group-hover:shadow-md transition-shadow shrink-0">
                <img className="h-9 w-auto sm:h-12 md:h-14 lg:h-16 transform group-hover:scale-105 transition-transform" src={logo} alt="Gyana Jyoti School Logo" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-extrabold text-[13px] sm:text-lg md:text-xl lg:text-2xl text-blue-900 leading-none tracking-tight truncate">GYANA JYOTI</span>
                <span className="text-[7.5px] sm:text-[11px] md:text-xs lg:text-sm font-bold text-orange-600 leading-tight uppercase mt-0.5 truncate">Higher Secondary School</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 uppercase text-sm tracking-wider"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
