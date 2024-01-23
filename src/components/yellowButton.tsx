import React from 'react'
import { Button } from "@mui/material"

const button: React.FC = () => {
  return (
    <Button 
    sx={{
        width:'100%',
        bgcolor:'#FBA403 !important'
        
    }}
    variant="contained">FIND A DRIVE</Button>
  )
}

export default button