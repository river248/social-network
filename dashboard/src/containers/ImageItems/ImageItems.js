import React from 'react'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'
// this is test
function ImageItems({ images }) {
    if (images.length === 1)
        return (
            <Stack>
                <img src={images[0].img} style={{ width: '100%' }} />
            </Stack>
        )
    if (images.length >= 2)
        return (
            <Stack direction="row" justifyContent="center" sx={{ flexWrap: 'nowrap', overflow: 'hidden' }} spacing={1}>
                <img src={images[0].img} style={{ width: '50%', objectFit: 'contain' }} />
                <img src={images[1].img} style={{ width: '50%', objectFit: 'contain' }} />
            </Stack>
        )
    return null
}

ImageItems.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
        }),
    ),
}

export default React.memo(ImageItems)
