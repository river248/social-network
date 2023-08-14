import React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import Complementary from '~/components/Complementary'
import InfiniteScroll from '~/containers/InfiniteContainer'
// import { dataArray } from '~/utils/constance'

function Home() {
    return (
        <Stack sx={{ background: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)' }}>
            <Grid item xs={10} sm={10} md={10} lg={10}>
                <InfiniteScroll />
            </Grid>
            <Complementary />
        </Stack>
    )
}

export default Home
