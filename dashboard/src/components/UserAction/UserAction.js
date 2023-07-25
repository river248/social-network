import React from 'react'
import Stack from '@mui/material/Stack'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import ShareIcon from '@mui/icons-material/Share'

function UserAction() {
    const border = '1px solid white'
    return (
        <>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
                <Stack direction="row" spacing={1}>
                    <ThumbUpIcon />1<FavoriteIcon />1<SentimentVeryDissatisfiedIcon />1
                </Stack>
                <Stack direction="row" spacing={1}>
                    <ChatBubbleIcon />
                    20
                    <ShareIcon />
                    12
                </Stack>
            </Stack>
            <Stack
                direction="row"
                justifyContent="space-around"
                spacing={1}
                sx={{ borderTop: border, borderBottom: border }}
                padding={1}
            >
                <Stack direction="row">
                    <ThumbUpIcon /> Like
                </Stack>
                <Stack direction="row">
                    <ChatBubbleIcon />
                    Comment
                </Stack>
                <Stack direction="row">
                    <ShareIcon />
                    Share
                </Stack>
            </Stack>
        </>
    )
}

export default UserAction
