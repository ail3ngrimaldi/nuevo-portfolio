// import Title from '../Title';
// import SvgProjects from '../Svgs/SvgProjects';
import React from 'react';
import '../../styles/Projects.css';
import ProjectCard from '../ProjectCard';

function Projects() {
    return (
        <div id='projects' className='main-container-projects' >
             {/* <SvgProjects/> 
            <section className='title-projects'>
                <Title label="What I've done"/>
            </section>  */}
            <h1 className='title__projects'>
                Projects
            </h1>
            <div className='cards__container'>
                <ProjectCard img={"//unsplash.it/706/706"}
                            title="Primer proyecto"
                            description="Este es el primer proyecto que realice utilizando las tecnologías: React + Material UI"
                />
                <ProjectCard/>
            </div>
        </div>
    );
  }
  
  export default Projects;
  