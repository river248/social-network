import React, { Fragment, useCallback, useMemo, useState } from 'react'

import { itemData } from '~/utils/constance'
import ModelShowItem from '~/components/ModelShowItem'
import PostMedia from '~/components/PostMedia'

function PostMediaContainer() {
    const [open, setOpen] = useState(false)

    const memoizedItemData = useMemo(() => itemData || [], [])

    const handleOpen = useCallback(() => {
        setOpen(true)
    }, [])

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [])

    return (
        <Fragment>
            <PostMedia onOpen={handleOpen} images={memoizedItemData} />
            <ModelShowItem onClose={handleClose} open={open} images={memoizedItemData} />
        </Fragment>
    )
}

export default React.memo(PostMediaContainer)
