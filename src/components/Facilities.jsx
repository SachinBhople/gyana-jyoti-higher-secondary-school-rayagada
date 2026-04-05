import { motion } from 'framer-motion';
import { Wind, Droplets, BookOpen, UserCheck, Shield, Award, Users, Star } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: 'Expert Faculty',
      description: 'Excellent and experienced teachers including special classes for Dance, Yoga, and support for all subjects.',
      icon: <UserCheck className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
      color: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-500',
    },
    {
      title: 'AC Class Rooms',
      description: 'Fully air-conditioned, spacious classrooms with CCTV surveillance for a safe and comfortable learning environment.',
      icon: <Wind className="w-12 h-12 text-cyan-500 group-hover:text-white transition-colors duration-300" />,
      color: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-500',
    },
    {
      title: 'Study Materials',
      description: 'Text books, sample papers, bags, uniforms, and study materials provided to all students.',
      icon: <BookOpen className="w-12 h-12 text-purple-500 group-hover:text-white transition-colors duration-300" />,
      color: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-500',
    },
    {
      title: 'Drinking Water',
      description: 'Safe and purified drinking water facilities with both hot and cold options.',
      icon: <Droplets className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      color: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      title: 'Separate Hostels',
      description: 'Dedicated hostel facilities for boys and girls with personal attention and discipline.',
      icon: <Shield className="w-12 h-12 text-emerald-500 group-hover:text-white transition-colors duration-300" />,
      color: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-500',
    },
    {
      title: 'Regular Tests',
      description: 'Regular test series, various types of examinations, and special doubt clearing classes.',
      icon: <Award className="w-12 h-12 text-yellow-500 group-hover:text-white transition-colors duration-300" />,
      color: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-500',
    },
    {
      title: 'Career Guidance',
      description: 'Comprehensive career guidance and counseling to help students choose the right path.',
      icon: <Users className="w-12 h-12 text-orange-500 group-hover:text-white transition-colors duration-300" />,
      color: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-500',
    },
    {
      title: 'Holistic Growth',
      description: 'Dance and Yoga classes along with indoor games for physical and mental well-being.',
      icon: <Star className="w-12 h-12 text-pink-500 group-hover:text-white transition-colors duration-300" />,
      color: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-500',
    },
  ];

  return (
    // FIX: Added id="facilities" and scroll-mt-24 for navigation support
    <section id="facilities" className="py-24 bg-white relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4 shadow-sm"
          >
            <Shield className="w-6 h-6 text-purple-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Our Facilities
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We provide state-of-the-art infrastructure to ensure the best academic experience for our students.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100 ${facility.color} ${facility.hoverColor} cursor-pointer`}
            >
              <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-shadow group-hover:bg-white/20 backdrop-blur-sm">
                {facility.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                {facility.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}