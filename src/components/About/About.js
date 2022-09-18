import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import selfie from '../../assets/pics/IMG_5917.jpg'
import Avatar from '@mui/material/Avatar';



const About = () => {
    return (
        <>
         <Grid justifyContent= "center"container padding={2} spacing={2}>
            {/* <Grid item md={2}></Grid> */}
            {/* the above grid item prevents it from being centered */}
            <Grid itemxs={12} md={4}>
            <Avatar 
            alt="Matt Dunston" src={selfie} sx={{width: 1, height: 1}}>
            </Avatar>
            </Grid>
         </Grid>
        </>
    );
};

export default About;