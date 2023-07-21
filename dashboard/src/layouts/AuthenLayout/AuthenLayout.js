import React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function AuthenLayout({ children }) {
    return (
        <Grid
            container
            sx={{
                background:
                    'linear-gradient(to right, #a1ffce, #faffd1)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            }}
            alignItems="center"
        >
            <Grid
                item
                xs={6}
                style={{
                    textAlign: 'center',
                    background:
                        "url('https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg')",
                    backgroundSize: 'cover',
                    height: '100vh',
                }}
            >
                <Stack height="100vh" justifyContent="center" alignItems="center" spacing={3}>
                    <Typography color="#D0F742" variant="h1">
                        Well come to login page
                    </Typography>
                    <Button variant="contained" sx={{ background: '#F76942' }}>
                        Sign up
                    </Button>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                {children}
            </Grid>
        </Grid>
    )
}

export default AuthenLayout
