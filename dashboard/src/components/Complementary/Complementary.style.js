import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

const GridStyle = styled(Grid)(({ theme }) => ({
    height: '100%',
    background: theme.palette.common.white,
    padding: theme.spacing(0.25),
    overflowX: 'auto',
    position: 'fixed',
    right: 0,
    width: '16%',
    top: 0,
}))

export { GridStyle }
