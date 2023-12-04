import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CommentItem from '~/components/CommentItem'

function CommentItemContainer({ item }) {
    const [newItem, setNewItem] = useState({ ...item, isCutContent: false })
    const [showMore, setShowMore] = useState(true)

    const handleLengthContent = useCallback(() => {
        if (item?.content?.length >= 200) {
            setNewItem((pre) => ({
                ...pre,
                content: item.content.slice(0, 200),
                isCutContent: true,
            }))
        }
    }, [item])

    const handleShowMore = useCallback(
        (more) => {
            if (item) {
                if (more) {
                    setNewItem((pre) => ({
                        ...pre,
                        content: item.content,
                    }))
                    setShowMore(false)
                } else {
                    setNewItem((pre) => ({
                        ...pre,
                        content: item.content.slice(0, 200),
                    }))
                    setShowMore(true)
                }
            }
        },
        [item],
    )

    useEffect(() => {
        handleLengthContent()
    }, [handleLengthContent])

    return <CommentItem item={newItem} showMore={showMore} handleShowMore={handleShowMore} />
}

CommentItemContainer.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        content: PropTypes.string,
        time: PropTypes.number,
    }),
}

export default React.memo(CommentItemContainer)
