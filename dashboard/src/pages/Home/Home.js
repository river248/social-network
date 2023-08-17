import React, { useEffect, useMemo, useState } from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import Complementary from '~/components/Complementary'
import { fetchNewfeeds } from '~/apis'
import PostItem from '~/components/PostItem'

function Home() {
    const arr = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9], [])
    const [newFeeds, setNewFeeds] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, _setPage] = useState(1)

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
