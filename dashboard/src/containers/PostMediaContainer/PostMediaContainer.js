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
    const handeChangeImage = useCallback((data) => {
        switch (data) {
            case 'next':
                setCurrentImage((pre) => pre + 1)
                break
            case 'prev':
                setCurrentImage((pre) => pre - 1)
                break
            default:
                break
        }
    }, [])

    return (
        <Fragment>
            <PostMedia onOpen={handleOpen} images={memoizedItemData} />
            <ModelShowItem
                onClose={handleClose}
                open={open}
                images={memoizedItemData}
                currentImage={currentImage}
                onChangeImage={handeChangeImage}
            />
        </Fragment>
    )
}

export default React.memo(PostMediaContainer)
