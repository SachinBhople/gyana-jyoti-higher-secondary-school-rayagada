import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
export default function FloatingWhatsApp() {
  const phoneNumber = '918658372642'; // Updated number from MD inquiry
  const message = 'Hello! I need some information about admission in Gyana Jyoti Higher Secondary School.';

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ y: -5 }}
    >
      <FaWhatsapp size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-right-2 before:-translate-y-1/2 before:border-8 before:border-transparent before:border-l-white">
        Chat with us!
      </span>
      
      {/* Pulse effect rings */}
      <span className="absolute w-full h-full rounded-full border-2 border-green-500 animate-ping opacity-75"></span>
    </motion.a>
  );
}
