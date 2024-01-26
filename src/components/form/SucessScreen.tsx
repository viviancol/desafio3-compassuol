import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface SuccessScreenProps {
  onNewCarSubmit: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onNewCarSubmit }) => (
  <Box
    sx={{
      bgcolor: '#242424',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
    }}
  >
    <Typography sx={{ fontSize: '27px', color: '#FBA403', mb: '2rem' }}>
      Formulário Enviado com Sucesso!
    </Typography>

    <Button onClick={onNewCarSubmit} variant="contained" sx={{ width: '70%' }}>
      SUBMIT A NEW CAR
    </Button>
  </Box>
);

export default SuccessScreen;



