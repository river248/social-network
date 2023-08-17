import { toast } from 'react-toastify'

import { resExceptionMessageHandler } from '~/utils/helper'
import { mockData } from '~/utils/mockData'

export const fetchNewfeeds = async () => {
    try {
        const res = await mockData()
        return res.data
    } catch (error) {
        toast.error(resExceptionMessageHandler(error))
    }
}
