import React from 'react'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import ShareIcon from '@mui/icons-material/Share'

import { itemData } from '~/utils/constance'
import { convertTimestampToDate } from '~/utils/helper'

function Content({ item }) {
    return (
        <>
            <Stack sx={{ background: '#3a3b3c', padding: 2, borderRadius: 4 }} spacing={1}>
                <Stack direction="row" spacing={2}>
                    <Avatar
                        sx={{ height: 50, width: 50 }}
                        src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/68239676_1363206673842950_8039915213148913664_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0gCC8RWFAKMAX-0z5ox&_nc_ht=scontent-sin6-1.xx&oh=00_AfAa_EnPOdK88JXJUMk4V-XNfpmYP3VHgGeq0RM6MR0cvw&oe=64E5DD0D"
                    />
                    <Stack>
                        <Typography>{item?.title}</Typography>
                        <Typography>{convertTimestampToDate(item?.time)}</Typography>
                    </Stack>
                </Stack>
                <Typography>{item?.content}</Typography>
                <Stack alignItems="center" sx={{ background: '#444654', padding: 1 }}>
                    <Box
                        sx={{
                            width: 500,
                            height: 450,
                            overflowY: 'scroll',
                            '&::-webkit-scrollbar': {
                                display: 'none', // Ẩn thanh cuộn trên trình duyệt dựa trên WebKit (Chrome, Safari,...)
                            },
                            background: '#101418',
                            padding: 1,
                        }}
                    >
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Stack>
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
                    sx={{ borderTop: '1px solid white', borderBottom: '1px solid white' }}
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
            </Stack>
        </>
    )
}

export default Content
