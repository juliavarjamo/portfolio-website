import React, { useState } from 'react';
import { Link } from '@mui/material';
import Home from './HomePage.jsx';
import About from './AboutPage.jsx';
import Portfolio from './PortfolioPage.jsx';
import Contacts from './ContactsPage.jsx';
import '../Navigation.css';

function NavigationBar() {
    const [selectedLink, setSelectedLink] = useState('home');

    const handleClick = (link) => {
        setSelectedLink(link);
    };

    const renderView = () => {
        switch (selectedLink) {
            case 'home':
                return <Home />
            case 'about':
                return <About />
            case 'portfolio':
                return <Portfolio />
            case 'contacts':
                return <Contacts />
        }
    }

    return (
        <div>
            <h3 className='name'>Leevi Oksanen</h3>
            <div className='navbar'>
                <Link 
                    id='navlink'
                    component='button' 
                    underline='none'
                    onClick={() => handleClick('home')}
                >
                    Home
                </Link>
                <Link 
                    id='navlink'
                    component='button' 
                    underline='none'
                    onClick={() => handleClick('about')}
                >
                    About me
                </Link>
                <Link 
                    id='navlink'
                    component='button' 
                    underline='none'
                    onClick={() => handleClick('portfolio')}
                >
                    Portfolio
                </Link>
                <Link 
                    id='navlink'
                    component='button' 
                    underline='none'
                    onClick={() => handleClick('contacts')}
                >
                    Contact me
                </Link>
            </div>
            {renderView()}
        </div>
    );
};

export default NavigationBar;