import React from 'react'
import Stack from '@mui/material/Stack'

import { fakeDataListChat } from '~/utils/constance'
import FriendComponent from '~/components/FriendComponent'
import { GridStyle } from '~/components/Complementary/Complementary.style'

function Complementary() {
    return (
        <GridStyle>
            <Stack spacing={2}>
                {fakeDataListChat.map((item) => (
                    <FriendComponent key={item.id} item={item} />
                ))}
            </Stack>
        </GridStyle>
    )
}

export default React.memo(Complementary)
