import { Button } from '@mui/material';
import React from 'react';
import {  Card, Col } from 'react-bootstrap';
import './Blog.css';

const Blog = props => {
    const {title,time,img} = props.blog;
    return (
        <Col  >
        <Card >
        <img className='w-100 custom-image' src={img} alt="" />
        <div className='p-3'>
        <p className='mt-3 '>{time}</p>
            <h5 className='title' >{title}</h5>
            <Button color="secondary">Read More</Button>
        </div>
       
        </Card>
        
        </Col>
    );
};

export default Blog;