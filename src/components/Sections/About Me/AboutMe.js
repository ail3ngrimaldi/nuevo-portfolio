import React from 'react';
import './AboutMe.css';
import SvgAboutBackground from './SvgAboutBackground';

function AboutMe() {

    return (
        <div id='about' className='section-aboutme' >
            <h1 className='title-aboutme'>
                From lawyer to programmer
            </h1>
            <SvgAboutBackground/>
        </div>
    );
  }
  
  export default AboutMe;
  