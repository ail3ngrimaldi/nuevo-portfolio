import React from 'react';
import Title from '../Title';
import '../../styles/Services.css';

function Services() {
    return (
        <div id='services' className='main-container-services'>
            <div className='bg-image'>
                <section className='title-services'>
                    <Title label='Get your landing page'/>
                </section>
                <ul className='services-ul'>
                    <li className='services-li'><span>From scratch.</span>
                    <br/> 
                    So I can do your landing page exactly as you want</li>
                    <li className='services-li'><span>Active listening.</span> 
                    <br/>
                    In our meetings, you will tell me what you want and I will make suggestions. My first suggestion is that we listen to each other.</li>
                    <li className='services-li'><span>With creativity.</span>
                    <br/>
                    I believe we've had enough of MUI system, don't you?</li>
                </ul>
            </div>
        </div>
    );
  }
  
  export default Services;