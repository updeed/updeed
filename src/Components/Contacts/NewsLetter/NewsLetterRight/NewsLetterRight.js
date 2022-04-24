import { Button } from '@mui/material';
import React from 'react';

const NewsLetterRight = () => {
    return (
        <div style={{display:'flex' , justifyContent:'space-between', alignItems:'center'}}>
            <input style={{padding:'13px'}} className='w-75 me-2' type="email" placeholder='Your email' />
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
                    Sign Up 
            </Button>
        </div>
    );
};

export default NewsLetterRight;