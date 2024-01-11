import React, { useEffect, useMemo, useState } from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import Complementary from '~/components/Complementary'
import { fetchNewfeeds } from '~/apis'
import PostItem from '~/components/PostItem'
import { Helmet } from 'react-helmet'

function Home() {
    const arr = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9], [])
    const [newFeeds, setNewFeeds] = useState([])
    const [loading, setLoading] = useState(false)
    const page = 1

    useEffect(() => {
        const callAPI = async () => {
            setLoading(true)
            const res = await fetchNewfeeds()
            setNewFeeds(res ?? [])
            setLoading(false)
        }
        callAPI()
    }, [page])

    return (
        <Stack sx={{ background: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)' }}>
            <Helmet>
                <meta property="og:url" content="URL của bạn" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tiêu đề của bạn" />
                <meta property="og:description" content="Mô tả của bạn" />
                <meta
                    property="og:image"
                    content="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/68239676_1363206673842950_8039915213148913664_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=be3454&_nc_ohc=7UvlJTlV4-sAX_-V8B7&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDXjQFo_H8Ptu1DfYSyP583ubC8Z4kTZhKMTbIbhqaeCQ&oe=65C7154D"
                />
            </Helmet>
            <Grid item xs={10} sm={10} md={10} lg={10}>
                <Stack width="55%" margin={2}>
                    <Stack justifyContent="center" spacing={3}>
                        {!loading
                            ? newFeeds.map((item) => <PostItem item={item} key={item.id} />)
                            : arr.map((item) => <PostItem loading key={item} />)}
                    </Stack>
                </Stack>
            </Grid>
            <Complementary />
        </Stack>
    )
}

export default Home
