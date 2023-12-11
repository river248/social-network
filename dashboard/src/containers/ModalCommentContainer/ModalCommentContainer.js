import React, { useEffect, useMemo, useState } from 'react'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

import { fetchComments } from '~/apis'
import { BoxWrapprer } from '~/components/ModelShowItem/ModelShowItem.style'
import CommentItem from '~/components/CommentItem'
import CommentItemContainer from '~/containers/CommentItemContainer'

function ModalCommentContainer({ onClose }) {
    const theme = useTheme()
    const [listComment, setListComment] = useState([])
    const [loading, setLoading] = useState(false)
    const page = useMemo(() => 1, [])
    const backGroudSketeton = useMemo(() => theme.palette.secondary.gray, [])
    const loadItems = useMemo(
        () => [
            {
                id: 1,
                height: 53,
                width: 200,
                widthName: 100,
            },
            {
                id: 2,
                height: 64,
                width: 530,
                widthName: 123,
            },
            {
                id: 3,
                height: 65,
                width: 320,
                widthName: 130,
            },
            {
                id: 4,
                height: 43,
                width: 300,
                widthName: 70,
            },
            {
                id: 5,
                height: 36,
                width: 436,
                widthName: 200,
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
                        {loading &&
                            loadItems.map((item) => (
                                <CommentItem
                                    loading
                                    key={item.id}
                                    itemLoading={item}
                                    backGroudSketeton={backGroudSketeton}
                                />
                            ))}
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
