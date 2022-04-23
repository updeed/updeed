
import React from 'react';
import { Carousel } from 'react-bootstrap';

const TestimonyRight = () => {
    return (
        <div style={{padding:'100px 0px'}}>

<Carousel fade>
  <Carousel.Item className='rounded' style={{padding:'70px',backgroundColor:'#f8f8ff'}}>
      <div style={{display:'flex' , justifyContent:'space-around' , alignItems:'center'}}>
      <img style={{borderRadius:'50%'}}
      className="d-block w-25 me-3"
      src="https://i.ibb.co/5sM18St/Denis-Robinson-258x258.jpg"
      alt="First slide"
    />
    <div>
   
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <p style={{fontFamily:'cursive'}}>Dennis Robinson</p>
    </div>

      </div>
  </Carousel.Item>
  <Carousel.Item className='rounded' style={{padding:'70px', backgroundColor:'#f8f8ff'}}>
      <div style={{display:'flex' , justifyContent:'space-around' , alignItems:'center'}}>
      <img style={{borderRadius:'50%'}}
      className="d-block w-25 me-3"
      src="https://i.ibb.co/xmMHr9P/Silviia-Garden-258x258.jpg"
      alt="First slide"
    />
    <div>
   
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <p style={{fontFamily:'cursive'}}>Silviia Garden</p>
    </div>

      </div>
  </Carousel.Item>
  <Carousel.Item className='rounded' style={{padding:'70px', backgroundColor:'#f8f8ff'}}>
      <div style={{display:'flex' , justifyContent:'space-around' , alignItems:'center'}}>
      <img style={{borderRadius:'50%'}}
      className="d-block w-25 me-3"
      src="https://i.ibb.co/4j96Ctn/Tommy-Dents-258x258.jpg"
      alt="First slide"
    />
    <div>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <p style={{fontFamily:'cursive'}}>Tommy Dents</p>
    </div>

      </div>
  </Carousel.Item>
</Carousel>
           
        </div>
    );
};

export default TestimonyRight;