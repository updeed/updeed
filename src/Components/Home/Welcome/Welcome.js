import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Typewriter from 'typewriter-effect';
import { Typography } from '@mui/material';
import ReactPlayer from "react-player";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

// video modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '80%',
    boxShadow: 24,
    p: 4,
};

const Welcome = () => {

    // video modal 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box
            className='welcome'
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100vh',
                maxHeight: {
                    xs: '500px',
                    md: '700px',
                    lg: '100vh'
                },
                backgroundImage: {
                    xs: '',
                    md: 'url(https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/your_success.jpg)'
                },
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    color: '#3b3663',
                    mx: {
                        md: '164px',
                        sm: '90px',
                        xs: '50px'
                    }
                }}
            >

                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: 700,
                        fontFamily: "Nunito",
                    }}
                    variant="h6"
                >
                    WELCOME
                </Typography>
                <Typography
                    sx={{
                        fontWeight: "800",
                        fontFamily: "Nunito",
                        fontSize: {
                            xs: '30px',
                            sm: '40px',
                            md: '60px'
                        }
                    }}
                    variant="h2"
                >
                    Digital Products
                </Typography>
                <Typography
                    sx={{
                        fontWeight: "800",
                        fontFamily: "Nunito",
                        fontSize: {
                            xs: '30px',
                            sm: '40px',
                            md: '60px'
                        }
                    }}
                    variant="h2">
                    <Typewriter
                        options={{
                            strings: ['for Your Ideas ', 'for Business', 'to Sell Online '],
                            autoStart: true,
                            loop: true,
                            cursor: ''
                        }} />
                </Typography>
                <Typography
                    sx={{
                        maxWidth: '500px',
                        fontSize: '18px',
                        fontFamily: 'Rubik',
                        display: 'block',
                        lineHeight: '1.7rem',
                        my: 1

                    }}
                    variant="p"
                >
                    Ensuring the best return on investment for your bespoke SEO campaign requirement.
                </Typography>
                <Box
                    sx={{ mt: 4 }}
                >
                    <Button
                        sx={{
                            py: 2,
                            px: 3,
                            mr: 2,
                            fontSize: '12px',
                            fontWeight: '500',
                            fontFamily: 'Rubik',
                            border: '1px solid #03ef62',
                            // backgroundImage: 'linear-gradient(#03ef62, #1bb41d)',
                            backgroundImage: 'linear-gradient(96deg, #03ef62 0%, #1bb41d 100%)',
                            color: '#fff',


                            '&:hover': {
                                background: '#03ef62',
                                color: '#fff',
                            }
                        }}
                    >
                        Contact Today
                    </Button>
                    <Box sx={{
                        display: 'inline-block',
                        mt: 2
                    }}>
                        <Button
                            onClick={handleOpen}
                            sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                minWidth: '50px',
                                color: '#fff',
                                background: '#03ef62',
                                mr: 1,

                                '&:hover': {
                                    background: '#03ef62 ',
                                    color: '#fff',
                                }
                            }}
                        >
                            <i class="fa-solid fa-play"></i>
                        </Button>
                        <Typography
                            variant='p'
                            color='#03ef62'
                            sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                fontFamily: 'Rubik',
                            }}
                        >
                            PLAY VIDEO
                        </Typography>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <Box sx={style}>
                                    <ReactPlayer
                                        width={"100%"}
                                        height="100%"
                                        url="https://www.youtube.com/watch?v=Qdw0nDG5j2Q"
                                        muted={true}
                                        playing={true}
                                        controls={true}
                                    />
                                </Box>
                            </Fade>
                        </Modal>
                    </Box>
                </Box>
            </Box>

            {/* background image  */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '2%'
                }}
            >
                <img src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/seo.png" alt="" />
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '-6%',
                    left: {
                        xs: '-30%',
                        sm: '-15%',
                        md: 0
                    }
                }}
            >
                {/* <img src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/element_01.png" alt="" /> */}
            </Box>
        </Box>
    );
};

export default Welcome;