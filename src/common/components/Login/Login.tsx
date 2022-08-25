import React from 'react';
import {Navigate} from 'react-router-dom';
import {Box, Button, Container, Grid} from '@mui/material';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Loader} from '../Loader/Loader';
import {auth, GoogleAuthProvider, signInWithPopup} from '../../../firebase/firebase';

export const Login = () => {
    const login = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }

    const [user] = useAuthState(auth);

    if (user) {
        return <Navigate to={'/chat'}/>
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
            >

                <Grid container
                      alignItems="center"
                      direction="column"
                      style={{width: '400px', background: 'lightgray'}}
                >
                    <Box p={7}>
                        <Button
                            variant={"contained"}
                            color={"inherit"}
                            onClick={login}
                        >Log in with Google
                        </Button>
                    </Box>
                </Grid>

            </Grid>
            <Loader/>
        </Container>
    );
};

