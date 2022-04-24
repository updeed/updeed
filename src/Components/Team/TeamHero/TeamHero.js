import React from 'react';
import { NavLink } from 'react-router-dom';
import './TeamHero.css';

const TeamHero = () => {
    return (
        <div className='team-hero'>
            <div className='text-center blog-text'>
                        <h2 className='text-white custom-title1'>Our Team</h2>
                        <NavLink style={{textDecoration:'none' , color:'white'}} to="/home">Home</NavLink>
                </div> 
        </div>
    );
};

export default TeamHero;