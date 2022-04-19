import React from 'react';
import { Col , Container, Row } from 'react-bootstrap';
import AboutUsLeft from '../AboutUsLeft/AboutUsLeft';
import AboutUsRight from '../AboutUsRight/AboutUsRight';

const AboutUs = () => {
    return (
        <div>
            <Container>
            <Row xs={1} md={2} className="g-4">
            <Col >
                <AboutUsLeft/>
            </Col>
            <Col >
                <AboutUsRight/>
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default AboutUs;