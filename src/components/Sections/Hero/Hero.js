import React from 'react';

//Components
import AnimatedText from './AnimatedText';
import Picture from './Picture';

//styles
import './Hero.css';

function Hero () {
    return (
        <div id='hero' className='container-hero'>
                    <Picture/>
                    <AnimatedText/>
        </div>
    );
}

export default Hero;