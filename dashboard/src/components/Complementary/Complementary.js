import React from 'react'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'

import { fakeDataListChat } from '../../utils/constance'
import FriendComponent from '../FriendComponent'

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
