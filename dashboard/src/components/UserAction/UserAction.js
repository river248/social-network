import React, { useState } from 'react'
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
    const [check, setCheck] = useState(1)
    const [check1, setCheck1] = useState(1)
    const [check2, setCheck2] = useState(1)
    const reactButton = [
        {
            icon: ThumbUpIcon,
            value: check,
            id: 1,
            onClick: setCheck,
        },
        {
            icon: FavoriteIcon,
            value: check1,
            id: 2,
            onClick: setCheck1,
        },
        {
            icon: SentimentVeryDissatisfiedIcon,
            value: check2,
            id: 3,
            onClick: setCheck2,
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
    const action1Button = [
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

    // const handleMap = (data) => {
    //     return (
    //         <Stack direction="row" spacing={1}>
    //             {data.map((item) => (
    //                 <Button
    //                     onClick={() => item.onClick((pre) => pre + 1)}
    //                     key={item.id}
    //                     color="inherit"
    //                     endIcon={<item.icon />}
    //                 >
    //                     {item.value}
    //                     {console.log('re-render1')}
    //                 </Button>
    //             ))}
    //         </Stack>
    //     )
    // }
    const handleMap1 = (data) => {
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
                <Stack direction="row" spacing={1}>
                    {reactButton.map((item) => (
                        <Button
                            onClick={() => item.onClick((pre) => pre + 1)}
                            key={item.id}
                            color="inherit"
                            endIcon={<item.icon />}
                        >
                            {item.value}
                            {console.log('re-render1')}
                        </Button>
                    ))}
                </Stack>
                <Stack direction="row" spacing={1}>
                    {communtionButton.map((item) => (
                        <Button
                            onClick={() => item.onClick((pre) => pre + 1)}
                            key={item.id}
                            color="inherit"
                            endIcon={<item.icon />}
                        >
                            {item.value}
                            {console.log('re-render1')}
                        </Button>
                    ))}
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
                {handleMap1(action1Button)}
            </Stack>
        </Stack>
    )
}

export default UserAction
