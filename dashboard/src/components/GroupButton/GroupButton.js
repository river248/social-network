import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'

function GroupButton({ groupButton }) {
    return (
        <Stack direction="row" spacing={1}>
            {groupButton.map((item) => (
                <Stack key={item.id} direction="row">
                    <Button color="inherit" startIcon={<item.icon />}>
                        {item.value}
                    </Button>
                </Stack>
            ))}
        </Stack>
    )
}

GroupButton.propTypes = {
    groupButton: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.elementType,
            value: PropTypes.number,
            id: PropTypes.number,
        }),
    ),
}

export default React.memo(GroupButton)
