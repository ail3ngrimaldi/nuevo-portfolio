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
            <input placeholder='Open position' className='contact-input'></input>
            <label>Content:</label>
            <input placeholder='Here goes your email body' className='contact-input'></input>
            <button>SEND</button>
        </div>
    </div>
    );
}