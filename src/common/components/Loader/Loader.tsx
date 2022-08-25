import React from 'react';
import {Container, Grid} from "@mui/material";
import style from './Loader.module.css';

export const Loader = () => {
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
                >
                    <div className={style.ldsRipple}>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>

            </Grid>
        </Container>
    );
};

