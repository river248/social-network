import React from 'react'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'

import { fakeDataListChat } from '~/utils/constance'
import FriendComponent from '~/components/FriendComponent'
import { gridStyle } from '~/components/Complementary/Complementary.style'

function Complementary() {
    return (
        <Grid sx={gridStyle}>
            <Stack spacing={2}>
                {fakeDataListChat.map((item) => (
                    <FriendComponent key={item.id} item={item} />
                ))}
            </Stack>
        </Grid>
    )
}

export default Complementary
