import { Button } from '@mui/material';
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const TeamExperienceLeft = () => {
    return (
        <div>
            <p style={{fontFamily:'cursive'}}>EXPERIENCE</p>
            <h2>Skilled Team of Creators</h2>
            <p>Ewebot stays ahead of the curve with digital marketing trends. Our success has us leading the pack amongst our competitors with our ability to anticipate.</p>

        {/* for progrees bar   */}
        <div className='mb-5'>
            <p>Seo Analysis</p>
            <ProgressBar style={{marginTop:'-10px',height:'6px'}} variant="info" now={83} /> <br />
            <p>Seo Audit</p>
            <ProgressBar style={{marginTop:'-10px',height:'6px'}} variant="warning" now={80} /> <br />
            <p>Optimization</p>
            <ProgressBar style={{marginTop:'-10px',height:'6px'}} variant="success" now={91} />
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
    );
};

export default TeamExperienceLeft;