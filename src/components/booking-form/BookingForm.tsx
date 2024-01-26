import { Box, Stack, TextField, Typography, InputAdornment, IconButton } from "@mui/material"
import React from "react"
import YellowButton from "./YellowButton.tsx"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"

const BookingForm: React.FC = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
  
    const clearPickup = () => {
      setPickup('');
    };
  
    const clearDestination = () => {
      setDestination('');
    };
  

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
                    }} >Book with
                    <span style={{color:"#FBA403"}} > <i>my</i></span>
                    <span style={{color:"#FBA403"}}>RIDE</span> now!</Typography>
                </Box>

                <Box sx={{bgcolor:'#2c2c2c', padding:'30px 33px'}} >
                    <Box>
                        <Typography 
                        style={{
                            fontSize:'24px',
                            color:'#ffff',
                            marginBottom:'20px',
                        }} >Find a ride now</Typography>
                        <Box>
                            <TextField
                            style={{
                                width:'100%',
                                marginBottom:'10px'
                            }} 
                            label='Your Pickup' 
                            placeholder="Current Location" 
                            variant='outlined' 
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      edge="end"
                                      onClick={clearPickup}
                                      size="large"
                                      aria-label="fechar input"
                                    >
                                      <CloseIcon />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            inputProps={{
                                style:{ color:'#FBA403'}
                            }}
                            />

                            <TextField 
                            style={{
                                width:'100%',
                                marginBottom:'10px' 
                            }} 
                            label='Your Destination' 
                            placeholder="Your Destination" 
                            variant='outlined' 
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      edge="end"
                                      onClick={clearDestination}
                                      size="large"
                                      aria-label="fechar input"
                                    >
                                      <CloseIcon />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            inputProps={{
                                style:{ color:'#FBA403'}
                            }}
                            />
                        </Box>

                        <YellowButton>FIND A DRIVE</YellowButton>
                    </Box>
                </Box>
            </Box>
    
        </Box>
    </Stack>
  )
}

export default BookingForm