import { ContactPage, LocationCity } from '@mui/icons-material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FooterTop = () => {
    return (
        <div style={{padding:'25px 0px'}}>
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <h2 className="custom-title2"> UPDEED</h2>
                    </Col>
                    <Col xs={12} md={3}>
                        <div style={{display:'flex' , alignItems:'center'}}>
                        {/* <img className='w-25' src="https://i.ibb.co/ZGDxMFL/hand-holding-smartphone-mobile-phone-concept-hand-drawn-cartoon-art-illustration-56104-1117.webp" alt="phone image" /> */}
                        <ContactPage></ContactPage>
                        <div className='custom-title1 ms-3'>
                            <p>8 800 2534 236</p>
                            <p>email@yoursite.com</p>
                        </div>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div style={{display:'flex' , alignItems:'center'}}>
                        {/* <img className='w-25' src="https://i.ibb.co/Kx1qLgw/vector-illustration-concept-using-mobile-application-global-positioning-system-1441-364.webp" alt="phone image" /> */}
                        <LocationCity></LocationCity>
                        <div className='custom-title1 ms-3'>
                            <p>27 Division St, New York, NY <br />
                            10002, United States</p>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterTop;