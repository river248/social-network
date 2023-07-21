import React from 'react'
import { Grid, Stack } from '@mui/material'

import { FriendComponent } from '..'
import { fakeDataListChat } from '../../utils/constance'

function Complementary() {
    return (
        <Grid
            sx={{
                height: 'calc(100% - 97px)',
                background: 'white',
                padding: '2px',
                overflowX: 'auto',
                position: 'fixed',
                right: '0',
                width: '16%',
                // border: '1px solid gray',
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
