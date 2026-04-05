import { motion } from 'framer-motion';
import { BookOpen, Award, Users } from 'lucide-react';
import image2 from '../assets/image-2.jpeg';

export default function About() {
  const cards = [
    {
      title: 'Expert Faculty',
      description: 'Dedicated and experienced educators committed to your success.',
      icon: <Users className="w-10 h-10 text-orange-500" />,
      delay: 0.1,
    },
    {
      title: 'Quality Education',
      description: 'Comprehensive curriculum focused on practical and theoretical knowledge.',
      icon: <BookOpen className="w-10 h-10 text-blue-500" />,
      delay: 0.2,
    },
    {
      title: 'Proven Results',
      description: 'A track record of excellence with top-performing students every year.',
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      delay: 0.3,
    },
  ];

  return (
    // FIX: Added id="about" so the Navbar can find this section
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-100 blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ... Rest of your code stays the same ... */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4 shadow-sm"
          >
            <BookOpen className="w-6 h-6 text-blue-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            About Our Institution
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-8"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-blue-900 border-l-4 border-orange-500 pl-4">
              Welcome to Gyana Jyoti Higher Secondary School
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg text-justify p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              At Gyana Jyoti, we believe that education is the most powerful weapon which you can use to change the world. Established with a vision to impart quality education and holistic development, we pride ourselves on being one of the premier educational institutions in Rayagada.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg text-justify p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              As a +2 Arts and Commerce College, approved by CHSE Odisha, and powered by Padhi's Academy, we provide a nurturing environment where students can discover their true potential. Our experienced faculty and state-of-the-art facilities ensure that every student is well-prepared for their future academic and professional endeavors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-orange-400 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-sm"></div>
            <img
              src={image2}
              alt="Students in classroom"
              className="rounded-2xl shadow-2xl relative z-10 w-full h-auto object-cover object-center ring-4 ring-white"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-500 z-0"></div>

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl group-hover:bg-white shadow-sm transition-colors object-contain">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}