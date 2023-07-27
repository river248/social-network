import React from 'react'
import Stack from '@mui/material/Stack'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import ShareIcon from '@mui/icons-material/Share'
import { Button as ButtonMui } from '@mui/material'
import { useTheme } from '@mui/material'

function UserAction() {
    const theme = useTheme()
    const Button = React.memo(({ children, ...passProps }) => {
        return <ButtonMui {...passProps}>{children}</ButtonMui>
    })
    const reactButton = [
        {
            icon: ThumbUpIcon,
            value: 1,
            id: 1,
        },
        {
            icon: FavoriteIcon,
            value: 12,
            id: 2,
        },
        {
            icon: SentimentVeryDissatisfiedIcon,
            value: 31,
            id: 3,
        },
    ]
    const communtionButton = [
        {
            icon: ChatBubbleIcon,
            value: 4,
            id: 1,
        },
        {
            icon: ShareIcon,
            value: 23,
            id: 2,
        },
    ]
    const actionButton = [
        {
            icon: ThumbUpIcon,
            value: 'Like',
            id: 1,
        },
        {
            icon: ChatBubbleIcon,
            value: 'Comment',
            id: 2,
        },
        {
            icon: ShareIcon,
            value: 'Share',
            id: 3,
        },
    ]
    const handleMap = (data) => {
        return (
            <Stack direction="row" spacing={1}>
                {data.map((item) => (
                    <Stack key={item.id} direction="row">
                        <Button color="inherit" startIcon={<item.icon />}>
                            {item.value}
                        </Button>
                    </Stack>
                ))}
            </Stack>
        )
    }

    const handleMapAction = (data) => {
        return data.map((item) => (
            <Stack key={item.id} direction="row">
                <Button color="inherit" startIcon={<item.icon />}>
                    {item.value}
                </Button>
            </Stack>
        ))
    }

    return (
        <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
                {handleMap(reactButton)}
                {handleMap(communtionButton)}
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
                {handleMapAction(actionButton)}
            </Stack>
        </Stack>
    )
}

export default React.memo(UserAction)
