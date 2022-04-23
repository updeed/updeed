import React from 'react';
import NavBar from '../../NavBar/NavBar';
import BlogPageBlogs from '../BlogPageBlogs/BlogPageBlogs';
import BlogPageHero from '../BlogPageHero/BlogPageHero';

const BlogPage = () => {
    return (
        <div>
            <BlogPageHero/>
            <NavBar/>
            <BlogPageBlogs/>
        </div>
    );
};

export default BlogPage;