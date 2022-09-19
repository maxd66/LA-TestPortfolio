import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import selfie from '../../assets/pics/IMG_5917.jpg'
import Avatar from '@mui/material/Avatar';



const About = () => {
    return (
        <>
         <Box minHeight= '85vh'>
         <Grid justifyContent= "center"container padding={2} spacing={2} fontSize={18}>
        {/* <Grid item md={2}></Grid> */}
             {/* the above grid item prevents it from being centered */}
             <Grid item xs={12} md={4}>
                <Avatar 
                    alt="Matt Dunston" src={selfie} sx={{width: 1, height: 1}}>
                </Avatar>
            </Grid>

            <Grid item md={1}></Grid>

            <Grid item xs={12} md={3}>
                <h1>Matt Dunston</h1>
                <p> Hi there, my name is Matt Dunston and I want to welcome you to my Portfolio! I am a college student   obsessed with Star Wars and the latest and greatest in technology and web development. I have an Associate’s degree in Business Administration and attended the University of California, Irvine, Coding Camp. I currently work as a Junior Technician for Insight Methods and hope to work in IT and Web Development in the future. In this Portfolio, you’ll find my updated resume, contact information, and all the coding projects I’ve worked on. Feel free to browse and peruse at your leisure! </p>
         </Grid>       
         </Grid>
         </Box>
        </>
    );
};

export default About;