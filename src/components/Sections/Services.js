import React from 'react';
import '../../styles/Services.css';

function Services() {
    return (
        <div id='services' className='container__services'>
            <div className='bgimage__services'>
            <h1 className='title__services'>Get your landing page</h1>
                <ul className='ul__services'>
                    <li className='li__services'><span>From scratch. </span> 
                    So I can do your landing page exactly as you want.</li>
                    <li className='li__services'><span>Active listening. </span> 
                    Because to me it's the main thing in every client-developer relation.</li>
                    <li className='li__services'><span>With creativity. </span>
                    I believe we've had enough of MUI system, don't you?</li>
                </ul>
            </div>
        </div>
    );
  }
  
  export default Services;