import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WhatWeDoLeft from '../WhatWeDoLeft/WhatWeDoLeft';
import WhatWeDoRight from '../WhatWeDoRight/WhatWeDoRight';

const WhatWeDo = () => {
    return (
        <div>
            <Container>
            <div className='text-center mb-5'>
                <p style={{fontFamily:'cursive'}}>WHAT WE DO</p>
                <h2>Fresh Ideas for Every Business</h2>
            </div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                <WhatWeDoLeft/>
                </Col>
                <Col>
                <WhatWeDoRight/>
                </Col>
            </Row>

            </Container>
            
        </div>
    );
};

export default WhatWeDo;