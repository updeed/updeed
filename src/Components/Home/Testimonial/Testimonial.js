import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Testimonial.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    return (
        <div className='testimonial'>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className='testimonialClient' item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <h6>TESTIMONIALS</h6>
                            <h1>What Our Clients Say</h1>
                            <p >Ewebot stays ahead of the curve with digital marketing trend</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Swiper
                            // install Swiper modules
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}

                        >
                            <SwiperSlide>
                                <div className='testimonialSlider'>
                                    <div>
                                        <img className='quoteImg' src='https://i.ibb.co/rMp437k/quote.png' />
                                    </div>
                                    <div>
                                        <p>Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talen.t, creative ability manual skill.</p>
                                        <div className='customers'>
                                            <img className='customerImg' src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_avatar-148x148.jpg' />
                                            <div>
                                                <h5>Denis Robinson</h5>
                                                <p>Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='testimonialSlider'>
                                    <div>
                                        <img className='quoteImg' src='https://i.ibb.co/rMp437k/quote.png' />
                                    </div>
                                    <div>
                                        <p>Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talen.t, creative ability manual skill.</p>
                                        <div className='customers'>
                                            <img className='customerImg' src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_avatar-148x148.jpg' />
                                            <div>
                                                <h5>Denis Robinson</h5>
                                                <p>Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='testimonialSlider'>
                                    <div>
                                        <img className='quoteImg' src='https://i.ibb.co/rMp437k/quote.png' />
                                    </div>
                                    <div>
                                        <p>Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talen.t, creative ability manual skill.</p>
                                        <div className='customers'>
                                            <img className='customerImg' src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_avatar-148x148.jpg' />
                                            <div>
                                                <h5>Denis Robinson</h5>
                                                <p>Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Testimonial;