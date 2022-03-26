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
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



const pages = ['Home', 'About', 'Products', 'Pricing', 'Blog', 'Contacts'];
const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // search bar 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // drawer 
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350,

            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    // navbar scroll background change
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
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
                    padding: '20px',
                    boxShadow: 'none',
                    background: 'none',
                }}
                position="fixed"
                id='navbar'
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box>
                            <img
                                className='navbarLogo'
                                src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/08/logo_retinablack.png' />
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
                                backgroundImage: 'linear-gradient(90deg, #FF4969 -20%, #FC9D44  115%)',
                                padding: '12px 15px',
                                fontSize: '10px',
                                letterSpacing: '1px',

                                '&:hover': {
                                    backgroundImage: ' linear-gradient(90deg, #FC9D44 -20%, #FF4969 115%)',
                                }
                            }}
                                size="small"
                            >
                                Get In Touch
                            </Button>
                        </Box>

                        {/* search bar  */}
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{ display: { xs: 'none', md: 'block' } }}
                            >
                                <IconButton type="submit" sx={{ ml: 2, fontSize: '20px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Button>
                            <Menu
                                sx={{
                                    mt: 1,
                                }}
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Paper
                                    component="form"
                                    sx={{
                                        px: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InputBase
                                        sx={{ flex: 1 }}
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'Search' }}
                                    />
                                    <IconButton type="submit" aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>
                            </Menu>
                        </div>

                        {/* drawer  */}
                        <div>
                            {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <Button sx={{ display: { xs: 'none', md: 'block' } }}
                                        onClick={toggleDrawer(anchor, true)}>
                                        <IconButton
                                            sx={{
                                                display: { xs: 'none', lg: 'block' },
                                            }}
                                            aria-label="menu"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                display: { xs: 'none', md: 'block', lg: 'none' },
                                                fontSize: '18px'
                                            }}
                                            aria-label="menu"
                                        >
                                            <span><i class="fa-solid fa-chevron-left"></i></span>
                                        </IconButton>
                                    </Button>
                                    <Drawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        {list(anchor)}
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    );
};

export default NavBar;