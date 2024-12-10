import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeStyles from '../css/Home.module.css';  // Import the CSS Module

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/gaming-pcs')}>Gaming PCs</button>
      <button onClick={() => navigate('/about')}>About</button>
      <h1 className={homeStyles.title}>Home Page</h1>
    </div>
  );
}

export default Home;
