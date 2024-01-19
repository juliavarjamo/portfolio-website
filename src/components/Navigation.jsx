import React from 'react';
import '../Navigation.css';

function NavigationBar() {
    return (
        <div>
            <h3 className="name">Leevi Oksanen</h3>
            <nav className="navbar">
                <a href>Home</a>
                <a href="#about">About me</a>
                <a href="#portfolio">Portfolio</a>
                <a href="contacts">Contact me</a>
            </nav>
        </div>
        
    );
};

export default NavigationBar;