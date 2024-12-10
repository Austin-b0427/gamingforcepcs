import React from 'react';
import { useNavigate } from 'react-router-dom';
import productStyles from '../css/Products.module.css';  // Import the CSS Module

function Products() {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/gaming-pcs')}>Gaming PCs</button>
            <button onClick={() => navigate('/about')}>About</button>
            <h1 className={productStyles.title}>Gaming PCs</h1>
        </div>
    );
}

export default Products