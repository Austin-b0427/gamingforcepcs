import React from 'react';  
import storyStyles from '../../css/About/Story.module.css';  // Import the CSS Module
import Nav from '../../Components/Nav'

function Story() {
  return (
    <div>
        <Nav />
        <h1 className={storyStyles.title}>Our Story</h1>
    </div>
  );
}

export default Story;
