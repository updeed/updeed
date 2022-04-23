import React from 'react';
import AdvertisingSpot from './AdvertisingSpot/AdvertisingSpot';
import BlogPageAsideCategories from './BlogPageAsideCategories/BlogPageAsideCategories';
import Contact from './Contact/Contact';
import PopularRequests from './PopularRequests/PopularRequests';
import TopContent from './TopContent/TopContent';

const BlogPageAside = () => {
    return (
        <div>
            <TopContent/>
            <BlogPageAsideCategories/>
            <PopularRequests/>
            <AdvertisingSpot/>
            <Contact/>
        </div>
    );
};

export default BlogPageAside;