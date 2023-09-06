import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'

import PostContent from '~/components/PostContent'
import UserAction from '~/components/UserAction'
import UserActionContainer from '~/containers/UserActionContainer'
import PostMediaContainer from '~/containers/PostMediaContainer'

function PostItem({ item, loading }) {
    const theme = useTheme()

    if (loading) {
        return (
            <Stack sx={{ background: '#3a3b3c', padding: 2, borderRadius: 4 }} spacing={2}>
                <PostContent loading />
                <Skeleton
                    variant="text"
                    sx={{ fontSize: '2rem', width: '50%', background: theme.palette.secondary.gray }}
                />
                <Stack alignItems="center" sx={{ background: '#444654', padding: 2 }}>
                    <Skeleton
                        variant="rounded"
                        sx={{ width: '100%', paddingTop: '45%', background: theme.palette.secondary.gray }}
                    />
                </Stack>
                <UserAction loading />
            </Stack>
        )
    }

    return (
        <Stack sx={{ background: '#3a3b3c', padding: 2, borderRadius: 4 }} spacing={1}>
            <PostContent title={item.title} time={item.time} />
            <Typography>{item.content}</Typography>
            <Stack alignItems="center" sx={{ background: '#000000', padding: 1 }}>
                <PostMediaContainer />
            </Stack>
            <UserActionContainer />
        </Stack>
    )
}

PostItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        name: PropTypes.string,
        content: PropTypes.string,
        time: PropTypes.number,
    }),
    loading: PropTypes.bool,
}

export default React.memo(PostItem)
