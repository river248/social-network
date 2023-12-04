import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { PropTypes } from 'prop-types'
import { ButtonStyle, StackStyle } from './CommentItem.style'

function CommentItem({ item, itemLoading, loading, showMore, handleShowMore }) {
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
    return (
        <StackStyle>
            <Box sx={{ fontWeight: 700 }}>{item.name}</Box>
            <Box>
                {item.content}{' '}
                {item.isCutContent &&
                    (showMore ? (
                        <ButtonStyle onClick={() => handleShowMore(true)}>...See More </ButtonStyle>
                    ) : (
                        <ButtonStyle onClick={() => handleShowMore(false)}>Hidden</ButtonStyle>
                    ))}
            </Box>
        </StackStyle>
    )
}

CommentItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        content: PropTypes.string,
        time: PropTypes.number,
        isCutContent: PropTypes.bool,
    }),
    loading: PropTypes.bool,
    itemLoading: PropTypes.shape({
        id: PropTypes.number,
        height: PropTypes.number,
        width: PropTypes.number,
    }),
    showMore: PropTypes.bool,
    handleShowMore: PropTypes.func,
}

export default React.memo(CommentItem)
