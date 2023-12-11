import React, { useEffect, useMemo, useState } from 'react'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

import { fetchComments } from '~/apis'
import { BoxWrapprer } from '~/components/ModelShowItem/ModelShowItem.style'
import CommentItem from '~/components/CommentItem'
import CommentItemContainer from '~/containers/CommentItemContainer'
import { loadingComments } from '~/utils/constance'

function ModalCommentContainer({ onClose }) {
    const theme = useTheme()
    const [listComment, setListComment] = useState([])
    const [loading, setLoading] = useState(false)
    const page = useMemo(() => 1, [])
    const loadItems = useMemo(() => loadingComments(theme), [])

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
