import React from 'react';
import homeStyles from '../css/Custom.module.css';  // Import the CSS Module
import Nav from '../Components/Nav'

function Custom() {
  return (
    <div>
        <Nav />
        <h1 className={homeStyles.title}>Custom PCs</h1>
    </div>
  );
}

export default Custom;
