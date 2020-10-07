import React from 'react';
import { Hero } from './styles';
import { Paragraph } from '../Shared/styles';
import Button from '../../components/Button';

function HeroMain() {
  return (
    <Hero>
      <p>Hey there, we are</p>

      <h2>LeCode</h2>

      <h3>We love creating new things</h3>

      <Paragraph>
        We are a software developer team based in Montes Claros, MG, Brazil
        specializing in building (and occasionally designing) exceptional,
        high-quality websites and applications.
      </Paragraph>  

      <Button title="Contact Us"/>
    </Hero>
  );
}

export default HeroMain;