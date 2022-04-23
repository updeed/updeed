import React from 'react';
import './BlogPageAsideCategories.css';

const BlogPageAsideCategories = () => {
    return (
        <div>
            <div className="text-center">
            <input className='w-100 custom-title1' type="text" placeholder='Search by category' />
            </div>
            <h4 className='my-4'>Categories</h4>
            <ul style={{lineHeight:'35px'}}>
                <li>Branding</li>
                <li>Decoration</li>
                <li>Furniture</li>
                <li>Marketing</li>
                <li>Optimization</li>
                <li>Planning</li>
                <li>SEO</li>
                <li>Web</li>
            </ul>
            
        </div>
    );
};

export default BlogPageAsideCategories;