import { Routes, Route } from 'react-router-dom'

import { publicRoute } from './router'

function App() {
    return (
        <Routes>
            {publicRoute.map((router) => {
                const Layout = router.layout
                const Page = router.component
                return (
                    <Route
                        key={router.path}
                        path={router.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                )
            })}
        </Routes>
    )
}

export default App
