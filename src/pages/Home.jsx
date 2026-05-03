import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactHome from '../components/ContactHome';

const Home = () => {
  return (
    <main>
      {/* Har section ki ID Navbar ke href se match honi chahiye */}
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="gallery"><Gallery /></section>
      <Testimonials />
      <ContactHome />
    </main>
  );
};

export default Home;