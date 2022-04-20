import React from 'react';
import { Container } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import './AboutHero.css';

const AboutHero = () => {
    return (
    <div style={{marginBottom:'100px'}}>
        <div className='about-hero'>
        
                <div style={{paddingTop:'15%'}} className='text-center'>
                        <h2 className='text-white'>About Us</h2>
                        <NavLink to="/home">Home</NavLink>
                </div>
                </div>
            <Container className='services-about-hero'>
                    <div style={{backgroundColor:'rgba(241, 231, 254)',width:'30%'}} className='card about-hero-service  p-2 rounded'>
                        <div className="text-center my-3">
                            <img style={{width:'150px'}} src="https://i.ibb.co/swsmpvL/seo.png" alt="seo analysis" />
                        </div>
                             <div className="text-center">
                             <h3>Seo Consultancy</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                             </div>
                    </div>


                        <div style={{backgroundColor:'rgba(253, 227, 167)', width:'30%'}} className='card about-hero-service   p-2 rounded'>
                            <div  className="text-center my-3">
                            <img style={{width:'150px'}} src="https://i.ibb.co/1njdG8R/analysis.png" alt="computer analysis" />
                            </div>
                            <div className="text-center">
                            <h3>Competitor Analyis</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                            </div>
                        </div>


                    <div style={{backgroundColor:'rgba(200, 247, 197)',width:'30%'}} className='card about-hero-service p-2 rounded'>
                        <div className="text-center my-3">
                        <img style={{width:'205px'}} src="https://i.ibb.co/y6VJ4kR/marketing.png" alt="seo analysis" />
                        </div>
                        <div className="text-center">
                        <h3>Social Marketing</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nesciunt </p>
                        </div>
                    </div>
                </Container>

        </div>
   
    );
};

export default AboutHero;