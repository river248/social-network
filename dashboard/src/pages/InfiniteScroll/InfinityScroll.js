import React, { useEffect, useMemo, useState } from 'react'
import Stack from '@mui/material/Stack'

// import Infinite from '~/components/InfiniteScroll'
import PostItem from '~/components/PostItem'
import { fetchNewfeeds } from '~/apis'

function InfiniteScroll() {
    const arr = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9], [])
    const [state, setState] = useState([])
    const [stateLoading, setStateLoading] = useState()

    useEffect(() => {
        const callAPI = async () => {
            setStateLoading(true)
            const res = await fetchNewfeeds()
            setState(res ?? [])
            setStateLoading(false)
        }
        callAPI()
    }, [])

    const dataToRender = state.length === 0 ? arr : state

    return (
        // <Infinite data={stateLoading ? arr : state} loading={stateLoading} />

        <Stack width="55%" margin={2}>
            <Stack justifyContent="center" spacing={3}>
                {dataToRender.map((item) => (
                    <PostItem loading={stateLoading} item={item} key={item.id} />
                ))}
            </Stack>
        </Stack>
    )
}

export default React.memo(InfiniteScroll)
