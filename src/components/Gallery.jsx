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

import imga from "../assets/1.jpeg";
import imgb from "../assets/2.jpeg";
import imgc from "../assets/3.jpeg";
import imgd from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";
import img13 from "../assets/13.jpeg";
import img14 from "../assets/14.jpeg";
import img15 from "../assets/15.jpeg";
import img16 from "../assets/16.jpeg";
import img17 from "../assets/17.jpeg";
import img18 from "../assets/18.jpeg";
import img19 from "../assets/19.jpeg";
import img20 from "../assets/20.jpeg";
import img21 from "../assets/21.jpeg";
import img22 from "../assets/22.jpeg";
import img23 from "../assets/23.jpeg";
import img24 from "../assets/24.jpeg";
import img25 from "../assets/25.jpeg";
import img26 from "../assets/26.jpeg";
import img27 from "../assets/27.jpeg";
import img28 from "../assets/28.jpeg";
import img29 from "../assets/29.jpeg";
import img30 from "../assets/30.jpeg";
import img31 from "../assets/31.jpeg";
import img32 from "../assets/32.jpeg";

import img34 from "../assets/34.jpeg";
import img35 from "../assets/35.jpeg";
import img36 from "../assets/36.jpeg";
import img37 from "../assets/37.jpeg";
import img38 from "../assets/38.jpeg";
import img39 from "../assets/39.jpeg";
import img40 from "../assets/40.jpeg";
import img41 from "../assets/41.jpeg";
import img42 from "../assets/42.jpeg";
import img43 from "../assets/43.jpeg";
import img44 from "../assets/44.jpeg";
import img45 from "../assets/45.jpeg";
import img46 from "../assets/46.jpeg";
import img47 from "../assets/47.jpeg";
import img48 from "../assets/48.jpeg";
import img49 from "../assets/49.jpeg";
import img50 from "../assets/50.jpeg";
import img51 from "../assets/51.jpeg";
import img52 from "../assets/52.jpeg";
import img53 from "../assets/53.jpeg";
import img54 from "../assets/54.jpeg";
import img55 from "../assets/55.jpeg";
import img56 from "../assets/56.jpeg";
import img57 from "../assets/57.jpeg";
import img58 from "../assets/58.jpeg";
import img59 from "../assets/59.jpeg";
import img60 from "../assets/60.jpeg";
import img61 from "../assets/61.jpeg";
import img62 from "../assets/62.jpeg";
import img63 from "../assets/63.jpeg";
import img64 from "../assets/64.jpeg";
import img65 from "../assets/65.jpeg";
import img66 from "../assets/66.jpeg";
import img67 from "../assets/67.jpeg";
import img68 from "../assets/68.jpeg";
import img69 from "../assets/69.jpeg";
import img70 from "../assets/70.jpeg";
import img71 from "../assets/71.jpeg";
import img72 from "../assets/72.jpeg";
import img73 from "../assets/73.jpeg";
import img74 from "../assets/74.jpeg";
import img75 from "../assets/75.jpeg";
import img76 from "../assets/76.jpeg";
import img77 from "../assets/77.jpeg";
import img78 from "../assets/78.jpeg";
import img79 from "../assets/79.jpeg";
import img80 from "../assets/80.jpeg";
import img81 from "../assets/81.jpeg";
import img82 from "../assets/82.jpeg";
import img83 from "../assets/83.jpeg";
import img84 from "../assets/84.jpeg";
import img85 from "../assets/85.jpeg";
import img86 from "../assets/86.jpeg";
import img87 from "../assets/87.jpeg";
import img88 from "../assets/88.jpeg";
import img89 from "../assets/89.jpeg";

import img91 from "../assets/91.jpeg";
import img92 from "../assets/92.jpeg";
import img93 from "../assets/93.jpeg";
import img94 from "../assets/94.jpeg";
import img95 from "../assets/95.jpeg";
import img96 from "../assets/96.jpeg";
import img97 from "../assets/97.jpeg";
import img98 from "../assets/98.jpeg";
import img99 from "../assets/99.jpeg";
import img100 from "../assets/100.jpeg";
import img101 from "../assets/101.jpeg";
import img102 from "../assets/102.jpeg";
import img103 from "../assets/103.jpeg";
import img104 from "../assets/104.jpeg";
import img105 from "../assets/105.jpeg";
import img106 from "../assets/106.jpeg";
import img107 from "../assets/107.jpeg";
import img108 from "../assets/108.jpeg";
import img109 from "../assets/109.jpeg";
import img110 from "../assets/110.jpeg";
import img111 from "../assets/111.jpeg";
import img112 from "../assets/112.jpeg";
import img113 from "../assets/113.jpeg";
import img114 from "../assets/114.jpeg";
import img115 from "../assets/115.jpeg";
import img116 from "../assets/116.jpeg";
import img117 from "../assets/117.jpeg";
import img118 from "../assets/118.jpeg";
import img119 from "../assets/119.jpeg";
import img120 from "../assets/120.jpeg";

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
    { src: imga, alt: 'other', category: 'Other' },
    { src: imgb, alt: 'other', category: 'Other' },
    { src: imgc, alt: 'other', category: 'Other' },
    { src: imgd, alt: 'other', category: 'Other' },
    { src: img5, alt: 'other', category: 'Other' },
    { src: img6, alt: 'other', category: 'Other' },
    { src: img7, alt: 'other', category: 'Other' },
    { src: img8, alt: 'other', category: 'Other' },
    { src: img9, alt: 'other', category: 'Other' },
    { src: img10, alt: 'other', category: 'Other' },
    { src: img11, alt: 'other', category: 'Other' },
    { src: img12, alt: 'other', category: 'Other' },
    { src: img13, alt: 'other', category: 'Other' },
    { src: img14, alt: 'other', category: 'Other' },
    { src: img15, alt: 'other', category: 'Other' },
    { src: img16, alt: 'other', category: 'Other' },
    { src: img17, alt: 'other', category: 'Other' },
    { src: img18, alt: 'other', category: 'Other' },
    { src: img19, alt: 'other', category: 'Other' },
    { src: img20, alt: 'other', category: 'Other' },
    { src: img21, alt: 'other', category: 'Other' },
    { src: img22, alt: 'other', category: 'Other' },
    { src: img23, alt: 'other', category: 'Other' },
    { src: img24, alt: 'other', category: 'Other' },
    { src: img25, alt: 'other', category: 'Other' },
    { src: img26, alt: 'other', category: 'Other' },
    { src: img27, alt: 'other', category: 'Other' },
    { src: img28, alt: 'other', category: 'Other' },
    { src: img29, alt: 'other', category: 'Other' },
    { src: img30, alt: 'other', category: 'Other' },
    { src: img31, alt: 'other', category: 'Other' },
    { src: img32, alt: 'other', category: 'Other' },

    { src: img34, alt: 'other', category: 'Other' },
    { src: img35, alt: 'other', category: 'Other' },
    { src: img36, alt: 'other', category: 'Other' },
    { src: img37, alt: 'other', category: 'Other' },
    { src: img38, alt: 'other', category: 'Other' },
    { src: img39, alt: 'other', category: 'Other' },
    { src: img40, alt: 'other', category: 'Other' },
    { src: img41, alt: 'other', category: 'Other' },
    { src: img42, alt: 'other', category: 'Other' },
    { src: img43, alt: 'other', category: 'Other' },
    { src: img44, alt: 'other', category: 'Other' },
    { src: img45, alt: 'other', category: 'Other' },
    { src: img46, alt: 'other', category: 'Other' },
    { src: img47, alt: 'other', category: 'Other' },
    { src: img48, alt: 'other', category: 'Other' },
    { src: img49, alt: 'other', category: 'Other' },
    { src: img50, alt: 'other', category: 'Other' },
    { src: img51, alt: 'other', category: 'Other' },
    { src: img52, alt: 'other', category: 'Other' },
    { src: img53, alt: 'other', category: 'Other' },
    { src: img54, alt: 'other', category: 'Other' },
    { src: img55, alt: 'other', category: 'Other' },
    { src: img56, alt: 'other', category: 'Other' },
    { src: img57, alt: 'other', category: 'Other' },
    { src: img58, alt: 'other', category: 'Other' },
    { src: img59, alt: 'other', category: 'Other' },
    { src: img60, alt: 'other', category: 'Other' },
    { src: img61, alt: 'other', category: 'Other' },
    { src: img62, alt: 'other', category: 'Other' },
    { src: img63, alt: 'other', category: 'Other' },
    { src: img64, alt: 'other', category: 'Other' },
    { src: img65, alt: 'other', category: 'Other' },
    { src: img66, alt: 'other', category: 'Other' },
    { src: img67, alt: 'other', category: 'Other' },
    { src: img68, alt: 'other', category: 'Other' },
    { src: img69, alt: 'other', category: 'Other' },
    { src: img70, alt: 'other', category: 'Other' },
    { src: img71, alt: 'other', category: 'Other' },
    { src: img72, alt: 'other', category: 'Other' },
    { src: img73, alt: 'other', category: 'Other' },
    { src: img74, alt: 'other', category: 'Other' },
    { src: img75, alt: 'other', category: 'Other' },
    { src: img76, alt: 'other', category: 'Other' },
    { src: img77, alt: 'other', category: 'Other' },
    { src: img78, alt: 'other', category: 'Other' },
    { src: img79, alt: 'other', category: 'Other' },
    { src: img80, alt: 'other', category: 'Other' },
    { src: img81, alt: 'other', category: 'Other' },
    { src: img82, alt: 'other', category: 'Other' },
    { src: img83, alt: 'other', category: 'Other' },
    { src: img84, alt: 'other', category: 'Other' },
    { src: img85, alt: 'other', category: 'Other' },
    { src: img86, alt: 'other', category: 'Other' },
    { src: img87, alt: 'other', category: 'Other' },
    { src: img88, alt: 'other', category: 'Other' },
    { src: img89, alt: 'other', category: 'Other' },

    { src: img91, alt: 'other', category: 'Other' },
    { src: img92, alt: 'other', category: 'Other' },
    { src: img93, alt: 'other', category: 'Other' },
    { src: img94, alt: 'other', category: 'Other' },
    { src: img95, alt: 'other', category: 'Other' },
    { src: img96, alt: 'other', category: 'Other' },
    { src: img97, alt: 'other', category: 'Other' },
    { src: img98, alt: 'other', category: 'Other' },
    { src: img99, alt: 'other', category: 'Other' },
    { src: img100, alt: 'other', category: 'Other' },
    { src: img101, alt: 'other', category: 'Other' },
    { src: img102, alt: 'other', category: 'Other' },
    { src: img103, alt: 'other', category: 'Other' },
    { src: img104, alt: 'other', category: 'Other' },
    { src: img105, alt: 'other', category: 'Other' },
    { src: img106, alt: 'other', category: 'Other' },
    { src: img107, alt: 'other', category: 'Other' },
    { src: img108, alt: 'other', category: 'Other' },
    { src: img109, alt: 'other', category: 'Other' },
    { src: img110, alt: 'other', category: 'Other' },
    { src: img111, alt: 'other', category: 'Other' },
    { src: img112, alt: 'other', category: 'Other' },
    { src: img113, alt: 'other', category: 'Other' },
    { src: img114, alt: 'other', category: 'Other' },
    { src: img115, alt: 'other', category: 'Other' },
    { src: img116, alt: 'other', category: 'Other' },
    { src: img117, alt: 'other', category: 'Other' },
    { src: img118, alt: 'other', category: 'Other' },
    { src: img119, alt: 'other', category: 'Other' },
    { src: img120, alt: 'other', category: 'Other' },
  ], []);

  const categories = ['All', 'Campus', 'Program', 'Activities', 'Events', "Class Room", "Other"];

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