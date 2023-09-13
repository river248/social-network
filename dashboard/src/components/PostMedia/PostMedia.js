import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { ContainerMoreImage, NumberImages, PostMediaItem } from '~/components/PostMedia/PostItem.style'
import ImageItems from '~/containers/ImageItems'

function PostMedia({ images, onOpen }) {
    return (
        <Fragment>
            <PostMediaItem onClick={onOpen}>
                <ImageItems images={images} />
                {images.length > 2 && (
                    <ContainerMoreImage justifyContent="center" alignItems="center">
                        <NumberImages justifyContent="center" alignItems="center">
                            {images.length - 2} +
                        </NumberImages>
                    </ContainerMoreImage>
                )}
            </PostMediaItem>
        </Fragment>
    )
}

PostMedia.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
        }),
    ),
    onOpen: PropTypes.func,
}

export default React.memo(PostMedia)
