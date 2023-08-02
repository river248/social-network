import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { PropTypes } from 'prop-types'
function ReactButtons({ items, ...passProps }) {
    return (
        <Stack direction="row" spacing={1} {...passProps}>
            {items.map((item) => {
                const Icon = item.icon
                return (
                    <Button key={item.id} color="inherit" startIcon={<Icon />}>
                        {item.value}
                    </Button>
                )
            })}
        </Stack>
    )
}

ReactButtons.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.elementType,
            value: PropTypes.number,
            id: PropTypes.number,
        }),
    ),
}

export default React.memo(ReactButtons)
