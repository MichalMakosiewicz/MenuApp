import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css";

export function Navbar() {

    return (
        <div className="root">
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className="menu-button" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className="title">
                        Menu App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}