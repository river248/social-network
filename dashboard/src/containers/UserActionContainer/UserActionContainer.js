import React, { Fragment, useCallback, useMemo, useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import ShareIcon from '@mui/icons-material/Share'

import UserAction from '~/components/UserAction'
import ModalCommentContainer from '~/containers/ModalCommentContainer'
function UserActionContainer() {
    const [openComment, setOpenComment] = useState(false)
    const handleOpenComment = useCallback(() => {
        setOpenComment(true)
    }, [])
    const handleCloseComment = useCallback(() => {
        setOpenComment(false)
    }, [])
    const reactButtons = useMemo(
        () => [
            {
                icon: ThumbUpIcon,
                value: 1,
                id: 1,
            },
            {
                icon: FavoriteIcon,
                value: 12,
                id: 2,
            },
            {
                icon: SentimentVeryDissatisfiedIcon,
                value: 31,
                id: 3,
            },
        ],
        [],
    )
    const communtionButtons = useMemo(
        () => [
            {
                icon: ChatBubbleIcon,
                value: 4,
                id: 1,
            },
            {
                icon: ShareIcon,
                value: 23,
                id: 2,
            },
        ],
        [],
    )
    const actionButtons = useMemo(
        () => [
            {
                icon: ThumbUpIcon,
                value: 'Like',
                id: 1,
            },
            {
                icon: ChatBubbleIcon,
                value: 'Comment',
                id: 2,
                onClick: handleOpenComment,
            },
            {
                icon: ShareIcon,
                value: 'Share',
                id: 3,
            },
        ],
        [],
    )

    return (
        <Fragment>
            <UserAction reacts={reactButtons} communtions={communtionButtons} actions={actionButtons} />
            {openComment && <ModalCommentContainer onClose={handleCloseComment} />}
        </Fragment>
    )
}

export default React.memo(UserActionContainer)
