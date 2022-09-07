//Styles
import '../../styles/Navbar.css';

//Components
import ContactButton from './ContactButton';
import ScrollToTop from '../ScrollToTop';
import { Bars } from './styledcomponents';
import cv  from '../../descargas-pdf/cveng.pdf';

//Dependencies
import { Link } from 'react-scroll';
import React from 'react';

const Navbar = ( {toggle} ) => {

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
};

    return (
    <>
      <nav className="navbar">
        <Bars onClick={toggle}/>
        <ul className="navbar-menu">
            <Link onClick={goToTop()} to='home' spy={true} smooth={true} offset={0} duration={500} className='navbar-menu-item'>Home</Link>
            <Link to='about' spy={true} smooth={true} offset={50} duration={500} className='navbar-menu-item'>About me</Link>
            <Link to='projects' spy={true} smooth={true} offset={50} duration={500} className='navbar-menu-item'>Projects</Link>
            <Link to='services' spy={true} smooth={true} offset={50} duration={500} className='navbar-menu-item'>Services</Link>
            <li className='navbar-menu-item'><a className='pdf-link' target="_blank" rel='noreferrer' href={cv} download="" title="">CV</a></li>
        </ul>
            <div className="navbar-button">
              <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
                <ContactButton label='Contact Me'/>
              </Link>
            </div>
      </nav>
      <ScrollToTop/>
    </>
    );
  }
  
  export default Navbar;
  