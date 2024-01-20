import React from 'react';
import { Link } from '@mui/material';
import spiderman from '../assets/2D/spidermanbw.jpg';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './Portfolio.css';

function PortfolioPage() {
    return (
        <div className='graphic'>
            <div className='spiderman'>
                <img src={spiderman} alt='Picture of spiderman' />
            </div>
            <div className='text'>
                <h2>Graphic designs</h2>
                <p>
                    My graphic design journey started with learning the 
                    use of the popular graphics editor Adobe Photoshop in 
                    the beginning of my studies. I started by creating simple wallpapers, 
                    then learned how to modify pictures. With Adobe Photoshop 
                    I created posters, game assets and pixel art. 
                </p>
                <p>
                    Ever since the beginning of my studies, I have gotten 
                    familiar with other graphic design tools such as Procreate and 
                    Adobe Illustrator.
                </p>
                <div className='link'>
                    <Link 
                        id='graphiclink'
                        component='button' 
                        underline='none'
                    >
                        View my graphic designs
                        <ArrowForwardIosOutlinedIcon />
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;