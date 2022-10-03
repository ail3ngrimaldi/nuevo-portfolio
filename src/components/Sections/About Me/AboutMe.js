import React from 'react';
import './AboutMe.css';
import SvgAboutBackground from './SvgAboutBackground';
import Slider from './Slider';

const obj = {
    text1: 'The pandemic started and althought I was studying law, I decided to take a break and learn something new and different. I chose ',
    text2: ' because I wanted to be sure that programming was for me.',
    link: 'https:/www.soyhenry.com'
  };

  const textAndLink = () => {
    return(
       <p>
         {obj.text1}
         <a href={obj.link} className='link__slider'>Soy Henry</a>
         {obj.text2}
       </p>
     );
 }

const data = [
    {
        title: "beginings",
        text: "When 2020 started I decided to quit my job. I wasn't able to learn anything else there, every day was equal to each other and I was feeling like a robot -a boring one-."
    },
    {
        title: 'middle',
        text: textAndLink()
    },
    {
        title: 'end',
        text: "Unexpectedly I loved the content of the course, and working both on groups or by myself, I got an exorbitant amount of knowledge that I've been using since. Meanwhile I finished the Law career (because I love that too), and besides who says I can't do both?"
    }

]

function AboutMe() {
    return (
        <div id='about' className='section-aboutme' >
            <h1 className='title-aboutme'>
                From lawyer to programmer
            </h1>
            <SvgAboutBackground/>
            <Slider data={data}/>
        </div>
    );
  }
  
  export default AboutMe;
  