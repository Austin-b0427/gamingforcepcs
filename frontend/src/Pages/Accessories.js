import React from 'react';
import accessoriesStyles from '../css/Accessories.module.css';  // Import the CSS Module
import Nav from '../Components/Nav'

function Accessories() {
  return (
    <div>
        <Nav />
        <h1 className={accessoriesStyles.title}>Accessories</h1>
    </div>
  );
}

export default Accessories;
