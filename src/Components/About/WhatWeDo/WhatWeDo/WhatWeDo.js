import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WhatWeDoLeft from '../WhatWeDoLeft/WhatWeDoLeft';
import WhatWeDoRight from '../WhatWeDoRight/WhatWeDoRight';

const WhatWeDo = () => {
    return (
        <div>
            <Container>
            <div style={{paddingBottom:'50px'}} className='text-center'>
                <p className='custom-title1'>WHAT WE DO</p>
                <h2 className='custom-title2'>Fresh Ideas for Every Business</h2>
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