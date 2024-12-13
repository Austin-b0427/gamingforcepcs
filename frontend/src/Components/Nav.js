import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import navStyles from '../css/Nav.module.css'; // Import the CSS Module
import '../css/Global.css';

function Nav() {
    const navigate = useNavigate();
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div className={navStyles.container}>
            <div className={navStyles.logo} onClick={() => navigate('/')}>
                <h2>Text Here</h2>
            </div>
            <div className={navStyles.navLinks}>
                <button className={navStyles.navbutton} onClick={() => navigate('/')}>Home</button>
                <button className={navStyles.navbutton} onClick={() => navigate('/gaming-pcs')}>Gaming PCs</button>
                <button className={navStyles.navbutton} onClick={() => navigate('/custom')}>Custom</button>
                <button className={navStyles.navbutton} onClick={() => navigate('/accessories')}>Accessories</button>
                <div
                    className={navStyles.dropdownContainer}
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                >
                    <button className={navStyles.navbutton}>About ↓</button>
                    {dropdownVisible && (
                        <div className={navStyles.dropdownMenu}>
                            <button onClick={() => navigate('/about/our-story')}>Our Story</button>
                            <button onClick={() => navigate('/about/team')}>Team</button>
                            <button onClick={() => navigate('/about/blog')}>Blog</button>
                        </div>
                    )}
                </div>
                <button className={navStyles.navbutton} onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>
    );
}

export default Nav;
