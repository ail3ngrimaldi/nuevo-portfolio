import React from 'react';
import '../../styles/Contact.css';

//Components
import SocialNetworkButtons from '../SocialNetwork';
import SvgWaveContact from '../Svgs/SvgWaveContact';
import ContactForm from '../ContactForm';

function Contact() {

    return (
        <div id='contact' className='container__contact--primary'>
             <h1 className='title__contact'>
                Contact Me
             </h1>
             <section className='container__contact--secondary'>
                  <SocialNetworkButtons/>
                  <ContactForm/>
                  <SvgWaveContact/>
             </section>
         </div>
    );
  }

export default Contact;