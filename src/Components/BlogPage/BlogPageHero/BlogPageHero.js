import React from 'react';
import { NavLink } from 'react-router-dom';
import './BlogPageHero.css';

const BlogPageHero = () => {
    return (
        <div  className='blog-hero'>
        <div  className='text-center blog-text'>
                    <h2 className='text-white custom-title1'>Blogs</h2>
                    <NavLink style={{textDecoration:'none' , color:'white'}} to="/home">Home</NavLink>
            </div> 
    </div>
    );
};

export default BlogPageHero;