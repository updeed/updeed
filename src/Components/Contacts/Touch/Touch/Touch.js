import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TouchLeft from '../TouchLeft/TouchLeft';
import TouchRight from '../TouchRight/TouchRight';

const Touch = () => {
    return (
        <div style={{paddingBottom:'100px'}}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <TouchLeft/>
                    </Col>
                    <Col xs={12} md={6}>
                        <TouchRight/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Touch;