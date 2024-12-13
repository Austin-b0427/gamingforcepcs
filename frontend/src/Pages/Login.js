import React from 'react';
import loginStyles from '../css/Login.module.css';  // Import the CSS Module
import Nav from '../Components/Nav'

function Login() {
  return (
    <div>
        <Nav />
        <h1 className={loginStyles.title}>Login</h1>
    </div>
  );
}

export default Login;
