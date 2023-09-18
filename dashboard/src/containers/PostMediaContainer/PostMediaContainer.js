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
                newImage = currentImage === 0 ? itemData.length - 1 : currentImage - 1
            } else {
                newImage = currentImage === itemData.length - 1 ? 0 : currentImage + 1
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
