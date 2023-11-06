import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { PropTypes } from 'prop-types'

function CommentItem({ item, itemLoading, loading }) {
    const theme = useTheme()
    if (loading) {
        return (
            <Skeleton
                variant="rounded"
                height={itemLoading.height}
                width={itemLoading.width}
                sx={{ background: theme.palette.secondary.gray }}
            />
        )
    }
    return <Box>{item.name}</Box>
}

CommentItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        content: PropTypes.string,
        time: PropTypes.number,
    }),
    loading: PropTypes.bool,
    itemLoading: PropTypes.shape({
        id: PropTypes.number,
        height: PropTypes.number,
        width: PropTypes.number,
    }),
}

export default React.memo(CommentItem)
