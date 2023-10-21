import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const styleIcon = {
    height: 40,
    width: 40,
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
}

const BoxWrapprer = styled(Box)(({ theme }) => ({
    borderRadius: 16,
    width: 700,
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
    ...styleIcon,
    left: 0,
}))
const ModalKeyboardArrowRightIcon = styled(KeyboardArrowRightIcon)(() => ({
    ...styleIcon,
    right: 0,
}))
export { BoxWrapprer, BoxContainer, ModalKeyboardArrowLeftIcon, ModalKeyboardArrowRightIcon }
