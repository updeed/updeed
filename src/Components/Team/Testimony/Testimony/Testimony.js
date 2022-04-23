import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TestimonyLeft from '../TestimonyLeft/TestimonyLeft';
import TestimonyRight from '../TestimonyRight/TestimonyRight';

const Testimony = () => {
    return (
        <div style={{padding:'100px 0px'}}>
            <Container>
            <div style={{paddingBottom:'100px'}}>
            <p style={{fontFamily:'cursive'}}>TESTIMONY</p>
            <h2>What Our Client's Say</h2>
            </div>

            <Row xs={1} md={2} className="g-4">
            <TestimonyLeft/>
            <TestimonyRight/>
            </Row>
            
            </Container>
            

        </div>
    );
};

export default Testimony;