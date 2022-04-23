import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WhyChooseUsLeft from '../WhyChooseUsLeft/WhyChooseUsLeft';
import WhyChooseUsRight from '../WhyChooseUsRight/WhyChooseUsRight';

const WhyChooseUs = () => {
    return (
        <div>
            <Container>
                <div style={{paddingBottom:'50px'}} className="text-center">
                <p className='custom-title1'>WHY CHOOSE US</p>
                <h2 className='custom-title2'>Save Time & Effort With Updeed</h2>
                </div>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <WhyChooseUsLeft/>
                    </Col>
                    <Col>
                        <WhyChooseUsRight/>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
};

export default WhyChooseUs;