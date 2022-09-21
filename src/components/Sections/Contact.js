import React from 'react';
import '../../styles/Contact.css';

//Components
import SocialNetworkButtons from '../SocialNetwork';
import SvgWaveContact from '../Svgs/SvgWaveContact';
import ContactForm from '../ContactForm';

function Contact() {

    return (
        <div id='contact' className='container__contact'>
             <div className='screen__contact'>
               <div className='screen__body__contact'>
               <div className='screen__item__contact left'>
                    <h1 className='title__contact'>
                         Contact Me
                    </h1>
                    <SocialNetworkButtons/>
               </div>
               <div className='screen__item__contact'>
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