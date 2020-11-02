import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import "./Navbar.css";

export function Navbar() {

    return (
        <div className="root">
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className="title">
                        Menu App
                    </Typography>
                    <Button className="button" href="/admin" variant="contained" color="secondary">
                        Go to Admin site
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}