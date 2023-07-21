import { styled } from '@mui/material/styles'

export const CustomStyles = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    height: '100vh',
    justifyContent: 'center',
}))
