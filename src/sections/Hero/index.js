import React from 'react';
import { Hero } from "./styles";
import Button from '../../components/Button/index';
import BackImg from '../../components/CodeImg/index';

function HeroMain() {
    return (
        <Hero>
            <BackImg/>
            <p>Hey there, we are</p>
            <h2>LeCode</h2>
            <h3>We love creating solutions for your problems</h3>
            <p>We are a software developer team based in Montes Claros, MG, Brazil specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>
            <Button/>
        </Hero>
    )
}

export default HeroMain;