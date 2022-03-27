import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Avatar, Typography } from '@mui/material';
import SwiperCore, { Autoplay } from 'swiper';

const Testimonial = () => {

    SwiperCore.use([Autoplay]);

    return (
        <Box
            sx={{
                backgroundColor: '#F9FAFB',
                padding: {
                    lg: '70px 90px',
                    md: '50px 60px',
                    xs: '40px'
                },

            }}
        >
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid
                        item xs={12} md={5}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            pb: 12,
                            backgroundImage: 'url(https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_quote.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right'
                        }}
                    >
                        <Box>
                            <Typography
                                variant='h6'
                                sx={{
                                    m: 0,
                                    fontSize: '14px',
                                    color: '#696687',
                                    fontFamily: 'Nunito',
                                    fontWeight: '700'
                                }}
                            >
                                TESTIMONIALS
                            </Typography>
                            <Typography
                                variant='h1'
                                sx={{
                                    m: 0,
                                    pb: '10px',
                                    fontSize: '30px',
                                    color: '#3b3663',
                                    fontFamily: 'Nunito',
                                    fontWeight: '800',
                                    lineHeight: '40px'
                                }}
                            >
                                What Our Clients Say
                            </Typography>
                            <Typography
                                variant='p'
                                sx={{
                                    m: 0,
                                    fontSize: '18px',
                                    color: '#726f8e',
                                    maxWidth: '390px',
                                    fontFamily: 'Rubik',
                                    display: 'block',
                                    lineHeight: '28px'
                                }}
                            >
                                Ewebot stays ahead of the curve with digital marketing trends.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Swiper
                            // install Swiper modules
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            loop={true}
                            autoplay={true}
                        >
                            <SwiperSlide>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: {
                                            md: '50px 50px 70px',
                                            xs: '30px 20px 70px'
                                        },
                                        mb: {
                                            md: '40px',
                                            xs: '10px'
                                        },
                                        m: '0 auto',
                                        maxWidth: '615px',
                                        borderRadius: '20px',
                                        background: '#ffff',
                                        borderBottomLeftRadius: 0,
                                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 100% 90%, 7% 90%, 0 100%)',
                                    }}
                                    className='testimonialSlider'>
                                    <Box>
                                        <Avatar
                                            sx={{
                                                width: {
                                                    sm: '52px',
                                                    xs: '40px'
                                                },
                                                height: {
                                                    sm: '52px',
                                                    xs: '40px'
                                                },
                                                pl: {
                                                    sm: '25px',
                                                    xs: '12px'
                                                },
                                                transform: 'rotate(180deg)'

                                            }}
                                            src='https://i.ibb.co/rMp437k/quote.png' />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant='p'
                                            sx={{
                                                color: '#726f8e',
                                                fontFamily: 'Rubik',
                                                fontSize: '20px',
                                                lineHeight: '30px',
                                                letterSpacing: 0,
                                                fontWeight: '400',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talen.t, creative ability manual skill.
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                pt: 4
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    width: {
                                                        sm: '74px',
                                                        xs: '50px'
                                                    },
                                                    height: {
                                                        sm: '74px',
                                                        xs: '50px'
                                                    },
                                                    borderRadius: '50%',
                                                    mr: '10px',
                                                }}
                                                src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_avatar-148x148.jpg' />
                                            <Box>
                                                <Typography
                                                    variant='h5'
                                                    sx={{
                                                        m: 0,
                                                        fontSize: '18px',
                                                        color: '#3b3663',
                                                        fontFamily: 'Nunito',
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    Denis Robinson
                                                </Typography>
                                                <Typography
                                                    variant='h5'
                                                    sx={{
                                                        m: 0,
                                                        fontSize: '15px',
                                                        color: '#696687',
                                                        fontFamily: 'Nunito',
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    Customer
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: {
                                            md: '50px 50px 70px',
                                            xs: '30px 20px 70px'
                                        },
                                        mb: {
                                            md: '40px',
                                            xs: '10px'
                                        },
                                        m: '0 auto',
                                        maxWidth: '615px',
                                        borderRadius: '20px',
                                        background: '#ffff',
                                        borderBottomLeftRadius: 0,
                                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 100% 90%, 7% 90%, 0 100%)',
                                    }}
                                    className='testimonialSlider'>
                                    <Box>
                                        <Avatar
                                            sx={{
                                                width: {
                                                    sm: '52px',
                                                    xs: '40px'
                                                },
                                                height: {
                                                    sm: '52px',
                                                    xs: '40px'
                                                },
                                                pl: {
                                                    sm: '25px',
                                                    xs: '12px'
                                                },
                                                transform: 'rotate(180deg)'

                                            }}
                                            src='https://i.ibb.co/rMp437k/quote.png' />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant='p'
                                            sx={{
                                                color: '#726f8e',
                                                fontFamily: 'Rubik',
                                                fontSize: '20px',
                                                lineHeight: '30px',
                                                letterSpacing: 0,
                                                fontWeight: '400',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talen.t, creative ability manual skill.
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                pt: 4
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    width: {
                                                        sm: '74px',
                                                        xs: '50px'
                                                    },
                                                    height: {
                                                        sm: '74px',
                                                        xs: '50px'
                                                    },
                                                    borderRadius: '50%',
                                                    mr: '10px',
                                                }}
                                                src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_avatar-148x148.jpg' />
                                            <Box>
                                                <Typography
                                                    variant='h5'
                                                    sx={{
                                                        m: 0,
                                                        fontSize: '18px',
                                                        color: '#3b3663',
                                                        fontFamily: 'Nunito',
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    Denis Robinson
                                                </Typography>
                                                <Typography
                                                    variant='h5'
                                                    sx={{
                                                        m: 0,
                                                        fontSize: '15px',
                                                        color: '#696687',
                                                        fontFamily: 'Nunito',
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    Customer
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: {
                                            md: '50px 50px 70px',
                                            xs: '30px 20px 70px'
                                        },
                                        mb: {
                                            md: '40px',
                                            xs: '10px'
                                        },
                                        m: '0 auto',
                                        maxWidth: '615px',
                                        borderRadius: '20px',
                                        background: '#ffff',
                                        borderBottomLeftRadius: 0,
                                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 100% 90%, 7% 90%, 0 100%)',
                                    }}
                                    className='testimonialSlider'>
                                    <Box>
                                        <Avatar
                                            sx={{
                                                width: {
                                                    sm: '52px',
                                                    xs: '40px'
                                                },
                                                height: {
                                                    sm: '52px',
                                                    xs: '40px'
                                                },
                                                pl: {
                                                    sm: '25px',
                                                    xs: '12px'
                                                },
                                                transform: 'rotate(180deg)'

                                            }}
                                            src='https://i.ibb.co/rMp437k/quote.png' />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant='p'
                                            sx={{
                                                color: '#726f8e',
                                                fontFamily: 'Rubik',
                                                fontSize: '20px',
                                                lineHeight: '30px',
                                                letterSpacing: 0,
                                                fontWeight: '400',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talen.t, creative ability manual skill.
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                pt: 4
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    width: {
                                                        sm: '74px',
                                                        xs: '50px'
                                                    },
                                                    height: {
                                                        sm: '74px',
                                                        xs: '50px'
                                                    },
                                                    borderRadius: '50%',
                                                    mr: '10px',
                                                }}
                                                src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_avatar-148x148.jpg' />
                                            <Box>
                                                <Typography
                                                    variant='h5'
                                                    sx={{
                                                        m: 0,
                                                        fontSize: '18px',
                                                        color: '#3b3663',
                                                        fontFamily: 'Nunito',
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    Denis Robinson
                                                </Typography>
                                                <Typography
                                                    variant='h5'
                                                    sx={{
                                                        m: 0,
                                                        fontSize: '15px',
                                                        color: '#696687',
                                                        fontFamily: 'Nunito',
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    Customer
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        </Swiper>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Testimonial;