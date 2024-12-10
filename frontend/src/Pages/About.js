import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutStyles from '../css/About.module.css';  // Import the CSS Module

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/gaming-pcs')}>Gaming PCs</button>
      <button onClick={() => navigate('/about')}>About</button>
      <h1 className={aboutStyles.title}>About Page</h1>
    </div>
  );
}

export default About;
