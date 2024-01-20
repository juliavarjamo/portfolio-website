import React from 'react';
import profilePic from '../assets/profilepic.jpg';
import './About.css';

function AboutPage() {
    return (
        <div className='about'>
            <div className='pic'>
                <img src={profilePic} alt='Profile picture' />
            </div>
            <div className='text'>
                <h2>About me</h2>
                <p>I am a third-year computing science student and part of the Games Academy 
                   at Tampere University of Applied Sciences. 
                   In the Games Academy I get to contribute in designing and creating games. 
                   My interests lie in graphical design and therefore I take part in projects as a graphic artist. 
                   As a graphic artist my job includes tasks such as the creation of visual elements and usability design.
                </p>
                <p> 
                   I have a profound interest in visual projects and effects. 
                   However, I would say my top interests are 3D modeling and usability design. 
                   My eagerness to learn new skills and high motivation have helped me master the 
                   use of new platforms and become proficient in graphic design over a short period of time.
                </p>
                <p>
                   In the future I aspire to continue developing my skills as a graphic artist and aim to assist 
                   companies to express their brands through graphic design. 
                   Please take a look of my portfolio, where you can find projects I have gotten to work with so far.
                </p>
            </div>     
        </div>
    );
};

export default AboutPage;