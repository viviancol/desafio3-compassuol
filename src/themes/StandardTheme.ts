import { createTheme } from "@mui/material/styles";

export const StandardTheme = createTheme({
    palette: {
      primary: {
        main: '#fba403',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#b3b3b3',
      },
      background: {
        default: '#242424',
        paper: '282828',
      },
    },
    // Você pode personalizar outras partes do tema aqui
  });