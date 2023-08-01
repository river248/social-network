import React from 'react'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

import ReactButtons from '~/components/ReactButtons'
function UserAction({ reacts, communtions, actions }) {
    const theme = useTheme()

    return (
        <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
                <ReactButtons items={reacts} />
                <ReactButtons items={communtions} />
            </Stack>
            <ReactButtons
                direction="row"
                justifyContent="space-around"
                spacing={1}
                sx={{
                    borderTop: `1px solid ${theme.palette.common.white}`,
                    borderBottom: `1px solid ${theme.palette.common.white}`,
                }}
                padding={1}
                items={actions}
            />
        </Stack>
    )
}

UserAction.propTypes = {
    reacts: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.elementType,
            value: PropTypes.number,
            id: PropTypes.number,
        }),
    ),
    communtions: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.elementType,
            value: PropTypes.number,
            id: PropTypes.number,
        }),
    ),
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.elementType,
            value: PropTypes.string,
            id: PropTypes.number,
        }),
    ),
}

export default React.memo(UserAction)
