import { Button } from '@mui/material';
import React from 'react';

const AboutUsLeft = () => {
    return (
        <div >
            <p className='custom-title1'>ABOUT US</p>
            <h2 className='custom-title2'>Boosts Your Website Traffic!</h2>
            <p style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eaque.</p>
            <p style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eaque reprehenderit tempore excepturi corrupti tenetur eum nostrum voluptatem atque dignissimos nobis facilis, voluptates alias obcaecati.</p>
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
    );
};

export default AboutUsLeft;