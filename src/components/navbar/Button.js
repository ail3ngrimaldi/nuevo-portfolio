import './Button.css';
import React from 'react';

function Button(props) {
    return (
      <button className="standard__button" type={props.type} onSubmit={props.onSubmit}>
        {props.label}
      </button>
    );
  }
  
  export default Button;