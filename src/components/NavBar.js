import React from "react";
import './NavBar.css';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import TimelineIcon from '@mui/icons-material/Timeline';

const NavBar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <TimelineIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexgrow: 1 }}>
                    xZeta
                </Typography>
                <div class='nav navbar-nav navbar-right'>
                <Stack direction='row' spacing={2}>
                    <Button color="inherit" >Home</Button>
                    <Button color="inherit">Cart</Button>
                    <Button color="inherit">Shop</Button>
                    <Button color="inherit">About us</Button>
                </Stack>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;