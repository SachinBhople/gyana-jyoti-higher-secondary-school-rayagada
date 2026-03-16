import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

import img1 from '../assets/image-1.jpeg';
import img2 from '../assets/image-2.jpeg';
import img3 from '../assets/image-3.jpeg';

export default function Gallery() {
  const images = [
    { src: img1, alt: 'School Campus' },
    { src: img2, alt: 'Classroom Activity' },
    { src: img3, alt: 'School Functions' },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-4 shadow-sm"
          >
            <Camera className="w-6 h-6 text-orange-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Our Gallery
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl shadow-lg border-4 border-white group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                <span className="text-white font-semibold text-lg drop-shadow-md">
                  {image.alt}
                </span>
                <div className="w-8 h-1 bg-orange-500 mt-2 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
