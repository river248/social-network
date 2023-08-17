import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Skeleton from '@mui/material/Skeleton'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'

import { itemData } from '~/utils/constance'
import { PostMedia } from '~/components/PostItem/PostItem.style'
import PostContent from '~/components/PostContent'
import UserActionContainer from '~/containers/UserActionContainer'
import UserAction from '~/components/UserAction/UserAction'

function PostItem({ item, loading }) {
    const theme = useTheme()

    if (loading) {
        return (
            <Stack sx={{ background: '#3a3b3c', padding: 2, borderRadius: 4 }} spacing={2}>
                <PostContent loading />
                <Skeleton
                    variant="text"
                    sx={{ fontSize: '2rem', width: '50%', background: `${theme.palette.secondary.gray}` }}
                />
                <Stack alignItems="center" sx={{ background: '#444654', padding: 2 }}>
                    <Skeleton
                        variant="rectangular"
                        sx={{ width: '100%', paddingTop: '45%', background: `${theme.palette.secondary.gray}` }}
                    />
                </Stack>
                <UserAction loading />
            </Stack>
        )
    }

    return (
        <Stack sx={{ background: '#3a3b3c', padding: 2, borderRadius: 4 }} spacing={1}>
            <PostContent title={item.title} time={item.time} />
            <Typography>{item.content}</Typography>
            <Stack alignItems="center" sx={{ background: '#444654', padding: 1 }}>
                <PostMedia>
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
                </PostMedia>
            </Stack>
            <UserActionContainer />
        </Stack>
    )
}

PostItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        name: PropTypes.string,
        content: PropTypes.string,
        time: PropTypes.number,
    }),
    loading: PropTypes.bool,
}

export default React.memo(PostItem)
