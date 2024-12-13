import React from 'react';
import aboutStyles from '../css/About.module.css';  // Import the CSS Module
import Nav from '../Components/Nav'

function About() {
  return (
    <div>
        <Nav />
        <h1 className={aboutStyles.title}>About</h1>
    </div>
  );
}

export default About;
