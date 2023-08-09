import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const PostMedia = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 'auto',
    maxHeight: 450,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    background: '#101418',
    padding: theme.spacing(1),
}))

export { PostMedia }
