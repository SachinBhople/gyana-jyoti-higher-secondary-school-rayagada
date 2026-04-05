import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with school's actual WhatsApp number (include country code, without +)
    const phoneNumber = '919583931222';

    const text = `*New Admission Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, '_blank');
  };

  return (
    // FIX: Added id="contact" and scroll-mt-24 for the Navbar scroll logic
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-100 blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4 shadow-sm"
          >
            <FaWhatsapp className="w-6 h-6 text-green-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-4 drop-shadow-md">Contact Information</h3>
                <p className="text-blue-100/90 text-lg leading-relaxed">
                  Have questions about admission or our facilities? Reach out to us, and we'll be happy to help you.
                </p>
              </div>

              <div className="space-y-6 mt-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1 text-orange-400">Our Location</h4>
                    <p className="text-blue-50/80 text-lg">sbi adb , kapilash Road,<br />Rayagada, Odisha</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1 text-orange-400">Phone</h4>
                    {/* ENHANCEMENT: Made phone numbers clickable for mobile users */}
                    <div className="space-y-1">
                      <a href="tel:+919437643643" className="block text-blue-50/80 text-lg hover:text-green-400 transition-colors">+91 94376 43643</a>
                      <a href="tel:+918658372642" className="block text-blue-50/80 text-lg hover:text-green-400 transition-colors">+91 86583 72642</a>
                      <a href="tel:+919583931222" className="block text-blue-50/80 text-lg hover:text-green-400 transition-colors">+91 95839 31222</a>
                    </div>
                    <p className="text-blue-50/60 text-sm mt-2"><span className="text-orange-400/80 font-semibold">MD:</span> Manoj Kumar Padhi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1 text-orange-400">Email</h4>
                    <a href="mailto:gyanajyotihsschoolrayagada@gmail.com" className="text-blue-50/80 text-lg hover:text-green-400 transition-colors break-all">
                      gyanajyotihsschoolrayagada@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-white"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-orange-500 pl-4 py-1">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50 focus:bg-white shadow-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50 focus:bg-white shadow-sm"
                  placeholder="+91 95839 31222"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50 focus:bg-white shadow-sm resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/30"
              >
                <FaWhatsapp className="w-5 h-5" />
                Submit via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}