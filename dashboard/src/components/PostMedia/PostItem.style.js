import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const PostMediaItem = styled(Box)(() => ({
    width: '100%',
    height: 'auto',
    overflowY: 'hidden',
    boxSizing: 'border-box',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    position: 'relative',
    maxHeight: 520,
    cursor: 'pointer',
}))
const ContainerMoreImage = styled(Stack)(({ theme }) => ({
    height: '100%',
    width: '50%',
    position: 'absolute',
    top: 0,
    right: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
}))
const NumberImages = styled(Stack)(({ theme }) => ({
    height: 50,
    width: 50,
    borderRadius: 50,
    background: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 20,
    fontWeight: 700,
}))
export { PostMediaItem, ContainerMoreImage, NumberImages }
