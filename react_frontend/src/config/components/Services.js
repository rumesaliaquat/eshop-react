import React from 'react'
import { Grid, Box, styled } from '@mui/material'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

const CustomBox = styled(Box)({
  backgroundColor: '#eceff1',
  borderRadius: '12px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

function Services() {
  return (
    <Box sx={{ my: '7%', mx: '20%' }}>
      <Grid container spacing={3}>

        <Grid item sm={12} md={4}>
          <CustomBox height='170px'>
            <Box sx={{ borderRadius: '50%', bgcolor: 'white', width: '30px', height: '30px', textAlign: 'center', p: 1, mb: 2 }}>
              <LocalShippingOutlinedIcon color='primary' />
            </Box>
            <h4>Super Fast & Free Delivery</h4>
          </CustomBox>
        </Grid>

        <Grid item sm={12} md={4}>
          <Grid container display='flex' direction='column' justifyContent='space-between' height='100%' gap={3}>
            <Grid 
            item 
            display='flex' 
            justifyContent='space-evenly'
            alignItems='center'
            gap={1}
            sx={{bgcolor:'#eceff1', p: '15px', borderRadius: '12px'}}
            >
            <Box sx={{ borderRadius: '50%', bgcolor: 'white', width: '30px', height: '30px', textAlign: 'center', p: 1, mb: 1 }}><SecurityOutlinedIcon color='primary' /></Box>
            <h4>Non-contact Shipping</h4>
            </Grid>

            <Grid 
            item 
            display='flex' 
            justifyContent='space-evenly'
            alignItems='center'
            gap={1}
            sx={{bgcolor:'#eceff1', p: '15px', borderRadius: '12px'}}
            >
            <Box sx={{ borderRadius: '50%', bgcolor: 'white', width: '30px', height: '30px', textAlign: 'center', p: 1, mb: 1 }}><MoneyOutlinedIcon color='primary' /></Box>
            <h4>Money-back Guaranteed</h4>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} md={4}>
          <CustomBox height='170px'>
            <Box sx={{ borderRadius: '50%', bgcolor: 'white', width: '30px', height: '30px', textAlign: 'center', p: 1, mb: 2 }}><PaymentOutlinedIcon color='primary' /></Box>
            <h4>Super Secure Payment System</h4>
          </CustomBox>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default Services