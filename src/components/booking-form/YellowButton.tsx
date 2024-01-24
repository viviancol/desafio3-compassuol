import React from 'react'
import { Button } from "@mui/material"

interface YellowButtonProps{
  children: React.ReactNode;
}

const YellowButton: React.FC <YellowButtonProps> = ({children}) => {
  return (
    <Button 
    sx={{
        width:'100%',
        bgcolor:'#FBA403'
        
    }}
    variant="contained">{children}</Button>
  )
}

export default YellowButton