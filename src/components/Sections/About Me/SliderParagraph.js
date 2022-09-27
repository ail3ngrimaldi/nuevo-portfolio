import React from 'react';
import './SliderParagraph.css';

function SliderParagraph() {
    return(
        <ul className="slides">
            <input type="radio" name="radio-btn" id="img-1" checked readOnly/>
                <li className="slide-container">
                    <div className="slide">
                        When 2020 started I decided to quit my job. I wasn't able to learn anything else there, every day was equal to each other and I was feeling like a robot -a boring one-.
                    </div>
                    <div className="slider-nav"></div>
                </li>
            <input type="radio" name="radio-btn" id="img-2" />
                <li className="slide-container">
                    <div className="slide">
                        <p>
                            The pandemic started and althought I was studying law, I decided to take a break and learn something different. I chose <span className='slider__link'><a href='https://www.soyhenry.com/'>Soy Henry</a></span> because I wanted to be sure that programming was for me.
                        </p>
                    </div>
                    <div className="slider-nav"></div>
                </li>
            <input type="radio" name="radio-btn" id="img-3" />
                <li className="slide-container">
                    <div className="slide"> 
                        Unexpectedly I loved the content of the course, and working both on groups or by myself, I got an exorbitant amount of knowledge that I've been using since. Meanwhile I finished the Law career (because I love that too), and besides who says I can't do both?
                    </div>
                    <div className="slider-nav"></div>
                </li>
                <li className="slider-nav-dots">
                    <label htmlFor="img-1" className="slider-nav-dot" id="img-dot-1"></label>
                    <label htmlFor="img-2" className="slider-nav-dot" id="img-dot-2"></label>
                    <label htmlFor="img-3" className="slider-nav-dot" id="img-dot-3"></label>
                </li>
        </ul>
    );
}

export default SliderParagraph;