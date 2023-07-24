import React from 'react'
import Stack from '@mui/material/Stack'

import Content from '~/components/Content'

function InfiniteScroll({ data }) {
    // logic reload api
    return (
        <Stack width="55%" margin={2}>
            <Stack justifyContent="center" spacing={3}>
                {data.map((item) => (
                    <Content item={item} key={item.id} />
                ))}
            </Stack>
        </Stack>
    )
}

export default InfiniteScroll
