import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

//Components
import Contact from './Sections/Contact/Contact';
import AboutMe from './Sections/About Me/AboutMe';
import Services from './Sections/Services/Services';
import Projects from './Sections/Projects/Projects';
import Hero from './Sections/Hero/Hero';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen) 
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero />
        <AboutMe/>
        <Projects/>
        <Services/>
        <Contact/>
        </>
    )
}

export default Home;