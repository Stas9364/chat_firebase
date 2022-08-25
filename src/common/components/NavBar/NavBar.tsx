import React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../../firebase/firebase';

export const NavBar = () => {
    const [user] = useAuthState(auth);

    const logout = async () => {
        await auth.signOut();
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        CHAT
                    </Typography>

                    {user
                        ? <Button onClick={logout} color="inherit">Logout</Button>
                        : <Button color="inherit">Login</Button>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

