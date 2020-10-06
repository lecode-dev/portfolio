import React from 'react';
import {ContactForm} from './styles';

function Form() {
    return(
        <ContactForm>
            <h3>Send us a message</h3>

            <input type="text" placeholder="Your name" required/>

            <input type="email" placeholder="Your email" required/>

            <textarea placeholder="Brief description of the project" rows="5" required></textarea>
            
            <label className="container">
                <input type="checkbox"/>
                <span className="checkmark"></span>
                It's an urgent project.
            </label>
            
            <input type="submit"/>
        </ContactForm>
    )   
}

export default Form;

