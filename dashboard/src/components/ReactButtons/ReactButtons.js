import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

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

export default React.memo(ReactButtons)
