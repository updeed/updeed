import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Portfolio = ({ portfolio }) => {

    const [showItem, setShowItem] = useState('none');

    return (
        <Grid
            key={portfolio?._id}
            item xs={6} md={4}
        >
            <Box
                onMouseOver={() => setShowItem('block')}
                onMouseOut={() => setShowItem('none')}
                sx={{
                    height: '370px',
                    backgroundImage: `url(${portfolio.img})`,
                    backgroundSize: 'cover',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    '&:hover': {
                        background: `linear-gradient(0deg, rgba(2,173,231,0.5), rgba(2,173,231,0.5)), url(${portfolio.img})`,
                        backgroundSize: 'cover',
                    }
                }}
            >
                <Box sx={{ display: `${showItem}` }}>
                    <Typography sx={{ pb: 2, color: '#fff', fontFamily: 'Nunito' }} variant="h6">{portfolio?.name}</Typography>
                    <Button
                        sx={{
                            color: 'white',
                            border: '1px solid white',
                            background: '',
                            fontSize: '10px',
                            px: 2,
                            py: 1,
                            mr: 2,

                            '&:hover': {
                                color: 'black',
                                background: 'white',
                            }
                        }}
                    >Preview</Button>
                    <Button
                        sx={{
                            color: 'black',
                            background: 'white',
                            fontSize: '10px',
                            px: 2,
                            py: 1,

                            '&:hover': {
                                color: 'black',
                                background: 'white',
                            }
                        }}
                    >
                        Details</Button>
                </Box>
            </Box>
        </Grid>
    );
};

export default Portfolio;