import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    return (
        <Stack width="100%" height="89.79vh" alignItems="center" justifyContent="center" spacing={5}>
            <Typography textAlign="center" variant="h1">
                404 NotFound
            </Typography>
            <Button variant="contained" onClick={() => navigate('/')}>
                Go Home
            </Button>
        </Stack>
    )
}

export default NotFound
