import React from 'react'

import { itemData } from '~/utils/constance'
import { ContainerMoreImage, NumberImages, PostMedia } from '~/containers/PostMediaContainer/PostItem.style'
import ImageItems from '~/containers/ImageItems/ImageItems'

function PostMediaContainer() {
    return (
        <PostMedia>
            <ImageItems listImages={itemData} />
            {itemData.length > 2 && (
                <ContainerMoreImage justifyContent="center" alignItems="center">
                    <NumberImages justifyContent="center" alignItems="center">
                        {itemData.length - 2} +
                    </NumberImages>
                </ContainerMoreImage>
            )}
        </PostMedia>
    )
}

export default PostMediaContainer
