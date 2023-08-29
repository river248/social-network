import React from 'react'

import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'

function ImageItems({ listImages }) {
    console.log('🚀 ~ file: ImageItems.js:4 ~ ImageItems ~ listImages:', listImages)
    const a = Math.floor(Math.random() * 11)
    const b = Math.floor(Math.random() * 11)
    if (listImages.length === 1)
        return (
            <Stack>
                <img src={listImages[a].img} style={{ width: '100%' }} />
            </Stack>
        )
    if (listImages.length)
        return (
            <Stack sx={{ maxHeight: '450px' }}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    sx={{ flexWrap: 'nowrap', overflow: 'hidden' }}
                    spacing={1}
                >
                    <img src={listImages[a].img} style={{ width: '100%' }} />
                    <img src={listImages[b].img} style={{ width: '100%' }} />
                </Stack>
            </Stack>
        )
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
