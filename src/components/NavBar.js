import React from "react";
import './NavBar.css';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import TimelineIcon from '@mui/icons-material/Timeline';
import Cartwidget from "./Cartwidget";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <AppBar position='static'>
            <Toolbar sx={{
                justifyContent: "space-between"
            }}>
            <div className="container">
            <Link to={"/"} id="brand">
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <TimelineIcon/>
                </IconButton>
                </Link>
                <Link to={"/"} id="brand">
                <Typography variant='h6' component='div' sx={{ flexgrow: 1}}>
                    xZeta
                </Typography>
            </Link>
            </div>
                <Stack direction='row' spacing={4}>
                    <Button color="inherit" ><Link to={"/"} id="brand" >Home</Link></Button>
                    <Button color="inherit"><Cartwidget/></Button>
                    <Button color="inherit"><Link to={"/category/mistral"} id="brand" >Mistral</Link></Button>
                    <Button color="inherit"><Link to={"/category/polo"} id="brand" >Polo</Link></Button>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar;