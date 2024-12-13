import React from 'react';  
import teamStyles from '../../css/About/Team.module.css';  // Import the CSS Module
import Nav from '../../Components/Nav'

function Team() {
  return (
    <div>
        <Nav />
        <h1 className={teamStyles.title}>Team</h1>
    </div>
  );
}

export default Team;
