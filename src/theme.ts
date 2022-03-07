import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
        breakpoints: {
            values: {
                xs: 0,
                sm: 320,
                md: 768,
                lg: 1200,
                xl: 1536
        }
    }
})

export default theme