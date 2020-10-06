import React from 'react';
import { About } from './styles';
import { SessionTitle } from '../ReusableStyling/styles';
import { Paragraph } from '../ReusableStyling/styles';
import ArrowImg from '../../assets/images/arrow-right.svg';
import JSIcon from '../../assets/images/js-icon.svg';
import HTMLIcon from '../../assets/images/html-icon.svg';
import SassIcon from '../../assets/images/sass-icon.svg';
import NodeIcon from '../../assets/images/node-icon.svg';
import PythonIcon from '../../assets/images/python-icon.svg';
import CSSIcon from '../../assets/images/css-icon.svg';
import ReactIcon from '../../assets/images/react-icon.svg';
import AboutImg from '../../components/AboutImg';

function AboutSession() {
    const listItem = (langName ,imgSrc, imgAlt) => (
        <li> 
            <img className="list-icon" src={ArrowImg} alt="List icon"/>
            {langName}
            <img className="tech-icon" src={imgSrc} alt={imgAlt}/>
        </li> 
    );

    return (
        <About>
            <div className="div-left">
                <SessionTitle><span>0001.</span>About Us</SessionTitle>

                <Paragraph>Hey!!! We're <span>LeCode</span>, a software developer team located in Montes Claros, Brazil that builds websites and applications for you.</Paragraph>

                <Paragraph>We are 4 friends (<button href="#">@Emerson</button>, <button href="#">@Erick</button>, <button href="#">@Lucas</button>, <button href="#">@Mari</button>) that got together to provide you the best freelancer experience regarding high speed, high quality and good communication.</Paragraph>
                
                <Paragraph>Visit our <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github profile</a> for code samples and some open source projects that we've built.</Paragraph>

                <Paragraph>Here are the technologies that we have been working with recently:</Paragraph>

                <div className = "tech-list"> 
                    <ul>
                        {listItem('JavaScript' ,JSIcon, 'Js icon')}
                        {listItem('HTML' ,HTMLIcon, 'HTML icon')}
                        {listItem('Sass' ,SassIcon, 'Sass icon')}
                        {listItem('Node.JS', NodeIcon, 'Node icon')}
                    </ul>
                    <ul>
                        {listItem('Python', PythonIcon, 'Python icon')}
                        {listItem('CS33', CSSIcon, 'CSS icon')}
                        {listItem('React', ReactIcon, 'React icon')}
                        {listItem('Express', NodeIcon, 'Node icon')}
                    </ul>
                </div>
            </div>

            <div className="div-right">
                <AboutImg />
            </div>
        </About>
    );
};

export default AboutSession;