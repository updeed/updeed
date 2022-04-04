import React from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const CareFeatures = () => {
    return (
        <div>
            <Box
                sx={{
                    px: {
                        md: '164px',
                        sm: '90px',
                        xs: '50px'
                    },
                    pt: 5, pb: 8,
                    backgroundImage: 'url(https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/points_bg.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left bottom',

                }}
            >
                <Box
                    sx={{ textAlign: 'center', fontSize: '20px' }}
                >
                    <Typography
                        sx={{
                            fontSize: '14px',
                            color: '#3b3663',
                            fontFamily: 'Nunito',
                            fontWeight: '700'
                        }}
                        variant='p'>
                        CARE FEATURES
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '30px',
                            color: '#3b3663',
                            fontFamily: 'Nunito',
                            fontWeight: '800'
                        }}
                        variant='h2'
                    >
                        Provide Awesome Service
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '30px',
                            color: '#3b3663',
                            fontFamily: 'Nunito',
                            fontWeight: '800'
                        }}
                        variant='h2'
                    >
                        With Our Tools
                    </Typography>
                </Box>

                <Grid container spacing={3} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Card
                            sx={{
                                p: '40px 25px',
                                background: '#FFFFFF',
                                borderRadius: '10px',
                                color: 'red',

                                '&:hover': {
                                    p: '43px 25px',
                                    background: '#cfced9',
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '22px',
                                    color: '#252A3F',
                                    fontFamily: 'Nunito',
                                    fontWeight: '800'
                                }}
                                gutterBottom
                                variant="h5"
                                component="div"

                            >
                                Discover, Explore the Product
                            </Typography>
                            <CardMedia
                                sx={{
                                    height: '71px',
                                    width: '74px',
                                    py: 2
                                }}
                                component="img"
                                height="140"
                                image="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/service_img1.png"
                                alt="green iguana"
                            />
                            <Typography sx={{
                                width: '30px',
                                background: '#252A3F',
                                mb: 3
                            }}>
                                <hr />
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    color: '#252A3F',
                                    fontFamily: 'Nunito',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                }}
                                variant="p"
                            >
                                Discover, Explore & understanding the product
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Card
                            sx={{
                                p: '40px 25px',
                                background: '#FFFFFF',
                                borderRadius: '10px',
                                color: 'red',

                                '&:hover': {
                                    p: '43px 25px',
                                    background: '#cfced9',
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '22px',
                                    color: '#252A3F',
                                    fontFamily: 'Nunito',
                                    fontWeight: '800'
                                }}
                                gutterBottom
                                variant="h5"
                                component="div"

                            >
                                Art Direction & Brand Strategy
                            </Typography>
                            <CardMedia
                                sx={{
                                    height: '71px',
                                    width: '74px',
                                    py: 2
                                }}
                                component="img"
                                height="140"
                                image="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/service_img2.png"
                                alt="green iguana"
                            />
                            <Typography sx={{
                                width: '30px',
                                background: '#252A3F',
                                mb: 3
                            }}>
                                <hr />
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    color: '#252A3F',
                                    fontFamily: 'Nunito',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                }}
                                variant="p"
                            >
                                Art Direction & Brand Communication
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Card
                            sx={{
                                p: '40px 25px',
                                background: '#FFFFFF',
                                borderRadius: '10px',
                                color: 'red',

                                '&:hover': {
                                    p: '43px 25px',
                                    background: '#cfced9',
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '22px',
                                    color: '#252A3F',
                                    fontFamily: 'Nunito',
                                    fontWeight: '800'
                                }}
                                gutterBottom
                                variant="h5"
                                component="div"

                            >
                                Product UX, Design & Development‎
                            </Typography>
                            <CardMedia
                                sx={{
                                    height: '71px',
                                    width: '74px',
                                    py: 2
                                }}
                                component="img"
                                height="140"
                                image="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/service_img3.png"
                                alt="green iguana"
                            />
                            <Typography sx={{
                                width: '30px',
                                background: '#252A3F',
                                mb: 3
                            }}>
                                <hr />
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    color: '#252A3F',
                                    fontFamily: 'Nunito',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                }}
                                variant="p"
                            >
                                Digital Product UX, Design & Development‎
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Card
                            sx={{
                                p: '40px 25px',
                                background: '#FFFFFF',
                                borderRadius: '10px',
                                color: 'red',

                                '&:hover': {
                                    p: '43px 25px',
                                    background: '#cfced9',
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '22px',
                                    color: '#252A3F',
                                    fontFamily: 'Nunito',
                                    fontWeight: '800'
                                }}
                                gutterBottom
                                variant="h5"
                                component="div"

                            >
                                Marketing Strategy & SEO Campaigns
                            </Typography>
                            <CardMedia
                                sx={{
                                    height: '71px',
                                    width: '74px',
                                    py: 2
                                }}
                                component="img"
                                height="140"
                                image="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/service_img4-active.png"
                                alt="green iguana"
                            />
                            <Typography sx={{
                                width: '30px',
                                background: '#252A3F',
                                mb: 3
                            }}>
                                <hr />
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    color: '#252A3F',
                                    fontFamily: 'Nunito',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                }}
                                variant="p"
                            >
                                Marketing Strategy & seo CAMPAIGNS
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>

            </Box>
        </div >
    );
};

export default CareFeatures;