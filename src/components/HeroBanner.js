import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'
import { BorderBottom } from '@mui/icons-material';
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'128px', xs:'70px'}, ml:{sm:'50px'}  }} position="relative" p='20px' >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px" >
            Fitness Station
        </Typography>
        <Typography fontWeight={700} mt='30px' mb='23px' sx={{fontSize:{lg:'44px', xs:'40px' }} }  >
            Push Hard, <br /> Pull Harder !!
        </Typography>
        <Typography fontSize='22px' lineHeight="35px" mb={3} >
            Checkout Various Muscle group exercises!!
        </Typography>
        <Button variant='contained' color="error" href='#exercises' sx={{backgroundColor:'#FF2625', padding:'10px' }} >Explore Exercises</Button>
        <Typography
          fontWeight={600}
          color='#ff2625'
          fontSize='200px'
          sx={{opacity:0.1, display:{lg:'block', xs:'none'} }}
        >
          Exercise
        </Typography>
        <img src={HeroBannerImage} className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner
