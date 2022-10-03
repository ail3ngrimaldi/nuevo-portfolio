import React, { useState } from 'react';
import { Container, TextContainer, NavButton, DotContainer, Dot } from './SliderElements';
 
const Slider = ({ data }) => {
    const [textIndex, setTextIndex] = useState(0)

    const next = () => { 
        setTextIndex(state => state +=1);
        if (textIndex === data.length -1) setTextIndex(0)
    }

    const prev = () => { 
        setTextIndex(state => state -=1);
        if (textIndex === 0) setTextIndex(data.length -1);
    }

    return (
        <Container>
            <TextContainer>
                {data[textIndex].text}
            </TextContainer>
            <NavButton right onClick={next}>
                <i className='fas fa-arrow-circle-right'></i>
            </NavButton>
            <NavButton left onClick={prev}>
                <i className='fas fa-arrow-circle-left'></i>
            </NavButton>
            <DotContainer>
                {
                data.map((dot, index) => (
                    <Dot key={dot.text} active={(index === textIndex)} />
                ))
                }
            </DotContainer>
        </Container>
    )
}

export default Slider;