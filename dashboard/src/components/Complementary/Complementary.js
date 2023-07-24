import React from 'react'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'

import { fakeDataListChat } from '../../utils/constance.js'
import FriendComponent from '../FriendComponent'

function Complementary() {
    return (
        <Grid
            sx={{
                height: '100%',
                background: 'white',
                padding: 0.25,
                overflowX: 'auto',
                position: 'fixed',
                right: 0,
                width: '16%',
                top: 0,
            }}
        >
            <Stack spacing={2}>
                {fakeDataListChat.map((item) => (
                    <FriendComponent key={item.id} item={item} />
                ))}
            </Stack>
        </Grid>
    )
}

export default Complementary
