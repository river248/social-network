import React, { useMemo } from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'

import { convertTimestampToDate } from '~/utils/helper'

function PostContent({ title, time }) {
    const date = useMemo(() => convertTimestampToDate(time), [time])

    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                sx={{ height: 50, width: 50 }}
                src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/68239676_1363206673842950_8039915213148913664_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0gCC8RWFAKMAX-0z5ox&_nc_ht=scontent-sin6-1.xx&oh=00_AfAa_EnPOdK88JXJUMk4V-XNfpmYP3VHgGeq0RM6MR0cvw&oe=64E5DD0D"
            />
            <Stack>
                <Typography>{title}</Typography>
                <Typography>{date}</Typography>
            </Stack>
        </Stack>
    )
}

PostContent.propTypes = {
    title: PropTypes.string,
    time: PropTypes.number,
}

export default React.memo(PostContent)
