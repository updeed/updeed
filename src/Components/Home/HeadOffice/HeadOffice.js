import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const HeadOffice = () => {
    return (
        <Container sx={{ py: 5 }}>
            <Box
                sx={{
                    backgroundImage: 'url(https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/09/hotspot_map.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '600px',
                    position: 'relative'
                }}
            >
                <Box sx={{
                    width: 12,
                    height: 12,
                    border: '20px solid #a7f5db',
                    background: '#0a2a43',
                    borderRadius: 50,
                    position: 'absolute',
                    right: '40%',
                    top: '20%'
                }}> </Box>
                <Box sx={{
                    width: '280px',
                    height: '180px',
                    background: '#fff',
                    p: 4,
                    position: 'absolute',
                    right: '45%',
                    top: '22%',
                }}
                >
                    <Typography sx={{ fontFamily: "Nunito" }} variant='h5'>Head Office</Typography>
                    <Box sx={{ display: 'flex', fontSize: '18px', mt: 2, fontFamily: "Nunito" }}>
                        <Typography sx={{ mr: 2 }} variant='span'><i class="fa-solid fa-location-dot"></i></Typography>
                        <Typography variant='p'>Lorem ipsum, dolor sit amet consectetur adipisicing.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', fontSize: '18px', mt: 2, fontFamily: "Nunito" }}>
                        <Typography sx={{ mr: 2 }} variant='span'><i class="fa-solid fa-envelope"></i></Typography>
                        <Typography variant='p'>0123456789 example@gmail.com</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default HeadOffice;