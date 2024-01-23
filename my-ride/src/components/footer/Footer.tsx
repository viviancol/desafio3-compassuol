import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Container
      component="footer"
      sx={{
        position: "fixed",
        mx: "full",
        marginTop: "4rem",
        bgcolor: "#242424",
        color: "#fff",
        padding: "40px 80px",
      }}
    >
      <Box display="flex" justifyContent="start" flexWrap="wrap">
        <Box>
          <img
            src="../public/logo-white.png"
            alt="Logo do site no rodapé"
            style={{ width: "100", marginBottom: "8px" }}
          />
          <Typography variant="body2">
            MyRide Inc., 2nd Floor, New York, NY 10016
          </Typography>
          <Box>
          
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer