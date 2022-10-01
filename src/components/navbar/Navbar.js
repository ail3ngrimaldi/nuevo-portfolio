//Styles
import './Navbar.css';

//Components
import Button from './Button';
import ScrollToTop from '../ScrollToTop';
import { Bars } from '../Sidebar/SidebarElements';
import cv  from '../../descargas-pdf/cveng.pdf';

//Dependencies
import { Link } from 'react-scroll';
import React from 'react';

const Navbar = ( {toggle} ) => {

    return (
    <>
      <nav className="navbar">
        <Bars onClick={toggle}/>
        <ul className="navbar-menu">
            <Link  to='hero' spy={true} smooth={true} offset={0} duration={500} className='navbar-menu-item'>Home</Link>
            <Link to='about' spy={true} smooth={true} offset={50} duration={500} className='navbar-menu-item'>About me</Link>
            <Link to='projects' spy={true} smooth={true} offset={50} duration={500} className='navbar-menu-item'>Projects</Link>
            <Link to='services' spy={true} smooth={true} offset={50} duration={500} className='navbar-menu-item'>Services</Link>
            <a className='link--light link__pdf' target="_blank" rel='noreferrer' href={cv} download="cv-ailengrimaldi" title="">CV</a>
        </ul>
            <div className='navbar-button'>
              <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
                <Button label='Contact Me'/>
              </Link>
            </div>
      </nav>
      <ScrollToTop/>
    </>
    );
  }
  
  export default Navbar;
  