import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const BoxStyle = styled(Box)(({ theme }) => ({
    width: 500,
    height: 450,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    background: '#101418',
    padding: theme.spacing(1),
}))

export { BoxStyle }
