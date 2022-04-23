import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs , setBlogs] = useState([]);
    useEffect(()=>{
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div style={{padding:'100px 0px'}}>
            <Container>
                <div style={{paddingBottom:'75px'}} className="text-center">
                <p style={{fontFamily:'cursive'}}>BLOGS</p>
            <h2>Read Our Lates News</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt <br /> repudiandae excepturi illum corrupti reprehenderit autem?</p>
                </div>

                <Row xs={1} md={3}  className="g-4">
                    {
                        blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
                    }
                    
                </Row>
            </Container>
            
        </div>
    );
};

export default Blogs;