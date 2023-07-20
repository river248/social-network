import React from 'react'
import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    return (
        <Stack width="100%" height="89.79vh" fontSize={200} alignItems="center" justifyContent="center" spacing={2}>
            404 NotFound
            <Button variant="contained" onClick={() => navigate('/')}>
                Go Home
            </Button>
        </Stack>
    )
}

export default NotFound
