import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@mui/material/Modal'

import {
    BoxWrapprer,
    BoxContainer,
    ModalKeyboardArrowLeftIcon,
    ModalKeyboardArrowRightIcon,
} from './ModelShowItem.style'

function ModelShowItem({ open, images, currentImage, onClose, onSetCurrentImage }) {
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
                {images.map(
                    (item, index) =>
                        currentImage === index && (
                            <BoxContainer key={item.img}>
                                <ModalKeyboardArrowLeftIcon onClick={() => onSetCurrentImage(-1)} />
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{ maxWidth: '85%', maxHeight: '95%', borderRadius: 16 }}
                                />
                                <ModalKeyboardArrowRightIcon onClick={() => onSetCurrentImage(+1)} />
                            </BoxContainer>
                        ),
                )}
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
    onSetCurrentImage: PropTypes.func,
}

export default React.memo(ModelShowItem)
