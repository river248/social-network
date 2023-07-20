import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import { Box, Stack } from '@mui/material'

import { CustomButton } from '../../components/index'
import { MenuItemDefaultLayout } from '../../utils/constance'

function DefaultLayout({ children }) {
    console.log('render')
    return (
        <Stack>
            <Box>
                <AppBar
                    position="static"
                    sx={{ background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', padding: 1 }}
                >
                    <Toolbar>
                        <Grid container spacing={1}>
                            {MenuItemDefaultLayout.map((item) => (
                                <Grid key={item.id} item xs={12} sm={6} md={4} lg={2}>
                                    <CustomButton color="green" background="white" to={item.value}>
                                        {item.label}
                                    </CustomButton>
                                </Grid>
                            ))}
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <Grid container style={{ background: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)' }}>
                    {children}
                </Grid>
            </Box>
        </Stack>
    )
}

export default DefaultLayout
