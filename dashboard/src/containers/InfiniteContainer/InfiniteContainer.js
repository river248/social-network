import React, { useEffect, useMemo, useState } from 'react'

import InfiniteScroll from '~/components/InfiniteScroll'
import { fetchNewfeeds } from '~/apis'
function InfiniteContainer() {
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
    console.log(state)

    return <InfiniteScroll data={stateLoading ? arr : state} loading={stateLoading} />
}

export default InfiniteContainer
