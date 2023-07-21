import React, { Fragment } from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import Complementary from '../../components/Complementary'

function Home() {
    return (
        <Fragment>
            <Grid item xs={12} sm={10} md={10} lg={10}>
                <Stack>Home</Stack>
            </Grid>
            <Complementary />
        </Fragment>
    )
}

export default Home
