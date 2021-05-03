import React from 'react';
import './App.css';
import Aboutme from "./components/Aboutme.component";
import Nav from "./components/Nav.component";
import Head from "./components/Head.component";
// import Skills from "./components/Skills.component";
import Tech from "./components/Tech.component";
import Exp from "./components/exp.component";
import Contact from "./components/contact.component";
import Project from "./components/project.component";
import Certs from "./components/cert.component";



console.log = console.warn = console.error = () => { };

class App extends React.Component {
  render () {
    return (
      <div className="App">
        {/* Nav Section */}
          <Nav />
        {/* Header Section */}
          <Head />
        {/* About Me Section */}
          <Aboutme />  
        { /* Skills  
          <Skills /> */ }
        {/* Technical Skills */}
          <Tech />
          <Certs />
        {/* Portfolio 
          <Portfolio /> */}
          <Project />
        {/* EXPERIENCE */}    
          <Exp /> 
        
        {/* CONTACT */}
          <Contact />
        
      </div>
    );
  }
}

export default App;
