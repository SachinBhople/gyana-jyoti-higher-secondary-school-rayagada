import { motion } from 'framer-motion';
import heroBg from '../assets/image-1.jpeg';

export default function Hero() {
  return (
    // CRITICAL FIX: Added id="home" here
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Gyana Jyoti School Campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl mx-2 sm:mx-0"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-orange-400 font-bold tracking-widest uppercase text-xs sm:text-sm md:text-base mb-3 sm:mb-4 drop-shadow-md"
          >
            Welcome to Excellence
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight drop-shadow-lg leading-tight sm:leading-tight"
          >
            Gyana Jyoti <span className="text-orange-400">Higher Secondary</span> School<span className="hidden sm:inline">, Rayagada</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center gap-3 mb-8"
          >
            <span className="bg-blue-600/80 text-white px-5 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-lg shadow-lg border border-blue-400/50 text-center leading-snug">
              +2 Arts and Commerce College
            </span>
            <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 mt-2 w-full justify-center">
              <span className="flex items-center justify-center gap-2 text-blue-100 font-medium bg-black/30 px-4 sm:px-5 py-2 rounded-lg border border-white/10 text-xs sm:text-base w-full md:w-auto">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse"></span>
                Approved by CHSE Odisha
              </span>
              <span className="text-orange-300 font-medium italic bg-black/30 px-4 sm:px-5 py-2 rounded-lg border border-white/10 text-xs sm:text-base w-full md:w-auto text-center">
                Powered by Padhi's Academy
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#admission"
              onClick={(e) => {
                // This ensures internal buttons also use the smooth scroll
                e.preventDefault();
                document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold shadow-xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Apply for Admission
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/40 rounded-full font-bold backdrop-blur-sm shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}