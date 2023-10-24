import React from 'react'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

import PropTypes from 'prop-types'

function ModalComment({ open, onClose }) {
    const theme = useTheme()

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ background: theme.palette.secondary.gray, opacity: 0.5 }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    )
}

ModalComment.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
}

export default React.memo(ModalComment)
