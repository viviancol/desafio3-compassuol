import React from 'react'
import { Button } from "@mui/material"

interface YellowButtonProps{
  children: React.ReactNode;
}

const YellowButton: React.FC <YellowButtonProps> = ({children}) => {
  return (
    <Button 
    sx={{
        bgcolor:'#FBA403 !important'
        
    }}
    variant="contained">{children}</Button>
  )
}

export default YellowButton