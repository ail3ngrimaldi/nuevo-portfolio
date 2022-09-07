import '../styles/Title.css';
import React from 'react';


function Title ({label}) {
    return (
        <h1 className='title'>
            {label}
            <div className='underline-title'></div>
        </h1>
    );
}

export default Title;