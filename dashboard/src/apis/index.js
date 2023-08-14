import { toast } from 'react-toastify'

import { resExceptionMessageHandler } from '~/utils/helper'
import { mockData } from '~/utils/mockData'

export const fetchNewfeeds = async () => {
    try {
        const res = await mockData()
        return res.data
    } catch (error) {
        console.log('🚀 ~ file: index.js:11 ~ fetchNewfeeds ~ error:', error)
        toast.error(resExceptionMessageHandler(error))
    }
}
