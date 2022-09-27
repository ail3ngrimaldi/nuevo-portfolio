import React from 'react';
import './Contact.css';

//Components
import SocialNetworkButtons from './SocialNetworkLinks';
import SvgWaveContact from './SvgWaveContact';
import ContactForm from './ContactForm';

function Contact() {

    return (
        <div id='contact' className='container__contact'>
             <div className='screen__contact'>
               <div className='screen__body__contact'>
               <div className='screen__item__contact left'>
                    <h1 className='title__contact'>
                         Contact Me
                    </h1>
                    <p className='paragraph__contact'>Feel free to send me an e-mail, I'll be happy to see people are visiting my website.</p>
                    <SocialNetworkButtons/>
               </div>
               <div className='screen__item__contact right'>
                  <ContactForm/>
               </div>
               </div>
                    <div className='svg__position'>
                         <SvgWaveContact/>
                    </div>
             </div>
         </div>
    );
  }

export default Contact;