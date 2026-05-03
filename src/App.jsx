import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './pages/Navbar';
// import Hero from './components/Hero';
import Home from './pages/Home';
import ServiceBlog from './pages/ServiceBlog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-dentist-black selection:bg-black selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:serviceId" element={<ServiceBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Baaki routes yahan add karein */}
        </Routes>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;