import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const BoxWrapprer = styled(Box)(({ theme }) => ({
    borderRadius: 16,
    width: '70vw',
    height: '90vh',
    background: theme.palette.common.black,
    '&:focus': {
        outline: 'none',
        border: 'none',
    },
}))
const BoxContainer = styled(Box)(() => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
const ModalKeyboardArrowLeftIcon = styled(KeyboardArrowLeftIcon)(() => ({
    height: '10%',
    width: '10%',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
}))
const ModalKeyboardArrowRightIcon = styled(KeyboardArrowRightIcon)(() => ({
    height: '10%',
    width: '10%',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
}))
export { BoxWrapprer, BoxContainer, ModalKeyboardArrowLeftIcon, ModalKeyboardArrowRightIcon }
