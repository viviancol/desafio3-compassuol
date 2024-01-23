import { Box, Stack, TextField, Typography } from "@mui/material"
import React from "react"

const BookingForm: React.FC = () => {
  return (
    <Stack sx= {{marginTop:'64px', bgcolor:'#242424'}} >
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', my:'74px', mx:'89px'}}>
            <Box sx={{width:'50%'}} >
                <img style={{
                    width:'100%',
                }}
                src="../public/bookingFor-image.png" 
                alt="Imagem formulário de inscrição" />
            </Box>

            <Box sx={{width:'50%', ml:'42px', color:'#fff'}}>
                <Box>
                    <Typography 
                    sx={{
                        fontSize:'26px'
                    }} >NEED A RIDE?</Typography>
                    <Typography 
                    sx={{
                        fontSize:'40px',
                    }} >Book with <span style={{color:"#FBA403"}}>myRIDE</span> now!</Typography>
                </Box>

                <Box sx={{bgcolor:'#2c2c2c', padding:'30px 33px'}} >
                    <Box>
                        <Typography 
                        sx={{
                            fontSize:'24px'
                        }} >Find a ride now</Typography>

                        <TextField 
                        sx={{
                            width:'100%',
                            textColor:'#FBA403' }} 
                        label='Your Pickup' variant='outlined' />

                        <TextField 
                        sx={{
                            width:'100%',
                            textColor:'#FBA403' }} 
                        label='Your Destination' variant='outlined' />


                    </Box>
                </Box>
            </Box>
    
        </Box>
    </Stack>
  )
}

export default BookingForm