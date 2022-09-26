import React from 'react';
import './SliderParagraph.css';

function SliderParagraph() {
    return(
        <ul className="slides">
            <input type="radio" name="radio-btn" id="img-1" checked readOnly/>
                <li className="slide-container">
                    <div className="slide">
                        When I realised that I couldn't learn anything else on my 2020 job, with no doubts I quitted. Of course I felt lost for a few months but luckily it didn't last.
                    </div>
                    <div className="slider-nav"></div>
                </li>
            <input type="radio" name="radio-btn" id="img-2" />
                <li className="slide-container">
                    <div className="slide">
                        On the pandemics times, I was studying law but knowing that I needed a break from that. I started a 'free' intensive course to see if I was into programming. I had recently knew some software developers and I really needed to know how all that symbols could become websites.
                    </div>
                    <div className="slider-nav"></div>
                </li>
            <input type="radio" name="radio-btn" id="img-3" />
                <li className="slide-container">
                    <div className="slide"> 
                        I started the course, I was really, really excited, and working both on groups or by myself, I got an exorbitant amount of knowledge that I've been using since. Meanwhile I finished the Law career (because I love that too), and besides who says I can't do both?
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