import React from 'react';
import { Col } from 'react-bootstrap';
import { ImageOverlay } from 'react-image-overlay-effect';

const TeamMember = props => {
    const {name,position,img} = props.member;
    return (
        <Col>
         <ImageOverlay
         style={{borderRadius:'10px'}}
         height={'350px'}
         width={'100%'}
         src={img}
        description={<p className='text-white'>{name} <br /> {position} <br />  </p>
    }
        ></ImageOverlay>
        </Col>
    );
};

export default TeamMember;