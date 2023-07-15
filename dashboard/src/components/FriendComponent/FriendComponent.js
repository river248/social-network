import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'

import StyledBadge from './StyledBadge.js'

function FriendComponent({ item }) {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                <Avatar alt={item.name} src={item.avata} sx={{ border: '1px solid black', cursor: 'pointer' }}></Avatar>
            </StyledBadge>
            <Typography sx={{ cursor: 'pointer' }}>{item.name}</Typography>
        </Stack>
    )
}

export default FriendComponent