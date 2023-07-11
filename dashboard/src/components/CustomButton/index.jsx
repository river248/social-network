import React from 'react'
import Button from '@mui/material/Button'
function CusTomButton({ children, color, background }) {
    return (
        <div style={{ color }}>
            <Button
                variant="contained"
                color="inherit"
                sx={{ width: 200, background, cursor: 'pointer' }}
                background="red"
            >
                {children}
            </Button>
        </div>
    )
}

export default CusTomButton
