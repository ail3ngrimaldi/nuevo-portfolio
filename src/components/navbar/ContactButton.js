import '../../styles/ContactButton.css';
import React from 'react';


function ContactButton({label}) {
    return (
      <button className="contact-button">
        {label}
      </button>
    );
  }
  
  export default ContactButton;