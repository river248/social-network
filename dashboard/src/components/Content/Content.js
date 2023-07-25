import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import { itemData } from '~/utils/constance'
import { boxStyle } from '~/components/Content/Content.style'
import ContentTop from '~/components/ContentTop'
import UserAction from '~/components/UserAction'

function Content({ item }) {
    return (
        <Stack sx={{ background: '#3a3b3c', padding: 2, borderRadius: 4 }} spacing={1}>
            <ContentTop title={item.title} time={item.time} />
            <Typography>{item?.content}</Typography>
            <Stack alignItems="center" sx={{ background: '#444654', padding: 1 }}>
                <Box sx={boxStyle}>
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
            <UserAction itemData={itemData} />
        </Stack>
    )
}

export default Content
