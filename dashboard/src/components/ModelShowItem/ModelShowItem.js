import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@mui/material/Modal'

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
                {images.map(
                    (item, index) =>
                        currentImage % images.length === index && (
                            <BoxContainer key={item.img}>
                                {images.length > 1 && (
                                    <ModalKeyboardArrowLeftIcon onClick={() => onChangeImage('prev')} />
                                )}
                                <div style={{ width: '85%', height: '95%', overflow: 'hidden' }}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                        }}
                                        loading="lazy"
                                    />
                                </div>
                                {images.length > 1 && (
                                    <ModalKeyboardArrowRightIcon onClick={() => onChangeImage('next')} />
                                )}
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
    onChangeImage: PropTypes.func,
}

export default React.memo(ModelShowItem)
