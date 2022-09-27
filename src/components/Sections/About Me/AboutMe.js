import React from 'react';
import './AboutMe.css';
import SliderParagraph from './SliderParagraph';
import SvgAboutBackground from './SvgAboutBackground';

function AboutMe() {

    return (
        <div id='about' className='section-aboutme' >
            <h1 className='title-aboutme'>
                From lawyer to programmer
            </h1>
            <SvgAboutBackground/>
            <SliderParagraph/>
        </div>
    );
  }
  
  export default AboutMe;
  