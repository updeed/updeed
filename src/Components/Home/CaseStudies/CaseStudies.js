
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Portfolio from '../Portfolio/Portfolio';

const CaseStudies = () => {

    const [portfolio, setPortfolio] = useState([]);
    const [showPortfolio, setShowPortfolio] = useState('web');
    const filterData = portfolio.filter(data => data.category === showPortfolio);

    useEffect(() => {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => setPortfolio(data))
    }, [])

    return (
        <Box sx={{
            py: 5,
            mx: {
                md: '164px',
                sm: '90px',
                xs: '50px'
            }
        }}>
            <Box sx={{ textAlign: 'center', }} >
                <Typography variant='p'
                    sx={{ fontSize: '14px' }}
                >
                    PREVIOUS PROJECTS
                </Typography>
                <Typography variant='h2'
                    sx={{ fontSize: '30px' }}
                >
                    Our Case Studies
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', py: 4 }}>
                <Button onClick={() => setShowPortfolio('all')}
                    sx={{
                        borderRadius: 2,
                        mr: 3,

                        '&:hover, &:focus': {
                            background: '#007aff',
                            color: 'white'
                        }
                    }}
                >All</Button>
                <Button onClick={() => setShowPortfolio('web')}
                    sx={{
                        borderRadius: 2,
                        mr: 3,

                        '&:hover, &:focus': {
                            background: '#007aff',
                            color: 'white'
                        }
                    }}
                >Web</Button>
                <Button onClick={() => setShowPortfolio('seo')}
                    sx={{
                        borderRadius: 2,
                        mr: 3,

                        '&:hover, &:focus': {
                            background: '#007aff',
                            color: 'white'
                        }
                    }}
                >Seo</Button>
                <Button onClick={() => setShowPortfolio('marketing')}
                    sx={{
                        borderRadius: 2,
                        mr: 3,

                        '&:hover, &:focus': {
                            background: '#007aff',
                            color: 'white'
                        }
                    }}
                >Marketing</Button>
            </Box>
            <Box>
                <Grid container spacing={3} >
                    {
                        showPortfolio === 'all' ?
                            portfolio?.map(portfolio => <Portfolio portfolio={portfolio} />)
                            :
                            filterData?.map(portfolio => <Portfolio portfolio={portfolio} />)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default CaseStudies;