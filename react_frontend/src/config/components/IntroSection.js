import React from 'react'
import { Grid, Box } from '@mui/material'
import AppButton from './AppButton'

function IntroSection({ storeName }) {
    return (
        <Box sx={{ m:'10% 20% 0 20%' }}>
            <Grid container columnSpacing={1}>
                <Grid item xs={12} md={6} >
                    <Box>
                        <p style={{ color: 'blue' }}>Welome to</p>
                        <h1>{storeName}</h1>
                        <p style={{ margin: '8px 0 10px 0' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi consequatur officiis dicta nam dolor ratione ducimus illum laboriosam aut, perspiciatis minus!</p>
                        <AppButton
                            name='shop now'
                            linkPath='/products' />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative', margin:'10%' }}>
                        <Box>
                            <img src="../../../images/intro-img.jpg" alt="Family shoppingimage" width='300px' height='200px' />
                        </Box>
                        <Box bgcolor='#42a5f5' width='200px' height='180px' sx={{ position: 'absolute', left: '160px', bottom: '46px', zIndex: -1 }}>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default IntroSection