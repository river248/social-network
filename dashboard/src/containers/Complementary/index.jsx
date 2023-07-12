import { Grid, Stack } from '@mui/material'
import React from 'react'
import { FriendComponent } from '../../components'
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
                width: '20%',
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
