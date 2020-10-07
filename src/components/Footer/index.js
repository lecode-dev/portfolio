import React from 'react';
import { Footer } from './styles';
import GitIcon from '../../assets/images/github-logo.svg';
import LinkedinIcon from '../../assets/images/linkedin-logo.svg';
import InstagramIcon from '../../assets/images/instagram-logo.svg';
import TwitterIcon from '../../assets/images/twitter-logo.svg';

function FooterComp() {
    return(
        <Footer>
            <p>LeCode - lecode@gmail.com</p>

            <ul>
                <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src={GitIcon} alt="Git icon"/></a></li>
                <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={LinkedinIcon} alt="Linkedin icon"/></a></li>
                <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram icon"/></a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="Twitter icon"/></a></li>
            </ul>
        </Footer>
    )
}

export default FooterComp;