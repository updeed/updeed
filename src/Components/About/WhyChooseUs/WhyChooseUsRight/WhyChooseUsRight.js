import { Button } from '@mui/material';
import React from 'react';

const WhyChooseUsRight = () => {
    return (
        <div  className='p-5'>
            <div style={{paddingTop:'40px'}}>
            <div style={{display:'flex'}}>
                <div>
                    <img style={{width:'25px'}} src="https://i.ibb.co/Ns4LR4s/5290058.png" alt="right mark" />
                </div>

                <div className='ps-3'>
                <h4>First Working Process</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores fugiat doloribus quasi numquam expedita suscipit!</p>
                </div>
            </div>

            <div style={{display:'flex'}}>
                <div>
                    <img style={{width:'25px'}} src="https://i.ibb.co/92VNKSr/5290982.png" alt="right mark" />
                </div>

                <div className='ps-3'>
                <h4>First Working Process</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores fugiat doloribus quasi numquam expedita suscipit!</p>
                </div>
            </div>

            <div style={{display:'flex'}}>
                <div>
                    <img style={{width:'25px'}} src="https://i.ibb.co/Ns4LR4s/5290058.png" alt="right mark" />
                </div>

                <div className='ps-3'>
                <h4>First Working Process</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores fugiat doloribus quasi numquam expedita suscipit!</p>
                </div>
            </div>

            <Button
                    sx={{
                        py: 2,
                        px: 3,
                        mr: 2,
                        fontSize: '12px',
                        fontWeight: '500',
                        fontFamily: 'Rubik',
                        border: '1px solid #03ef62',
                        backgroundImage: 'linear-gradient(96deg, #03ef62 0%, #1bb41d 100%)',
                        color: '#fff',
                        '&:hover': {
                            background: '#03ef62',
                            color: '#fff',
                            }
                        }}
                    >
                    Discover More
            </Button>
            

        </div>
        </div>
    );
};

export default WhyChooseUsRight;