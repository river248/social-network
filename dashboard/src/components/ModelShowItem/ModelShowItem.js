import React from 'react'
import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal'

function ModelShowItem({ open, onClose, images }) {
    return (
        <Stack>
            <Modal open={open} onClose={onClose}>
                <Stack>
                    {images.map((item) => (
                        <Stack key={item.img}>{item.title}</Stack>
                    ))}
                </Stack>
            </Modal>
        </Stack>
    )
}

ModelShowItem.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
        }),
    ),
}

export default React.memo(ModelShowItem)
