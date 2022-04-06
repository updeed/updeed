import { Box, Grid, Typography, ButtonGroup, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Pricing from '../Pricing/Pricing';

const PricingPlan = () => {

    const [showPricing, setShowPricing] = useState('Monthly');
    const [yearly, setYearly] = useState([]);
    const [monthly, setMonthly] = useState([]);

    useEffect(() => {
        fetch('pricing.json')
            .then(res => res.json())
            .then(data => {
                const yearlyData = data.filter(yearly => yearly?.category === 'Yearly');
                setYearly(yearlyData)
                const monthlyData = data.filter(monthly => monthly?.category === 'Monthly');
                setMonthly(monthlyData)
            })
    }, [])

    return (
        <Box
            sx={{
                py: 5,
                mx: '164px',
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                }}
            >
                <Typography variant='p'
                    sx={{ fontSize: '14px', fontWeight: 300, fontFamily: 'Rubik' }}
                >
                    PRICING PLANS
                </Typography>
                <Typography variant='h2'
                    sx={{ fontSize: '34px', fontFamily: 'Rubik', fontWeight: 400, maxWidth: '400px', margin: '0 auto' }}
                >
                    The Best Solutions for Our Clients
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', py: 5 }}>
                <ButtonGroup>
                    <Button variant="contained"
                        onClick={() => setShowPricing('Monthly')}
                        sx={{
                            py: 2,
                            px: 4,
                            borderRadius: '40px',
                            background: `${showPricing === 'Monthly' ? '#3B3564' : '#fff'}`,
                            color: `${showPricing === 'Monthly' ? '#fff' : '#3B3564'}`,

                            '&:hover, &:focus': {
                                background: '#3B3564',
                                color: '#fff'
                            }
                        }}
                    >Monthly</Button>
                    <Button variant="contained"
                        onClick={() => setShowPricing('Yearly')}
                        sx={{
                            py: 2,
                            px: 4,
                            borderRadius: '40px',
                            background: '#fff',
                            color: '#6557E8',

                            '&:hover, &:focus': {
                                background: '#6557E8',
                                color: '#fff'
                            }
                        }
                        }
                    >Yearly</Button>
                </ButtonGroup>
            </Box>
            <Box sx={{ py: 5 }}>
                {
                    showPricing === 'Monthly' && <Grid container sx={{ alignItems: 'center' }}>
                        {
                            monthly?.map(pricing => <Pricing key={pricing?._id} pricing={pricing} />)
                        }
                    </Grid>

                }
                {
                    showPricing === 'Yearly' && <Grid container sx={{ alignItems: 'center' }}>
                        {
                            yearly?.map(pricing => <Pricing key={pricing?._id} pricing={pricing} />)
                        }
                    </Grid>
                }
            </Box>
        </Box>
    );
};

export default PricingPlan;