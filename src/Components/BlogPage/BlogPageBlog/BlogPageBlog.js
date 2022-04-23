import { Button } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';

const BlogPageBlog = props => {
    const {img,user,comment,title,time} = props.blog;
    return (
        <div className='mb-5 shadow-sm'>
            <div className="image-box">
                <img src={img} alt="" className="custom-image w-100" />
            </div>
            <p className='mt-3 custom-title1 ps-2'>{time} | by {user} | {comment} comment</p>
            <h4 className='custom-title1 ps-2'>{title}</h4>
            <Button color="secondary">Read More</Button>
        </div>
    );
};

export default BlogPageBlog;