import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ButtonStyle, StackStyle } from './CommentItem.style'
import { PropTypes } from 'prop-types'

function CommentItem({ item, itemLoading, loading, showMore, handleShowMore }) {
    if (loading) {
        return (
            <Stack direction="row" spacing={1}>
                <Skeleton variant="circular" height={40} width={40} sx={{ background: itemLoading.background }} />
                <StackStyle spacing={1}>
                    <Skeleton
                        variant="rounded"
                        height={20}
                        width={itemLoading.widthName}
                        sx={{ background: itemLoading.background }}
                    />
                    <Skeleton
                        variant="rounded"
                        height={itemLoading.height}
                        width={itemLoading.width}
                        sx={{ background: itemLoading.background }}
                    />
                </StackStyle>
            </Stack>
        )
    }
    return (
        <Stack direction="row" spacing={1}>
            <Avatar />
            <StackStyle>
                <Typography component="div" sx={{ fontWeight: 700 }}>
                    {item.name}
                </Typography>
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
        widthName: PropTypes.number,
        background: PropTypes.string,
    }),
    showMore: PropTypes.bool,
    handleShowMore: PropTypes.func,
}

export default React.memo(CommentItem)
