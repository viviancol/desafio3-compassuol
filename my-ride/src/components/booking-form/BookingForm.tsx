import { Box, Container } from "@mui/material"
import React from "react"

const BookingForm: React.FC = () => {
  return (
    <Container component="footer">
        <Box>
            <Box>
                <img src="../public/bookingFor-image.png" 
                alt="Imagem formulário de inscrição" />
            </Box>
        </Box>
    </Container>
  )
}

export default BookingForm