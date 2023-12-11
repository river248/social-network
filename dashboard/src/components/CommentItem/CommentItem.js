import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import { ButtonStyle, StackStyle } from './CommentItem.style'
import { PropTypes } from 'prop-types'

function CommentItem({ item, itemLoading, loading, showMore, handleShowMore }) {
    const theme = useTheme()
    if (loading) {
        return (
            <Stack direction="row" spacing={1}>
                <Skeleton variant="circular" height={40} width={40} sx={{ background: theme.palette.secondary.gray }} />
                <StackStyle spacing={1}>
                    <Skeleton
                        variant="rounded"
                        height={20}
                        width={itemLoading.width / 2}
                        sx={{ background: theme.palette.secondary.gray }}
                    ></Skeleton>
                    <Skeleton
                        variant="rounded"
                        height={itemLoading.height}
                        width={itemLoading.width}
                        sx={{ background: theme.palette.secondary.gray }}
                    ></Skeleton>
                </StackStyle>
            </Stack>
        )
    }
    return (
        <Stack direction="row" spacing={1}>
            <Avatar></Avatar>
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
        </Stack>
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
