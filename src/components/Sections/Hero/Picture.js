import React from 'react';
import './Picture.css';
import profilePicture from '../../../assets/profpic.png';

function Picture () {
    return (
<div className="person">
      <div className="container">
        <div className="container-inner">
          <img
            className="circle"
            alt=''
          />
    <img
            className="img img3"
            src={profilePicture}
            alt="profile-img"
          />
        </div>

      </div>        
      <div className='home-paragraph'>
        Hey! My name is Ailen and I'm a 
        <span className='home-title'> FullStack Web Developer </span>
        this is my done-with-plenty-of-love website, I hope you like it:).
      </div>
    </div>
        );
    }
    
    export default Picture;