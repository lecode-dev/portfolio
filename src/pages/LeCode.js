import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects'
import Team from '../sections/Team';
import Footer from '../components/Footer';

function LeCode() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default LeCode;
