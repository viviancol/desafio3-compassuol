import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const PainelRide: React.FC = () => {
  return (
    <Stack>
        <Box> 
            <Box>
                <Typography 
                sx={{
                    fontSize:'26px'
                }} >WHY SHOULD YOU RIDE WITH US?</Typography>
                
                <Typography 
                sx={{
                    fontSize:'40px',
                }} >Best in class rides</Typography>
            </Box>
        </Box>
    </Stack>
  )
}

export default PainelRide