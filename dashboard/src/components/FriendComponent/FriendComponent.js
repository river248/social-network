import React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

import { StyledBadge } from './FriendComponent.style'

function FriendComponent({ item }) {
    const theme = useTheme()
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                <Avatar
                    alt={item.name}
                    src={item.avata}
                    sx={{ border: `${1 / 8}rem solid black`, cursor: 'pointer' }}
                ></Avatar>
            </StyledBadge>
            <Typography sx={{ cursor: 'pointer', color: 'black' }}>{item.name}</Typography>
        </Stack>
    )
}

export default FriendComponent
