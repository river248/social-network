import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const PostMedia = styled(Box)(({}) => ({
    width: '100%',
    height: 'auto',
    maxHeight: '450px',
    overflowY: 'hidden',
    boxSizing: 'border-box',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
}))

export { PostMedia }
