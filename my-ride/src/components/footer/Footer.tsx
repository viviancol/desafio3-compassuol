import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Container 
    component="footer" 
    sx={{  
        position:'fixed',
        mx:'full', 
        marginTop:'4rem', 
        bgcolor:'#242424', 
        color:'#fff', 
        padding:'40px 80px',
        width:'100%' 
        }} >
        <Box display="flex" justifyContent="start" flexWrap="wrap" >
            <Box>
                <img 
                src="../public/logo-white.png" 
                alt="Logo do site no rodapé" />
                <Typography 
                sx={{my:'16px'}} 
                variant='body2'>MyRide Inc., 2nd Floor, New York, NY 10016</Typography>
                
                <Box >
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

                <Box>

                </Box>

            </Box>
        </Box>
    </Container>
  )
}

export default Footer