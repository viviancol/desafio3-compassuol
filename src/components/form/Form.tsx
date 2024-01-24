import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


const Form: React.FC = () => {
  return (
    <Stack>
      <Box>
        <img
          src="../public/Popup image.png"
          alt="Imagem formulario registro de carro"
        />

        <Box>
          <Typography
            sx={{
              fontSize: "27px",
              color: "#FBA403",
            }} >
            Drive with MyRide
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#FFF",
            }} >
            Register as a driver using the form below. Our team will assess 
            and get back to you within 48 hours.
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default Form