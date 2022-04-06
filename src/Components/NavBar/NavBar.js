import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';


const pages = ['Home', 'About', 'Products', 'Pricing', 'Blog', 'Contacts'];
const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    // navbar scroll background change
    // window.onscroll = function () { scrollFunction() };
    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         document.getElementById("navbar").style.background = '#f3f3f3';
    //     } else {
    //         document.getElementById("navbar").style.background = 'none';
    //     }
    // }

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-120px";
        }
        prevScrollpos = currentScrollPos;

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.background = '#f3f3f3';
        } else {
            document.getElementById("navbar").style.background = 'none';
        }
    }

    return (
        <div>
            <AppBar
                sx={{
                    padding: '5px 20px',
                    boxShadow: 'none',
                    background: 'none',
                }}
                position="fixed"
                id='navbar'
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box>
                            <Typography component='img'
                                sx={{ width: 100, height: 100 }}
                                src='https://i.ibb.co/Yj6CLKJ/updeed.png' />
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' }, color: '#757575', justifyContent: 'end' }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', lg: 'none' },
                                }}
                                className="navbarTogglerMenu"
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ width: '100vw' }} textAlign="left">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', lg: 'flex' },
                                justifyContent: 'end',
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: '#3B3663',
                                        fontSize: '16px',
                                        textTransform: 'capitalize',
                                        fontFamily: 'Rubik',
                                        fontWeight: '400',

                                        '&:hover': {
                                            fontWeight: '600',
                                            background: 'none',
                                        }
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ ml: 4, display: { xs: 'none', md: 'block' } }}>
                            <Button sx={{
                                my: 2,
                                color: 'white',
                                backgroundImage: 'linear-gradient(90deg, #03ef62 -20%, #03ef62  115%)',
                                padding: '12px 15px',
                                fontSize: '10px',
                                letterSpacing: '1px',

                                '&:hover': {
                                    backgroundImage: ' linear-gradient(90deg, #03ef62 -20%, #03ef62 115%)',
                                }
                            }}
                                size="small"
                            >
                                Sign in
                            </Button>
                        </Box>


                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    );
};

export default NavBar;