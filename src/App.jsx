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
      <Hero />
      <About />
      <Faculty />
      <Facilities />
      <Rules />
      <Gallery />
      <Admission />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
