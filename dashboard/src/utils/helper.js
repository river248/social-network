import moment from 'moment/moment'

export const convertTimestampToDate = (data) => {
    if (!data) return '-'
    return moment(new Date(data).getTime()).format('YYYY-MM-DD HH:mm')
}
