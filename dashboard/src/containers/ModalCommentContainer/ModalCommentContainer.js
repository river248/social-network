import React, { useEffect, useMemo, useState } from 'react'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'

import { fetchComments } from '~/apis'
import { BoxWrapprer } from '~/components/ModelShowItem/ModelShowItem.style'
import CommentItem from '~/components/CommentItem'
import CommentItemContainer from '~/containers/CommentItemContainer'

function ModalCommentContainer({ onClose }) {
    const [listComment, setListComment] = useState([])
    const [loading, setLoading] = useState(false)
    const page = 1
    const loadItems = useMemo(
        () => [
            {
                id: 1,
                height: 53,
                width: 200,
            },
            {
                id: 2,
                height: 64,
                width: 230,
            },
            {
                id: 3,
                height: 32,
                width: 120,
            },
            {
                id: 4,
                height: 42,
                width: 300,
            },
        ],
        [],
    )

    useEffect(() => {
        const callAPI = async () => {
            setLoading(true)
            const res = await fetchComments()
            setListComment(res ?? [])
            setLoading(false)
        }
        callAPI()
    }, [page])

    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <BoxWrapprer
                sx={{
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                {
                    <Stack spacing={2} padding={2}>
                        {listComment.map((item) => (
                            <CommentItemContainer key={item.id} item={item} />
                        ))}
                        {loading && loadItems.map((item) => <CommentItem loading key={item.id} itemLoading={item} />)}
                    </Stack>
                }
            </BoxWrapprer>
        </Modal>
    )
}

ModalCommentContainer.propTypes = {
    onClose: PropTypes.func,
}

export default React.memo(ModalCommentContainer)
