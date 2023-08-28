import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                secondary: { main: '#096386', light: '#00b7a8', dark: '#0c084c', gray: '#a5a5a5' },
            },
        },
    },
})

export default theme
