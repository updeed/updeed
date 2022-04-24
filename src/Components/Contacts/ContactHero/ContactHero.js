import React from 'react';
import { NavLink } from 'react-router-dom';
import './ContactHero.css';

const ContactHero = () => {
    return (
        <div className='contact-hero'>
            <div className='text-center blog-text'>
                        <h2 className='text-white custom-title1'>Our Team</h2>
                        <NavLink style={{textDecoration:'none' , color:'white'}} to="/home">Home</NavLink>
                </div> 
        </div>
    );
};

export default ContactHero;