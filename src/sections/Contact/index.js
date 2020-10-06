import React from 'react';
import { Contact } from './styles';
import Button from '../../components/Button';
import ContactImg from '../../assets/images/contact-img.jpeg';
import Form from '../../components/ContactForm/';
import { SessionTitle } from '../ReusableStyling/styles';
import { Paragraph } from '../ReusableStyling/styles';

function ContactSession() {
    const showForm = () => {
        document.querySelector('form').style.display = 'flex';
        document.querySelector('.contact-img').style.display = 'none';
    };

    return (
        <Contact>
            <div className="div-left">
                <SessionTitle><span>0100.</span> Get In Touch With Us</SessionTitle>

                <Paragraph>Whenever you are a budding entrepreneur or a large established organization, we can provide a clear understanding of your need, technical excellence, ongoing Support, fast troubleshooting service.</Paragraph> 

                <Paragraph>Our team is composed by high quality developers that are totally into creating the best experience and provide a service of high standart for you.</Paragraph>

                <Paragraph>Our experience and knowledge can dramatically speed up the development of your project and idea. We are really excited to work with you. Let's make our fantastic software together!!!</Paragraph>

                <Button title="Say Hello to Us" onClick={showForm}/>
            </div>

            <div className="div-right">
                <img src={ContactImg} alt="Web Devolopment" className="contact-img"/>

                <Form/>
            </div>  

        </Contact>
    );
};

export default ContactSession;