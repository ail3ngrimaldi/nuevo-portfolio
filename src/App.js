import React from 'react';

//Components
import Contact from './components/Sections/Contact/Contact';
import AboutMe from './components/Sections/About Me/AboutMe';
import Services from './components/Sections/Services/Services';
import Projects from './components/Sections/Projects/Projects';
import Navigation from './components/Navbar/Navigation';
import Home from './components/Sections/Home/Home';

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