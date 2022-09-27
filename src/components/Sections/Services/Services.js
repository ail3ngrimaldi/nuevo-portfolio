import React from 'react';
import './Services.css';
import SvgArrow from './SvgArrow';

function Services() {
    return (
        <div id='services' className='container__services'>
            <div className='bgimage__services'>
            <h1 className='title__services'>Get your landing page</h1>
             <SvgArrow/>
                <ul className='ul__services'>
                    <li className='li__services'><span className='title__li__services'>From scratch. </span> 
                    So I can do your landing page exactly as you want.</li>
                    <li className='li__services'><span className='title__li__services'>Active listening. </span> 
                    Because to me it's the main thing in every client-developer relation.</li>
                    <li className='li__services'><span className='title__li__services'>With creativity. </span>
                    I believe we've had enough of MUI system, don't you?</li>
                </ul>
            </div>
        </div>
    );
  }
  
  export default Services;