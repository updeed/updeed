import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NewsLetterLeft from './NewsLetterLeft/NewsLetterLeft';
import NewsLetterRight from './NewsLetterRight/NewsLetterRight';

const NewsLetter = () => {
    return (
        <div style={{padding:'50px 0px', backgroundColor:'#f8f8ff'}}>
            <Container>
            <Row>
                <Col xs={12} md={6}>
                    <NewsLetterLeft/>
                </Col>
                <Col xs={12} md={6}>
                    <NewsLetterRight/> </Col>
            </Row>
            </Container>
        </div>
    );
};

export default NewsLetter;