import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
// import tachito from '../../../assets/tachito.png';
// import pomodoro from '../../../assets/pomodoro.png';
// import notavailable from '../../../assets/notav.png';
// import portfolio from '../../../assets/portfolio.png';

import { images } from './Images';

function Projects() {
    return (
        <div id='projects' className='container__projects' >
            <h1 className='title__projects'>
                Projects
            </h1>
            <div className='cards__container'>
                <ProjectCard img={images.tachito}
                             title="Tachito compost"
                             description="Project with the aim of generating a positive impact on the environment, developed with React Native."
                />
                <ProjectCard img={images.pomodoro}
                             title="Pomodoro timer"
                             description="Design created with Figma."
                             link="https://www.figma.com/file/UEWtzV3DeffnyvNmYFVFav?node-id=2%3A4"
                />
                <ProjectCard img={images.notavailable}
                             title="Kindergarten"
                             description="Landing page for a kindergarten, freelance project."
                />
                <ProjectCard img={images.notavailable}
                             title="Sarmiento Shelter"
                             description="Web app for an animal shelter, final project for the bootcamp 'Soy Henry'."
                             link="https://github.com/ail3ngrimaldi/protectora-animales"
                />
                <ProjectCard img={images.portfolio}
                             title="My first portfolio"
                             description="My first portfolio."
                             link="https://oldportfolio-silk.vercel.app/"
                />
            </div>
        </div>
    );
  }
  
  export default Projects;
  