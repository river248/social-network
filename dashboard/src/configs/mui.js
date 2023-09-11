import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                secondary: {
                    main: '#096386',
                    light: '#00b7a8',
                    dark: '#0c084c',
                    gray: '#a5a5a5',
                    gray2: '#3a3b3c',
                    gray3: '#444654',
                    green1: '#44b700',
                },
            },
        },
    },
})

export default theme
