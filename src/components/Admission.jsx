import { motion } from 'framer-motion';
import { ClipboardList, CheckCircle2 } from 'lucide-react';

export default function Admission() {
  const steps = [
    {
      title: 'Online Application',
      description: 'Fill out the initial inquiry form or contact our admission desk directly.',
    },
    {
      title: 'Document Submission',
      description: 'Submit previous academic records, transfer certificates, and passport-sized photos.',
    },
    {
      title: 'Counseling Session',
      description: 'A brief interaction with the student and parents to understand career goals.',
    },
    {
      title: 'Final Admission',
      description: 'Complete the fee payment and secure the seat for the upcoming academic year.',
    },
  ];

  return (
    // FIX: Added id="admission" and scroll-mt-24 to prevent the Navbar from covering the title
    <section id="admission" className="py-24 bg-white relative scroll-mt-20 md:scroll-mt-24">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4 shadow-sm"
          >
            <ClipboardList className="w-6 h-6 text-blue-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Admission Information
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join Gyana Jyoti Higher Secondary School and step into a world of excellence. admissions are open for +2 Arts and Commerce.
          </motion.p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 border-l-4 border-orange-500 pl-4 py-1">
                Admission Process
              </h3>
              <ul className="space-y-6">
                {steps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                      <p className="mt-1 text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-inner"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-6">Important Requirements</h3>
              <ul className="space-y-4 list-disc list-inside text-gray-700 leading-relaxed">
                <li className="pl-2">10th Board Marksheet & Certificate</li>
                <li className="pl-2">School Leaving / Transfer Certificate (Original)</li>
                <li className="pl-2">Conduct Certificate</li>
                <li className="pl-2">Passport size photographs (4 copies)</li>
                <li className="pl-2">Aadhar Card copy</li>
                <li className="pl-2">Migration Certificate (if applicable)</li>
              </ul>

              <div className="mt-8 pt-6 border-t border-blue-200">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block w-full text-center px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition-colors duration-300"
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}