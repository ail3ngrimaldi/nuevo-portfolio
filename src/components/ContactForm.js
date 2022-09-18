import React from "react";
import '../styles/ContactForm.css';

export default function ContactForm () {

    return (
    <div>
            <div className='contact-container'>
            <label>Name:</label>
            <input placeholder='Juan Font' name='name' className='contact-input'></input>
            <label htmlFor='email'>E-mail:</label>
            <input type='email' placeholder='heregoes@youremail.com' className='contact-input'></input>
            <label>Subject:</label>
            <input type='text' placeholder='Open position' className='contact-input'></input>
            <label>Content:</label>
            <textarea placeholder='Here goes your email body' cols='75' rows='5' className='contact-input email__content'></textarea>
            <button className='button__contactform' type='onSubmit'>SEND</button>
        </div>
    </div>
    );
}