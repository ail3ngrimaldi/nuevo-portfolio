import React from 'react';

//Components
import Contact from './components/Sections/Contact';
import AboutMe from './components/Sections/AboutMe';
import Services from './components/Sections/Services';
import Projects from './components/Sections/Projects';
import Navigation from './components/navbar/Navigation';
import Home from './components/Sections/Home';

function App() {
  
  return (
    <div className="App">
      <Navigation/>
      <Home />
      <AboutMe/>
      <Projects/>
      <Services/>
      <Contact/>
   </div>
  );
}

export default App;  