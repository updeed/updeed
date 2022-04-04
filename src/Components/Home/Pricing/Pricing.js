import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const Pricing = ({ pricing }) => {

    const [standard] = useState(`${pricing?.category}${pricing?.sub_category}`)
    console.log(standard);
    return (
        <Grid item xs={12} md={4}
            sx={
                standard === 'MonthlyStandart' ?
                    {
                        textAlign: 'center',
                        py: 8,
                        height: '550px',
                        borderRadius: '5px',
                        background: '#3B3564',
                        color: 'white',
                    } : standard === 'YearlyStandart' ?
                        {
                            textAlign: 'center',
                            py: 8,
                            height: '550px',
                            borderRadius: '5px',
                            background: '#6557E8',
                            color: 'white',
                        } :
                        {
                            textAlign: 'center',
                            py: 8,
                            height: '520px',
                            borderRadius: '5px',
                            boxShadow: '0px 0px 1px #030303',
                        }
            }
        >
            <Box>
                <Typography variant='h4'
                    sx={
                        standard === 'MonthlyStandart' ?
                            { fontSize: '24px', fontFamily: 'Nunito', fontWeight: '600', color: 'white' } :
                            standard === 'YearlyStandart' ?
                                { fontSize: '24px', fontFamily: 'Nunito', fontWeight: '600', color: 'white' } :
                                { fontSize: '24px', fontFamily: 'Nunito', fontWeight: '600', color: '#696687' }
                    }
                >
                    {pricing?.sub_category} Plan
                </Typography>
                <Box
                    sx={
                        standard === 'MonthlyStandart' ?
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                color: 'white',
                                pt: 1
                            } :
                            standard === 'YearlyStandart' ?
                                {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: 'white',
                                    pt: 1
                                } :
                                {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: '#03ef62',
                                    pt: 1
                                }
                    }
                >
                    <Typography sx={{ fontSize: '33px', fontFamily: 'Nunito', fontWeight: '600', p: 1, mt: -1 }} variant='h6'>
                        $
                    </Typography>
                    <Typography sx={{ fontSize: '60px', fontFamily: 'Nunito', fontWeight: '800' }} variant='h2'>
                        {pricing?.price}
                    </Typography>
                    <Typography sx={{ fontSize: '33px', fontFamily: 'Nunito', fontWeight: '600', p: 1, mt: -1 }} variant='h6'>
                        {pricing?.item}
                    </Typography>
                </Box>
                <Box sx={{ pt: 4 }}>
                    {
                        pricing?.service.map(item => <Typography
                            sx={{
                                display: 'block',
                                fontSize: '18px',
                                fontFamily: 'Rubik',
                                mb: '13px'
                            }} variant='p'>
                            {item}
                        </Typography>)
                    }
                </Box>
                <Box sx={{ pt: 3 }}>
                    <Button variant="contained"
                        sx={
                            standard === 'MonthlyStandart' ?
                                {
                                    background: 'white',
                                    color: '#3B3564',
                                    border: '1px solid white',
                                    py: 2,
                                    px: 3,

                                    '&:hover': {
                                        background: '#3B3564',
                                        color: 'white',
                                        border: '1px solid white',
                                        boxShadow: 'none'
                                    }
                                } :
                                standard === 'YearlyStandart' ?
                                    {
                                        background: 'white',
                                        color: '#6557E8',
                                        border: '1px solid white',
                                        py: 2,
                                        px: 3,

                                        '&:hover': {
                                            background: '#6557E8',
                                            color: 'white',
                                            border: '1px solid white',
                                            boxShadow: 'none'
                                        }
                                    } :
                                    {
                                        background: '#03ef62',
                                        border: '1px solid #03ef62',
                                        py: 2,
                                        px: 3,

                                        '&:hover': {
                                            background: 'white',
                                            color: '#03ef62',
                                            border: '1px solid #03ef62',
                                            boxShadow: 'none'
                                        }
                                    }
                        }
                    >
                        Get Started</Button>
                </Box>
            </Box>
        </Grid>
    );
};

export default Pricing;