import React from 'react';
import '../styles/Paragraph.css';

function Paragraph ({subtitle, content}) {
    return (
        <>
            <h2 className='subtitle-name'>
                {subtitle}
            </h2>
            <p className='paragraph-home'>
                {content}
            </p>
        </>
    );
}

export default Paragraph;