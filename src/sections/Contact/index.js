import React from 'react';
import { Contact } from './styles';
import Button from '../../components/Button';
import ContactImg from '../../assets/images/contact-img.jpeg';
import { SessionTitle } from '../Shared/styles';
import { Paragraph } from '../Shared/styles';

function ContactSession() {
    return (
        <Contact id="contact">
            <div className="div-left">
                <SessionTitle><span>0100.</span> Get In Touch With Us</SessionTitle>

                <Paragraph>Are you a budding entrepreneur? Or do you have a large established organization?  You know what? In the end of the day, it doesn’t really matter. We can help you start your own bussiness, but we can also help you expand it. Summing all of this in just five words: <span>We are here for you</span>.</Paragraph> 

                <Paragraph>Our team is composed by high quality developers that are totally into creating the best experience possible and providing a service of high standart for you and your company.</Paragraph>

                <Paragraph>Our experience and knowledge can dramatically speed up the development of your project and idea. We are really excited to work with you. Let's make our fantastic software together!!!</Paragraph>

                <a href="mailto:dev.lecode@gmail.com?subject=Job Contact">
                    <Button title="Say Hello to Us"/>
                </a>
            </div>

            <div className="div-right">
                <img src={ContactImg} alt="Web Devolopment Code" className="contact-img"/>
            </div>  

        </Contact>
    );
};

export default ContactSession;