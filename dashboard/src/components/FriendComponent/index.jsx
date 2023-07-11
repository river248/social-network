import { Avatar, Badge, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))
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
