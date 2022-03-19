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
                backgroundImage: 'url(https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/your_success.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    color: '#3b3663',
                    mx: '164px'
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
                    }}
                    variant="h2"
                >
                    Digital Products
                </Typography>
                <Typography
                    sx={{
                        fontWeight: "800",
                        fontFamily: "Nunito",
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
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: '500',
                            fontFamily: 'Rubik',
                            backgroundImage: 'linear-gradient(96deg, #6254e7 0%, #9289f1 100%)',

                            '&:hover': {
                                backgroundImage: 'linear-gradient(96deg,#9289f1  0%, #6254e7 100%)',
                            }
                        }}
                    >
                        Contact Today
                    </Button>
                    <Button
                        onClick={handleOpen}
                        sx={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            minWidth: '50px',
                            backgroundImage: 'linear-gradient(90deg, #f0ac0e 0%, #f56616 100%)',
                            color: '#ffff',
                            mr: 1,

                            '&:hover': {
                                background: '#6254e7',
                            }
                        }}
                    >
                        <i class="fa-solid fa-play"></i>
                    </Button>
                    <Typography
                        variant='p'
                        color='#f47514'
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
                }}
            >
                <img src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/03/element_01.png" alt="" />
            </Box>
        </Box>
    );
};

export default Welcome;