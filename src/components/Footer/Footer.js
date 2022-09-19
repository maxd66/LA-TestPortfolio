import React from 'react'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'

const Footer = () => {
  return (
    <>
      <Grid className="footer" container justifyContent="center" padding={4} position={4} bottom={0}>
        
        <Grid item xs={12} md={3}  >
       <a href="https://github.com/MattYouKnowWho" target="_blank">
        <GitHubIcon>
        </GitHubIcon>
        </a>
        </Grid>
        <Grid item xs={12} md={3} >
       <a href="https://www.linkedin.com/in/mdunston4u/" target="_blank">
        <LinkedInIcon>
        </LinkedInIcon>
        </a>
        </Grid>
        
        <Grid item xs={12} md={3} >
       <a href="https://www.instagram.com/_mattyouknowwho_/" target="_blank">
        <InstagramIcon>
        </InstagramIcon>
        </a>
        </Grid>
      </Grid>

    </>
  )
}

export default Footer