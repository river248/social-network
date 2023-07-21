import AuthenLayout from '../layouts/AuthenLayout'
import DefaultLayout from '../layouts/DefaultLayout'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import Message from '../pages/Message'
import NotFound from '../pages/NotFound'

const publicRoute = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/message',
        component: Message,
        layout: DefaultLayout,
    },
    {
        path: '/login',
        component: LoginPage,
        layout: AuthenLayout,
    },
    { path: '*', component: NotFound, layout: DefaultLayout },
]
const privateRoute = [] // sau nafy co be tinh tiep

export { publicRoute, privateRoute }
