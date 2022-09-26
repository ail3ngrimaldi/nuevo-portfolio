import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import tachito from '../../../assets/tachito.png';
import pomodoro from '../../../assets/pomodoro.png';
import notavailable from '../../../assets/notav.png';
import portfolio from '../../../assets/portfolio.png';

function Projects() {
    return (
        <div id='projects' className='container__projects' >
            <h1 className='title__projects'>
                Projects
            </h1>
            <div className='cards__container'>
                <ProjectCard img={tachito}
                             title="Tachito compost"
                             description="Proyecto con el objetivo de generar un impacto positivo en el medio ambiente utilizando React Native."
                />
                <ProjectCard img={pomodoro}
                             title="Pomodoro timer"
                             description="Diseño realizado con Figma, luego pasado a código utilizando React Native y Javascript."/>
                <ProjectCard img={notavailable}
                             title="Jardin de infantes"
                             description="Landing page para un jardín de infantes, proyecto freelance con contacto directo con la cliente."
                />
                <ProjectCard img={notavailable}
                             title="Protectora Sarmiento"
                             description="Web app para protectora de animales, proyecto final del curso Soy Henry."
                             link="https://github.com/ail3ngrimaldi/protectora-animales"
                />
                <ProjectCard img={portfolio}
                             title="My first portfolio"
                             description="El primer portfolio que cree para mi misma."
                             link="https://ailengrimaldi.com"
                />
            </div>
        </div>
    );
  }
  
  export default Projects;
  