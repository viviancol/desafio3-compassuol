import React from 'react'
import { createTheme } from "@mui/material";

export const StandardTheme = createTheme({
  palette: {
    primary: {
    main: '#fba403',
    contrastText: '#ffffff'
    },
  secondary: {
    main: '#b3b3b3',
    },
  text: {
    primary: '#ffffff',
    secondary: '#b3b3b3',
    disabled: '#b3b3b3'
    },
  background: {
    default: '#242424',
    paper: '#282828',
    },
  },
    
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff',
          },
          '& .MuiInputAdornment-root svg': {
            color: '#ffffff', // Cor das setas e 'X'que ficam no cantinho
        },
      },
    },
  },
},
});