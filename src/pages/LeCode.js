import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Projets from '../sections/Projects'
import Team from '../sections/Team';

function LeCode() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projets />
      <Team />
      <Contact />
    </>
  );
}

export default LeCode;
