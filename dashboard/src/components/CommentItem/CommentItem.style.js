import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const StackStyle = styled(Stack)(({ theme }) => ({
    minHeight: 53,
    background: theme.palette.secondary.gray3,
    padding: theme.spacing(1.25),
    borderRadius: 10,
    width: 'fit-content',
    alignContent: 'center',
}))

const ButtonStyle = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.hightLight,
    width: 'fit-content',
    fontWeight: 400,
    padding: 0,
    justifyContent: 'flex-start',
    '&:hover': {
        background: 'none',
        fontWeight: 700,
        textDecoration: 'underline',
    },
}))

export { StackStyle, ButtonStyle }
