import { AuthenLayout } from '../layouts'
import { LoginPage, Home, NotFound, Message } from '../pages'

const publicRoute = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/message',
        component: Message,
    },
    {
        path: '/login',
        component: LoginPage,
        layout: AuthenLayout,
    },
    { path: '*', component: NotFound },
]
const privateRoute = [] // sau nafy co be tinh tiep

export { publicRoute, privateRoute }
