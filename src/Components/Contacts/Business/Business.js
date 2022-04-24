import React from 'react';
import { Container } from 'react-bootstrap';

const Business = () => {
    return (
        <div style={{padding:'100px 0px'}}>
            <Container>
                <div className="text-center">
                <p className="custom-title1">BUSINESS</p>
                <h2 className="custom-title2">Find the Perfect Solution <br /> for Your Business</h2>
                <p className="custom-title1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita <br /> veniam, nostrum obcaecati repudiandae enim nisi ad tempore cupiditate placeat, et, dicta iste?  Sequi <br /> suscipit nesciunt sapiente dolores tenetur exercitationem dolore?</p>
                </div>

                <img className='w-100' src="https://i.ibb.co/GsBbfxM/people-analyzing-growth-charts-23-2148866843.png" alt="business related" />

            </Container>
            
        </div>
    );
};

export default Business;