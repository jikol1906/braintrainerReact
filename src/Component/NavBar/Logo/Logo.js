import React from 'react';
import brainLogo from '../../../img/bcd956d7-11f0-41a5-96d4-a8ce0507e81a.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="Logo">
            <img src={brainLogo} alt="Logo"/>
        </div>
    );
};

export default Logo;
