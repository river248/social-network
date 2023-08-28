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
        }, 2000)
    })
}
