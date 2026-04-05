import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Helper function for smooth scrolling from footer links
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    if (elem) {
      const offset = 90; // Matches your Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600"></div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 w-fit">
              <img src={logo} alt="Logo" className="h-16 w-auto drop-shadow-lg" />
              <div>
                <h3 className="font-bold text-xl uppercase tracking-wider text-orange-400">Gyana Jyoti</h3>
                <p className="text-xs text-blue-200 font-medium">H.S. School, Rayagada</p>
              </div>
            </div>
            <p className="text-blue-100/80 leading-relaxed pt-2">
              Empowering students with quality education, modern facilities, and a nurturing environment to achieve their dreams.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://wa.me/919583931222" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-400 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Facilities', 'Gallery', 'Admission', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, `#${link.toLowerCase()}`)}
                    className="text-blue-100/80 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 rounded-full border border-blue-400 group-hover:bg-orange-400 transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">Academics</h4>
            <ul className="space-y-4">
              {['+2 Arts', '+2 Commerce', 'CHSE Curriculum', "Padhi's Academy Integrations"].map((item) => (
                <li key={item} className="text-blue-100/80 hover:text-orange-400 transition-colors flex items-center gap-2 group cursor-pointer">
                  <span className="w-2 h-2 rounded-full border border-blue-400 group-hover:bg-orange-400 transition-colors"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-blue-100/80">
                <MapPin className="text-orange-400 shrink-0 mt-1" size={20} />
                <span>sbi adb , kapilash Road, Rayagada, Odisha, India - 765001</span>
              </li>
              <li className="flex flex-col gap-2 text-blue-100/80">
                <div className="flex items-center gap-4">
                  <Phone className="text-orange-400 shrink-0" size={20} />
                  <a href="tel:+919437643643" className="hover:text-orange-400 transition-colors">+91 94376 43643</a>
                </div>
                <div className="flex items-center gap-4 ml-9">
                  <a href="tel:+918658372642" className="hover:text-orange-400 transition-colors">+91 86583 72642</a>
                </div>
                <div className="flex items-center gap-4 ml-9">
                  <a href="tel:+919583931222" className="hover:text-orange-400 transition-colors">+91 95839 31222</a>
                </div>
              </li>
              <li className="flex items-center gap-4 text-blue-100/80">
                <Mail className="text-orange-400 shrink-0" size={20} />
                <a href="mailto:gyanajyotihsschoolrayagada@gmail.com" className="hover:text-orange-400 transition-colors break-all">
                  gyanajyotihsschoolrayagada@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10 space-y-2 text-sm text-blue-200/70">
              <p><span className="text-orange-400/80 font-semibold uppercase text-xs tracking-wider">Managing Director:</span> Manoj Kumar Padhi</p>
              <p><span className="text-orange-400/80 font-semibold uppercase text-xs tracking-wider">SAMS Code:</span> 27135103</p>
              <p><span className="text-orange-400/80 font-semibold uppercase text-xs tracking-wider">UDISE Code:</span> 21271401352</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 text-center text-blue-100/60 text-sm flex flex-col items-center">
          <p>
            &copy; {currentYear} Gyana Jyoti Higher Secondary School. All rights reserved.
            <span className="mx-2">|</span>
            Approved by CHSE Odisha
            <span className="mx-2">|</span>
            Powered by <span className="text-orange-400">Padhi's Academy</span>
          </p>
          <p className="mt-4 text-xs tracking-wider opacity-70 border-t border-white/5 pt-3 inline-block">
            Developed and Designed by <span className="text-orange-400 font-semibold uppercase">Pooja Mandale</span>
          </p>
        </div>
      </div>
    </footer>
  );
}