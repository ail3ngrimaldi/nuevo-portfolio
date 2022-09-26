import React from 'react';

//Components
import AnimatedText from './AnimatedText';
import Picture from './Picture';

//styles
import './Home.css';

function Home () {
    return (
        <div id='home' className='container-home'>
                    <Picture/>
                    <AnimatedText/>
        </div>
    );
}

export default Home;