import React, { Fragment, useCallback, useMemo, useState } from 'react'

import { itemData } from '~/utils/constance'
import ModelShowItem from '~/components/ModelShowItem'
import PostMediaComponent from '~/components/PostMediaComponent'

function PostMediaContainer() {
    const [open, setOpen] = useState(false)

    const memoizedItemData = useMemo(() => itemData, [])

    const handleOpen = useCallback(() => {
        setOpen(true)
    }, [])

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [])

    return (
        <Fragment>
            <PostMediaComponent handleOpen={handleOpen} listImages={memoizedItemData} />
            {open && <ModelShowItem handleClose={handleClose} open={open} listImages={memoizedItemData} />}
        </Fragment>
    )
}

export default React.memo(PostMediaContainer)
