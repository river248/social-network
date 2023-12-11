// import { reject } from 'lodash'

export const dataArray = [
    {
        id: 1,
        title: 'Title 1',
        name: 'Name 1',
        content: 'Content 1',
        time: 1690168342041,
    },
    {
        id: 2,
        title: 'Title 2',
        name: 'Name 2',
        content: 'Content 2',
        time: 1690238344041,
    },
    {
        id: 3,
        title: 'Title 3',
        name: 'Name 3',
        content: 'Content 3',
        time: 1690268342041,
    },
    {
        id: 4,
        title: 'Title 4',
        name: 'Name 4',
        content: 'Content 4',
        time: 1690568342041,
    },
    {
        id: 5,
        title: 'Title 5',
        name: 'Name 5',
        content: 'Content 5',
        time: 1690168342041,
    },
    {
        id: 6,
        title: 'Title 6',
        name: 'Name 6',
        content: 'Content 6',
        time: 1690161242041,
    },
    {
        id: 7,
        title: 'Title 7',
        name: 'Name 7',
        content: 'Content 7',
        time: 1690168342121,
    },
    {
        id: 8,
        title: 'Title 8',
        name: 'Name 8',
        content: 'Content 8',
        time: 1690168345441,
    },
    {
        id: 9,
        title: 'Title 9',
        name: 'Name 9',
        content: 'Content 9',
        time: 1690161942041,
    },
    {
        id: 10,
        title: 'Title 10',
        name: 'Name 10',
        content: 'Content 10',
        time: 1690162042041,
    },
]

export const dataArrayComment = [
    {
        id: 1,
        name: 'User 1',
        content:
            'Comment content 1qwsd 12e wdsa 126 tvyeghwdbsa 1 2eygqwudaj 126ve tgqywhd162 7vtyeqwgh12 et6qwgdvasb 126 vtegdwuyahsbj 1v2  etqdwgyahsb 12e t6dw7qygaushcbj 1276wdgsay uhzbj1 12et67wgqdyaushjzxb 12e67qfwtydg ahvs 1267e qưtyfgdashv',
        time: 1690112342041,
    },
    {
        id: 2,
        name: 'User 2',
        content: 'Comment content 2',
        time: 1699218344041,
    },
    {
        id: 3,
        name: 'User 3',
        content: 'Comment content 3',
        time: 1690268303141,
    },
    {
        id: 4,
        name: 'User 4',
        content: 'Comment content 4',
        time: 1690568392041,
    },
    {
        id: 5,
        name: 'User 5',
        content:
            '[webpack-dev-server] "D:iesocial-networkdashboard\build\report.json" from static directory was changed. Reloading...https://mui.com/material-ui/react-button/ https://mui.com/material-ui/react-select/https://mui.com/material-ui/react-select/',
        time: 1690199942041,
    },
    {
        id: 6,
        name: 'User 6',
        content: 'Comment content 6',
        time: 1690161000041,
    },
    {
        id: 7,
        name: 'User 7',
        content: 'Comment content 7',
        time: 1690168349991,
    },
    {
        id: 8,
        name: 'User 8',
        content: 'Comment content 8',
        time: 1690168300041,
    },
    {
        id: 9,
        name: 'User 9',
        content: 'Comment content 9',
        time: 1690199942041,
    },
    {
        id: 10,
        name: 'NUser 10',
        content: 'CComment content10',
        time: 1691232042041,
    },
]
export const mockData = async () => {
    return new Promise((resolve, _) => {
        const wait = setTimeout(() => {
            clearTimeout(wait)
            resolve({
                data: dataArray,
                // response: {
                //     status: 500,
                //     data: {
                //         error: 'Wrong data',
                //     },
                // },
            })
        }, 1)
    })
}

export const mockDataComment = async () => {
    return new Promise((resolve, _) => {
        const wait = setTimeout(() => {
            clearTimeout(wait)
            resolve({
                data: dataArrayComment,
                // response: {
                //     status: 500,
                //     data: {
                //         error: 'Wrong data',
                //     },
                // },
            })
        }, 1000)
    })
}
