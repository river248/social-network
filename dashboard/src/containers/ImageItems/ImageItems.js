import React, { Fragment } from 'react'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'

function ImageItems({ listImages }) {
    if (listImages.length === 1)
        return (
            <Stack>
                <img src={listImages[0].img} style={{ width: '100%' }} />
            </Stack>
        )
    if (listImages.length >= 2)
        return (
            <Stack direction="row" justifyContent="center" sx={{ flexWrap: 'nowrap', overflow: 'hidden' }} spacing={1}>
                <img src={listImages[0].img} style={{ width: '100%' }} />
                <img src={listImages[1].img} style={{ width: '100%' }} />
            </Stack>
        )
    return <Fragment></Fragment>
}

ImageItems.propTypes = {
    listImages: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
        }),
    ),
}

export default React.memo(ImageItems)
