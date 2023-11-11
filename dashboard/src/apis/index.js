import { toast } from 'react-toastify'

import { resExceptionMessageHandler } from '~/utils/helper'
import { mockData, mockDataComment } from '~/utils/mockData'

export const fetchNewfeeds = async () => {
    try {
        const res = await mockData()
        return res.data
    } catch (error) {
        toast.error(resExceptionMessageHandler(error))
    }
}

export const fetchComments = async () => {
    try {
        const res = await mockDataComment()
        return res.data
    } catch (error) {
        toast.error(resExceptionMessageHandler(error))
    }
}
