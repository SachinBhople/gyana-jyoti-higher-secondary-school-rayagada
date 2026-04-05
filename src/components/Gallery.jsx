import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, X, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';

import img1 from '../assets/image-1.jpeg';
import img2 from '../assets/image-2.jpeg';
import img3 from '../assets/image-3.jpeg';
import program1 from '../assets/program-1.jpeg';
import program2 from '../assets/program-2.jpeg';
import program3 from '../assets/program-3.jpeg';
import program4 from '../assets/program-4.jpeg';
import program5 from '../assets/program-5.jpeg';
import program6 from '../assets/program-6.jpeg';
import program7 from '../assets/program-7.jpeg';
import program8 from '../assets/program-8.jpeg';
import program9 from '../assets/program-9.jpeg';
import program10 from '../assets/program-10.jpeg';
import program11 from '../assets/program-11.jpeg';
import program12 from '../assets/program-12.jpeg';

import program13 from "../assets/program13.jpeg";
import program14 from "../assets/program14.jpeg";
import program15 from "../assets/program15.jpeg";
import program16 from "../assets/program16.jpeg";
import program17 from "../assets/program17.jpeg";
import program18 from "../assets/program18.jpeg";
import program19 from "../assets/program19.jpeg";
import program20 from "../assets/program20.jpeg";
import program21 from "../assets/program21.jpeg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const images = useMemo(() => [
    { src: img1, alt: 'School Campus', category: 'Campus' },
    { src: img2, alt: 'Classroom Activity', category: 'Activities' },
    { src: img3, alt: 'School Functions', category: 'Events' },
    { src: program1, alt: 'Inauguration Ceremony', category: 'Program' },
    { src: program2, alt: 'Cultural Dance', category: 'Program' },
    { src: program3, alt: 'Sports Day', category: 'Program' },
    { src: program4, alt: 'Science Exhibition', category: 'Program' },
    { src: program5, alt: 'Prize Distribution', category: 'Program' },
    { src: program6, alt: 'Yoga Session', category: 'Activities' },
    { src: program7, alt: 'Art & Craft', category: 'Activities' },
    { src: program8, alt: 'Music Class', category: 'Activities' },
    { src: program9, alt: 'Annual Meet', category: 'Events' },
    { src: program10, alt: 'Excursion Trip', category: 'Events' },
    { src: program11, alt: 'Tree Plantation', category: 'Activities' },
    { src: program12, alt: 'Independence Day', category: 'Program' },
    { src: program13, alt: 'students', category: 'Class Room' },
    { src: program14, alt: 'students', category: 'Class Room' },
    { src: program15, alt: 'students', category: 'Class Room' },
    { src: program16, alt: 'students', category: 'Class Room' },
    { src: program17, alt: 'students', category: 'Class Room' },
    { src: program18, alt: 'students', category: 'Class Room' },
    { src: program19, alt: 'students', category: 'Class Room' },
    { src: program20, alt: 'students', category: 'Class Room' },
    { src: program21, alt: 'students', category: 'Class Room' },
  ], []);

  const categories = ['All', 'Campus', 'Program', 'Activities', 'Events', "Class Room"];

  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white relative scroll-mt-20 md:scroll-mt-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[100px] -z-10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[100px] -z-10 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-2xl mb-6 shadow-orange-100 shadow-xl"
          >
            <Camera className="w-6 h-6 text-orange-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Photo <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 uppercase">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg mb-12 font-medium"
          >
            A visual journey through the excellence, activities, and vibrant campus life of Gyana Jyoti Higher Secondary School.
          </motion.p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${filter === cat
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-200 ring-4 ring-orange-50'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                key={`${image.src}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-gray-200 transition-all duration-500 group-hover:shadow-orange-200/50">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest mb-2 border border-white/30">
                            {image.category}
                          </span>
                          <h4 className="text-white font-bold text-xl leading-tight">
                            {image.alt}
                          </h4>
                        </div>
                        <div className="p-3 bg-white text-orange-600 rounded-full shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />

            <motion.button
              className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors p-3 bg-white/10 rounded-full z-10"
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <figure className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-6 z-0">
              <motion.img
                initial={{ scale: 0.9, opacity: 0, rotateY: 20 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.9, opacity: 0, rotateY: -20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] rounded-[2rem] shadow-[0_0_100px_rgba(255,165,0,0.1)] object-contain ring-1 ring-white/20"
                onClick={(e) => e.stopPropagation()}
              />

              <motion.figcaption
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center bg-white/10 backdrop-blur-xl px-8 py-6 rounded-[2rem] border border-white/10 max-w-lg w-full"
              >
                <span className="text-orange-400 font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">
                  {selectedImage.category}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-bold">{selectedImage.alt}</h3>
              </motion.figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}