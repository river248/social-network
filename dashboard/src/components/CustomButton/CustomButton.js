import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useNavigate } from 'react-router-dom'

function CusTomButton({ children, color, background, to }) {
    const navigation = useNavigate()
    return (
        <Stack style={{ color }}>
            <Button
                variant="contained"
                color="inherit"
                sx={{ width: 200, background, cursor: 'pointer' }}
                background="red"
                onClick={() => navigation(to)}
            >
                {children}
            </Button>
        </Stack>
    )
}

export default CusTomButton
