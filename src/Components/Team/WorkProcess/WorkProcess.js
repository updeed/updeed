import React from 'react';
import { Container } from 'react-bootstrap';
import './WorkProcess.css';

const WorkProcess = () => {
    return (
        <div style={{padding:'100px 0px',marginTop:'100px',backgroundColor:'#F8F8FF'}}>
            <Container>


            <div style={{marginBottom:'100px'}}>
            <p style={{fontFamily:'cursive'}}>WORK PROCESS</p>
            <h2>This is How We Streamline <br />
            Our Design Workflow</h2>
            </div>


            <div className="box-container">
                <div className='mb-3' >
                   <img className="w-50" src="https://i.ibb.co/yYsjsZK/img-box-17.png" alt="" />
                   <h3>01 Preparation of Contract</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className='box-down mb-3'>
                   <img className="w-50" src="https://i.ibb.co/fn9GZ9N/img-box-18.png" alt="" />
                   <h3>02 Data Analysis</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className='mb-3'>
                   <img className="w-50" src="https://i.ibb.co/M50wB6Y/img-box-19.png" alt="" />
                   <h3>03 Progress Report</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className='box-down'>
                   <img className="w-50" src="https://i.ibb.co/PgtXFZC/img-box-20.png" alt="" />
                   <h3>04 Satisfied Customers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
               
            </div>




            </Container>
            
        </div>
    );
};

export default WorkProcess;