import { motion } from 'framer-motion';
import { Users, GraduationCap, Award } from 'lucide-react';

export default function Faculty() {
  const staff = [
    { name: "Manoj Kumar Padhi", designation: "Managing Director", icon: <Award className="w-5 h-5" /> },
    { name: "Ruturaj Gantayat", designation: "Principal", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "H. Behera", designation: "Lecturer in English", icon: <Users className="w-5 h-5" /> },
    { name: "CMA G. T. Rao", designation: "Lecturer in Commerce", icon: <Users className="w-5 h-5" /> },
    { name: "Satya Ranjan Satapathy", designation: "Lecturer in Odia", icon: <Users className="w-5 h-5" /> },
    { name: "Prafull Kumar Swain", designation: "Lecturer in Commerce", icon: <Users className="w-5 h-5" /> },
    { name: "Krishiv Swain", designation: "Lecturer in Commerce", icon: <Users className="w-5 h-5" /> },
    { name: "Mrs P Pradhan", designation: "Lect. in Commerce", icon: <Users className="w-5 h-5" /> },
    { name: "N. Neeraja", designation: "Lect. in Commerce", icon: <Users className="w-5 h-5" /> },
    { name: "Roja Kumari", designation: "Lecturer in Hindi", icon: <Users className="w-5 h-5" /> },
    { name: "Raja Babu Takri", designation: "Lecturer in History", icon: <Users className="w-5 h-5" /> },
    { name: "Jyoti Mishra", designation: "Lecturer in Political Science", icon: <Users className="w-5 h-5" /> },
    { name: "Jyostna Majhi", designation: "Lecturer in Economics", icon: <Users className="w-5 h-5" /> },
    { name: "G. Bikash Kumar", designation: "Lecturer in Education", icon: <Users className="w-5 h-5" /> },
    { name: "Dikhita Dhal", designation: "Lect in Environment Science and English", icon: <Users className="w-5 h-5" /> },
    { name: "Baishnab Bagh", designation: "Yoga Guru", icon: <Users className="w-5 h-5" /> },
    { name: "Chatish Nayak", designation: "Dance Master", icon: <Users className="w-5 h-5" /> },
    { name: "Suchismitha pradhan", designation: "PRO/DEO", icon: <Users className="w-5 h-5" /> },
    { name: "Sohan Kumar", designation: "Supporting Staff", icon: <Users className="w-5 h-5" /> },
    { name: "Dipani Hial", designation: "Supporting Staff", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section id="faculty" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl -ml-32 -mt-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-4 shadow-sm"
          >
            <Users className="w-6 h-6 text-orange-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Our Expert Faculty
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"
          />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team of educators and professionals behind Gyana Jyoti's success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staff.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  {member.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {member.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
