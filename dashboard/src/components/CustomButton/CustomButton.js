import React from 'react'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'

function CusTomButton({ children, color, background }) {
    return (
        <Stack style={{ color }}>
            <Button
                variant="contained"
                color="inherit"
                sx={{ width: 200, background, cursor: 'pointer' }}
                background="red"
            >
                {children}
            </Button>
        </Stack>
    )
}

export default CusTomButton
