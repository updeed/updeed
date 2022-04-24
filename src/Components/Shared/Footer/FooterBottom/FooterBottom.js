import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './FooterBottom.css';

const FooterBottom = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <h4 className="custom-title2">About</h4>
                        <p className="custom-title1">Updeed has much planned for the future, working with great clients and continued software development.</p>
                    </Col>


                    <Col xs={12} md={3}>
                        <h4 className="custom-title2">Services</h4>
                        <ul>
                            <li>Seo Marketing</li>
                            <li>Seo Services</li>
                            <li>Pay Per Click</li>
                            <li>Social Media</li>
                            <li>Seo Audit</li>
                        </ul>
                    </Col>


                    <Col xs={12} md={3}>
                        <h4 className="custom-title2">Community</h4>
                        <ul>
                            <li>Our Product</li>
                            <li>Documentation</li>
                            <li>Our Services</li>
                            <li>Company</li>
                            <li>What We Do?</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4 className="custom-title2">Quick Links</h4>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Main Services</li>
                            <li>Pricing</li>
                            <li>Our Cases</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterBottom;