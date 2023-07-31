import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

import GroupButton from '~/components/GroupButton'
import { actionButton, communtionButton, reactButton } from '~/utils/constance'
function UserAction() {
    const theme = useTheme()

    return (
        <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
                <GroupButton groupButton={reactButton} />
                <GroupButton groupButton={communtionButton} />
            </Stack>
            <Stack
                direction="row"
                justifyContent="space-around"
                spacing={1}
                sx={{
                    borderTop: `1px solid ${theme.palette.common.white}`,
                    borderBottom: `1px solid ${theme.palette.common.white}`,
                }}
                padding={1}
            >
                {actionButton.map((item) => (
                    <Stack key={item.id} direction="row">
                        <Button color="inherit" startIcon={<item.icon />}>
                            {item.value}
                        </Button>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

UserAction.propTypes = {
    groupButton: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.elementType,
            value: PropTypes.number,
            id: PropTypes.number,
        }),
    ),
}

export default React.memo(UserAction)
