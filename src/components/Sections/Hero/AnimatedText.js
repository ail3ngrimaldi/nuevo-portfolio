import './AnimatedText.scss';
import React from 'react';

function AnimatedText() {
    return (
        <div className="content">
          <div className="content__container">
            <p className="content__container__text">
              Hello
            </p>
            <ul className="content__container__list">
              <li className="content__container__list__item">world!</li>
              <li className="content__container__list__item">recruiter!</li>
              <li className="content__container__list__item">friend!</li>
              <li className="content__container__list__item">everybody!</li>
            </ul>
          </div>
        </div>
    );
  }
  
  export default AnimatedText;