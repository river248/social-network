import AuthenLayout from '../layouts/AuthenLayout'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import Message from '../pages/Message'
import NotFound from '../pages/NotFound'

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
