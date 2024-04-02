import { createTheme } from '@mui/material'
import { yellow, cyan } from '@mui/material/colors';
// control + space abre as possibilidades
// função que vem do material ui
export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff'
        },
        secondary: {
            main: cyan[700],
            dark: cyan[800],
            light: cyan[500],
            contrastText: '#ffffff' /* branco */
        },
        background: {
            default: '#202124',
            paper: '#303134'
        }
    }
});