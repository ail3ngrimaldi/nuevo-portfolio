import React from 'react';
import '../../styles/AboutMe.css';
import SliderParagraph from '../SliderParagraph';
import SvgAboutBackground from '../Svgs/SvgAboutBackground';

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
  