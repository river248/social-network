import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

import {
    BoxWrapprer,
    BoxContainer,
    ModalKeyboardArrowLeftIcon,
    ModalKeyboardArrowRightIcon,
} from './ModelShowItem.style'

function ModelShowItem({ open, images, currentImage, onClose, onChangeImage }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <BoxWrapprer>
                <BoxContainer>
                    {images.length > 1 && <ModalKeyboardArrowLeftIcon onClick={() => onChangeImage('prev')} />}
                    <Box style={{ width: '85%', height: '95%', overflow: 'hidden' }}>
                        <img
                            src={images[currentImage].img}
                            alt={images[currentImage].title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                            loading="lazy"
                        />
                    </Box>
                    {images.length > 1 && <ModalKeyboardArrowRightIcon onClick={() => onChangeImage('next')} />}
                </BoxContainer>
            </BoxWrapprer>
        </Modal>
    )
}

ModelShowItem.propTypes = {
    open: PropTypes.bool,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
        }),
    ),
    currentImage: PropTypes.number,
    onClose: PropTypes.func,
    onChangeImage: PropTypes.func,
}

export default React.memo(ModelShowItem)
