import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'
import { useTheme } from '@mui/material/styles'
import { PropTypes } from 'prop-types'

function ReactButtons({ items, skeletonItems, loading, ...passProps }) {
    const theme = useTheme()

    if (loading)
        return (
            <Stack direction="row" spacing={2} {...passProps}>
                {skeletonItems.map((item) => (
                    <Skeleton
                        key={item}
                        variant="rounded"
                        sx={{ width: 60, height: 20, background: theme.palette.secondary.gray }}
                    />
                ))}
            </Stack>
        )
    return (
        <Stack direction="row" spacing={1} {...passProps}>
            {items.map((item) => {
                const { value, id, key, icon: Icon, ...passPropsItem } = item
                return (
                    <Button key={id} color="inherit" startIcon={<Icon />} {...passPropsItem}>
                        {value}
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
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            id: PropTypes.number,
            onClick: PropTypes.func,
        }),
    ),
    skeletonItems: PropTypes.arrayOf(PropTypes.number),
    loading: PropTypes.bool,
}

export default React.memo(ReactButtons)
