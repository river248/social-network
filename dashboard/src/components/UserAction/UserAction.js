import React from 'react'
import Stack from '@mui/material/Stack'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import ShareIcon from '@mui/icons-material/Share'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material'

function UserAction() {
    const theme = useTheme()
    return (
        <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
                <Stack direction="row" spacing={1}>
                    <Button color="inherit" endIcon={<ThumbUpIcon />}>
                        1
                    </Button>
                    <Button color="inherit" endIcon={<FavoriteIcon />}>
                        1
                    </Button>
                    <Button color="inherit" endIcon={<SentimentVeryDissatisfiedIcon />}>
                        1
                    </Button>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Button color="inherit" endIcon={<ChatBubbleIcon />}>
                        12
                    </Button>
                    <Button color="inherit" endIcon={<ShareIcon />}>
                        13
                    </Button>
                </Stack>
            </Stack>
            <Stack
                direction="row"
                justifyContent="space-around"
                spacing={1}
                sx={{
                    borderTop: `1px solid ${theme.palette.common.white}`,
                    borderBottom: `1px solid ${theme.palette.common.white}`,
                }}
                padding={1}
            >
                <Stack direction="row">
                    <Button color="inherit" startIcon={<ThumbUpIcon />}>
                        Like
                    </Button>
                </Stack>
                <Stack direction="row">
                    <Button color="inherit" startIcon={<ChatBubbleIcon />}>
                        Comment
                    </Button>
                </Stack>
                <Stack direction="row">
                    <Button color="inherit" startIcon={<ShareIcon />}>
                        Share
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default UserAction
