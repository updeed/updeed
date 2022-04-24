import { Button } from '@mui/material';
import React from 'react';
import './TouchRight.css';

const TouchRight = () => {
    return (
        <div className='p-3'>
            <h2 className="custom-title2">Drop Us a Line</h2>
            <p className="custom-title1">Programs provi patient peace mind when option.
            </p>
            <form>
                <input className='input' type="text" placeholder='Your name*' required />
                <input className='input' type="email" placeholder='Your email'  />

                <input className='input' type="text" placeholder='Phone' />
                <input className='input' type="text" placeholder='Website*' required />

                <textarea 
                className='textarea'
                name="message"
                placeholder='Message*'
                required
                id="message" 
                cols="50" 
                rows="05"
                >
                </textarea>
                <br />
                <br />
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
                    Send Message 
            </Button>
            </form>
        </div>
    );
};

export default TouchRight;