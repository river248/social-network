import React, { Fragment, useCallback, useMemo, useState } from 'react'

import { itemData } from '~/utils/constance'
import ModelShowItem from '~/components/ModelShowItem'
import PostMedia from '~/components/PostMedia'

function PostMediaContainer() {
    const [open, setOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)
    const memoizedItemData = useMemo(() => itemData || [], [])

    const handleOpen = useCallback(() => {
        setOpen(true)
    }, [])

    const handleClose = useCallback(() => {
        setOpen(false)
        setCurrentImage(0)
    }, [])

    const handleChangeImage = useCallback(
        (number) => {
            let newImage
            if (number === -1) {
                if (currentImage === 0) {
                    newImage = itemData.length - 1
                } else {
                    newImage = currentImage - 1
                }
            } else {
                if (currentImage === itemData.length - 1) {
                    newImage = 0
                } else {
                    newImage = currentImage + 1
                }
            }
            setCurrentImage(newImage)
        },
        [currentImage],
    )

    return (
        <Fragment>
            <PostMedia onOpen={handleOpen} images={memoizedItemData} />
            <ModelShowItem
                onClose={handleClose}
                open={open}
                images={memoizedItemData}
                currentImage={currentImage}
                onSetCurrentImage={handleChangeImage}
            />
        </Fragment>
    )
}

export default React.memo(PostMediaContainer)
