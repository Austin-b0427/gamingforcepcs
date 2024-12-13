import React from 'react';
import homeStyles from '../css/Home.module.css';  // Import the CSS Module
import Nav from '../Components/Nav'

function Home() {
  return (
    <div>
      <Nav />
      <h1 className={homeStyles.title}>Home</h1>
    </div>
  );
}

export default Home;
