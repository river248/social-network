import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { ContainerMoreImage, NumberImages, PostMedia } from '~/components/PostMediaComponent/PostItem.style'
import ImageItems from '~/containers/ImageItems'

function PostMediaComponent({ handleOpen, listImages }) {
    return (
        <Fragment>
            <PostMedia onClick={handleOpen}>
                <ImageItems listImages={listImages} />
                {listImages.length > 2 && (
                    <ContainerMoreImage justifyContent="center" alignItems="center">
                        <NumberImages justifyContent="center" alignItems="center">
                            {listImages.length - 2} +
                        </NumberImages>
                    </ContainerMoreImage>
                )}
            </PostMedia>
        </Fragment>
    )
}

PostMediaComponent.propTypes = {
    listImages: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
        }),
    ),
    handleOpen: PropTypes.func,
}

export default React.memo(PostMediaComponent)
