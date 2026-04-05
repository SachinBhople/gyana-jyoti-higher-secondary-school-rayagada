import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Faculty from './components/Faculty';
import Facilities from './components/Facilities';
import Rules from './components/Rules';
import Gallery from './components/Gallery';
import Admission from './components/Admission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 overflow-x-hidden selection:bg-orange-400 selection:text-white">
      <Navbar />
      <section id="home" className="scroll-mt-20 lg:scroll-mt-24"><Hero /></section>
      <section id="about" className="scroll-mt-20 lg:scroll-mt-24"><About /></section>
      <section id="faculty" className="scroll-mt-20 lg:scroll-mt-24"><Faculty /></section>
      <section id="facilities" className="scroll-mt-20 lg:scroll-mt-24"><Facilities /></section>
      <section id="rules" className="scroll-mt-20 lg:scroll-mt-24"><Rules /></section>
      <section id="gallery" className="scroll-mt-20 lg:scroll-mt-24"><Gallery /></section>
      <section id="admission" className="scroll-mt-20 lg:scroll-mt-24"><Admission /></section>
      <section id="contact" className="scroll-mt-20 lg:scroll-mt-24"><Contact /></section>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
