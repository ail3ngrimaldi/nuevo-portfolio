import React from "react";
import '../styles/ContactForm.css';

export default function ContactForm () {

    return (
    <div>
        <div className='contact-container'>
            <label htmlFor='name'>Name:</label>
                <input type='text' placeholder='Juan Font' className='contact-input' name='name' id='name'/>
            <label htmlFor='email'>E-mail:</label>
                <input type='email' placeholder='heregoes@youremail.com' className='contact-input' name='email' id='email'/>
            <label htmlFor='subject'>Subject:</label>
                <input type='text' placeholder='Open position' className='contact-input' name='subject' id='subject'/>
            <label htmlFor='content'>Content:</label>
                <textarea type='text' placeholder='Here goes your email body' cols='75' rows='5' className='contact-input email__content' name='content' id='content'/>
            <button className='button__contactform' type='onSubmit'>SEND</button>
        </div>
    </div>
    );
}