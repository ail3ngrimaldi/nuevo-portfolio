import React from 'react';
import '../styles/SliderParagraph.css';

// var longData = [
//     {
//         name: 'paragraph 1',
//         content: 'When I was a teenager I loved politics. Used to think that it was an outrageous tool to change our reality. With that on my mind, I decided to start de Law career.',
//     },
//     {
//         name: 'parrafo 2',
//         content: "The years came by and the reality hitted me. I enjoyed and learned about on Law School, and I also realised how damaged was the profession I've choosed."
//     },
//     {
//         name: 'parrafo 3',
//         content: "During the pandemic, with all it's forced virtuality, I said 'why don't take a break of this and learn something new?'. That's when I met 'Soy Henry', and decided to take advantage of all the free time I had."
//     },
//     {
//         name: 'parrafo 4',
//         content: "The previous year I had quitted my job because it was boring for me, I couldn't learn anything else there. So you can imagine how happy I was when I had a new topic every day, about things I've never heard about."
//     },
//     {
//         name: 'parrafo 5',
//         content: "Both in groups and by myself, I acquired an extremously large amount of knowledge. It made me realise that it's great to have plan B's on life, that nothing is determined and that life without changes is at least meaningless."
//     }
// ];

// var shortData = [
//     {
//         name: 'p1',
//         content: "When I realised that I couldn't learn anything else on my 2020 job, with no doubts I quitted. Of course I felt lost for a few months but luckily it didn't last"
//     },
//     {
//         name: 'p2',
//         content: "On the pandemics times, I was studying law but knowing that I needed a break from that. I started a 'free' intensive course to see if I was into programming. I had recently knew some software developers and I really needed to know how all that symbols could become websites."
//     },
//     {
//         name: 'p3',
//         content: "I started the course, I was really, really excited, and working both on groups or by myself, I got an exorbitant amount of knowledge that I've been using since. Meanwhile I finished the Law career (because I love that too), and besides who says I can't do both?"
//     }
// ]

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