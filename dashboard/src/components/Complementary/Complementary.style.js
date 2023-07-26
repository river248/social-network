import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

const GridStyle = styled(Grid)(() => ({
    height: '100%',
    background: 'white',
    padding: 0.25,
    overflowX: 'auto',
    position: 'fixed',
    right: 0,
    width: '16%',
    top: 0,
}))

export { GridStyle }
