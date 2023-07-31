import React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

import { StyledBadge } from './FriendComponent.style'
;``
function FriendComponent({ item }) {
    const theme = useTheme()

    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                <Avatar
                    alt={item.name}
                    src={item.avata}
                    sx={{ border: `0.125rem solid ${theme.palette.common.black}`, cursor: 'pointer' }}
                ></Avatar>
            </StyledBadge>
            <Typography sx={{ cursor: 'pointer', color: theme.palette.common.black }}>{item.name}</Typography>
        </Stack>
    )
}

FriendComponent.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avata: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
}

export default React.memo(FriendComponent)
