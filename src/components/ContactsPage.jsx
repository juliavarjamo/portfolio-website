import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import './Contacts.css';

function ContactsPage() {
    return (
        <div>
            <div className='header'>
                <h2>Contact me</h2>
            </div>
            <div className='contacts'>
                <div className='location'>
                    <LocationOnOutlinedIcon/>
                    <p>Tampere, Finland</p>
                </div>
                <div className='email'>
                    <EmailOutlinedIcon />
                    <p>leevi7.oksanen@gmail</p>
                </div>
                <div className='phone'>
                    <SmartphoneOutlinedIcon />
                    <p>+358 445088115</p>
                </div>
                <div className='social'>
                    <AlternateEmailOutlinedIcon />
                    <p>leevioksanenn</p>
                </div>  
            </div>      
        </div>
    );
};

export default ContactsPage;