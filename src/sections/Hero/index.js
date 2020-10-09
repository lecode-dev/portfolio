import React from 'react';
import { Hero } from './styles';
import { Paragraph } from '../Shared/styles';
import Button from '../../components/Button';
import { Link } from 'react-scroll';

function HeroMain() {
  return (
    <Hero id="hero">
      <p>Hey there, we are</p>

      <h2>LeCode</h2>

      <h3>We love what we do</h3>

      <Paragraph>
        We are a software developer team based in Montes Claros, MG, Brazil specialized in building (and sometimes designing) modern, exceptional, high-quality websites and applications.
      </Paragraph>  

      <Link to="contact" duration={1000} offset={-60} smooth>
        <Button title="Talk to Us"/>
      </Link>
    </Hero>
  );
}

export default HeroMain;