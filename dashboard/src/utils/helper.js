import moment from 'moment/moment'

import { httpStatusCode } from './constance'

export const convertTimestampToDate = (data) => {
    if (!data) {
        return '-'
    } else {
        return moment(new Date(data).getTime()).format('YYYY-MM-DD HH:mm')
    }
}

export const resExceptionMessageHandler = (exception) => {
    if (exception.response) {
        switch (exception.response.status) {
            case httpStatusCode.FORBIDDEN:
            case httpStatusCode.UNAUTHORIZED:
                return exception.response.data?.error || `User is not authorized to perform this action`
            case httpStatusCode.NOT_FOUND:
                return exception.response.data?.error || `Not Found`
            case httpStatusCode.BAD_REQUEST:
                return exception.response.data?.error || `Bad Request or wrong params`
            case httpStatusCode.INTERNAL_SERVER:
                return exception.response.data?.error || `Error code: 500 without message`
            default:
                return 'Unhandled status code'
        }
    }
    return 'Unhandled exception'
}
