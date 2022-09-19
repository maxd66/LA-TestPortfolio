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
         <Grid justifyContent= "center"container padding={2} spacing={2}>
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
                <p> Welcome to my page, I know you won't regret checking me out. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, omnis exercitationem fuga quaerat quae eius quam numquam temporibus aliquid sapiente ipsum debitis consectetur doloribus odit, ipsam facere perferendis placeat laborum. </p>
         </Grid>       
         </Grid>
         </Box>
        </>
    );
};

export default About;