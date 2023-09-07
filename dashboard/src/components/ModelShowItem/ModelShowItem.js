import React from 'react'
import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal'

function ModelShowItem({ open, handleClose, listImages = [] }) {
    return (
        <Stack>
            <Modal open={open} onClose={handleClose}>
                <Stack>
                    {listImages.map((item) => (
                        <Stack key={item.img}>{item.title}</Stack>
                    ))}
                </Stack>
            </Modal>
        </Stack>
    )
}

ModelShowItem.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    listImages: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
        }),
    ),
}

export default React.memo(ModelShowItem)
