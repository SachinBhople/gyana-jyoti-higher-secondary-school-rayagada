import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ClipboardCheck } from 'lucide-react';

export default function Rules() {
  const rules = [
    { title: "Regular Attendance", content: "Students must attend classes regularly. Minimum 75% attendance is compulsory." },
    { title: "Punctuality", content: "Students must reach the college on time and attend all scheduled classes." },
    { title: "Discipline", content: "Students must maintain discipline, respect teachers, and follow college instructions." },
    { title: "Uniform", content: "Wearing the college uniform is compulsory during college hours." },
    { title: "Mobile Phones", content: "Mobile phones are not allowed in classrooms during lectures." },
    { title: "Respect for Property", content: "Damaging college property such as desks, chairs, boards, is strictly prohibited." },
    { title: "Examinations", content: "Students must appear in all internal and final examinations." },
    { title: "Identity Card", content: "Students must carry their ID card in the college campus." },
    { title: "Behavior", content: "Ragging, fighting, or misbehavior with any student or staff is strictly prohibited." },
    { title: "Leave Permission", content: "Students must take permission from authorities before leaving the campus during class hours." },
    { title: "Library Rules", content: "Proper silence and discipline must be maintained in the library." },
    { title: "Participation", content: "Students are encouraged to participate in academic and cultural activities." },
    { title: "Compliance", content: "Students must follow all rules set by CHSE Odisha and the college administration." }
  ];

  return (
    // FIX: Added id="rules" and scroll-mt-24 for the Navbar scroll logic
    <section id="rules" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.02)_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4 shadow-sm"
          >
            <ShieldCheck className="w-6 h-6 text-red-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            College Rules & Regulations
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"
          />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Maintain a professional and respectful environment within the campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 bg-red-50 text-red-100 group-hover:text-red-500 transition-colors duration-300">
                <ClipboardCheck className="w-8 h-8 opacity-20" />
              </div>
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {rule.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10 underline-offset-4 decoration-red-200">
                {rule.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}