import './ContactForm.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Button from '../../Navbar/Button';

import { init } from '@emailjs/browser';
const USER_ID = process.env.REACT_APP_USER_ID;
init(USER_ID);

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;


export default function ContactForm () {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire ({
              icon: 'success',
              title: 'Thank you for your email, I`ll answer as soon as posible :)'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: 'I`ll try better next time :)',
            })
        });
        e.target.reset()
     };

    return (
    <div>
        <div className='contactform__container'>
            <form onSubmit={sendEmail} className='contactform__form'>
                <label htmlFor='to_name'/>
                    <input 
                        className='input__disabled' 
                        disabled
                        name='to_name'
                        id='to_name'
                    />
                <label htmlFor='name'>Name:</label>
                    <input 
                        type='text' 
                        placeholder='Your name' 
                        className='input__contactform' 
                        name='from_name' 
                        id='from_name'
                        required minLength='1' maxLength='70'
                        />
                <label htmlFor='reply_to'>E-mail:</label>
                    <input 
                        type='email' 
                        placeholder='heregoes@youremail.com' 
                        className='input__contactform' 
                        name='reply_to' 
                        id='reply_to'
                        required
                        />
                <label htmlFor='subject'>Subject:</label>
                    <input 
                        type='text' 
                        placeholder='The subject as descriptive as possible' 
                        className='input__contactform' 
                        name='subject' 
                        id='subject'
                        required minLength='10' maxLength='400'
                        />
                <label htmlFor='message'>Content:</label>
                    <textarea 
                        type='text' 
                        placeholder='Here goes your email body' 
                        cols='75' 
                        rows='5' 
                        className='input__contactform email__content' 
                        name='message' 
                        id='message'
                        required minLength='10' maxLength='1000'
                        />
                <Button type='onSubmit' onSubmit={sendEmail} label='SEND'/>
            </form>
        </div>
    </div>
    );
}