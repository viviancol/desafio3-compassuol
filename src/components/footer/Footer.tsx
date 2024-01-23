import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Container 
        component="footer" 
        sx={{   
            bgcolor:'#242424', 
            color:'#fff', 
            padding:'40px 80px',
            width:'100%'                
        }} >
        <Box sx={{display:'flex', justifyContent:'start'}}>
            <Box marginRight='80px'>
                <img 
                src="../public/logo-white.png" 
                alt="Logo do site no rodapé" />
                <Typography 
                sx={{my:'16px'}} 
                variant='body2'>MyRide Inc., 2nd Floor, New York, NY 10016</Typography>
                <Box>
                    <img 
                    src="../public/Facebook.png" 
                    alt="icone facebook" />
                    <img 
                    src="../public/Instagram.png" 
                    alt="icone instagram" 
                    style={{marginLeft:'20px', marginRight:'20px'}} />
                    <img 
                    src="../public/Twitter.png" 
                    alt="icone twitter" />
                </Box>
            </Box>

            <Box gap='20px'>
                <Typography 
                marginBottom='20px'
                variant='h6'>Company</Typography>
                <p>About Us</p>
                <p>News</p>
                <p>Careers</p>
                <p>How we work</p>
            </Box>

            <Box marginRight='40px' marginLeft='40px'>
                <Typography 
                marginBottom='20px'
                variant='h6'>Support</Typography>
                <p>FAQ</p>
                <p>US Office</p>
                <p>Asia Office</p>
                <p>Help Center</p>
            </Box>

            <Box>
                <Typography 
                marginBottom='20px'
                variant='h6'>More</Typography>
                <p>Become a partner</p>
                <p>Partner Support</p>
                <p>Mobile app links</p>
            </Box>
        </Box>
    </Container>
  );
};

export default Footer