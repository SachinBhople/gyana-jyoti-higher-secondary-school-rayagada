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

  const scrollToSection = (e, href) => {
    if (e) e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    if (elem) {
      // Use a small timeout to ensure state transitions don't block the scroll behavior
      setTimeout(() => {
        elem.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 50);
    } else {
      console.warn(`Section with ID ${targetId} not found!`);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">

          <div className="flex items-center shrink-0 pr-4">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <div className="bg-white p-1 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                <img className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" src={logo} alt="Logo" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl text-blue-900 leading-none">GYANA JYOTI</span>
                <span className="text-[8px] sm:text-[11px] md:text-xs lg:text-sm font-bold text-orange-600 uppercase mt-0.5">Higher Secondary School</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-end flex-1 space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-700 hover:text-blue-600 font-bold transition-colors duration-200 uppercase text-xs xl:text-sm tracking-wider"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 p-2 rounded-lg focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block px-4 py-4 rounded-xl text-lg font-bold text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all"
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