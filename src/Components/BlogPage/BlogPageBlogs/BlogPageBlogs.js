import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import BlogPageAside from '../BlogPageAside/BlogPageAside';
import BlogPageBlog from '../BlogPageBlog/BlogPageBlog';

const BlogPageBlogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div style={{padding:'100px 0px'}}>
            <Container>
                <Row>
                    <Col xs={12} md={9}>
                        {
                            blogs.map(blog => <BlogPageBlog blog={blog} key={blog.id}></BlogPageBlog>)
                        }
                    </Col>
                    <Col xs={12} md={3}>
                        <BlogPageAside/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogPageBlogs;