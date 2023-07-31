import React from 'react'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'

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

InfiniteScroll.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            name: PropTypes.string,
            content: PropTypes.string,
            time: PropTypes.number,
        }),
    ),
}

export default React.memo(InfiniteScroll)
