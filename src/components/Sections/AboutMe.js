import React from 'react';
import '../../styles/AboutMe.css';
import SliderParagraph from '../SliderParagraph';

function AboutMe() {

    return (
        <div id='about' className='section-aboutme' >
            <h1 className='title-aboutme'>
                From lawyer to programmer
            </h1>
            <SliderParagraph/>
        </div>
    );
  }
  
  export default AboutMe;
  