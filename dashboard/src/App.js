import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { publicRoute } from './router'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoute.map((router) => {
                    let Layout = DefaultLayout
                    if (router.layout) {
                        Layout = router.layout
                    }
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
        </BrowserRouter>
    )
}

export default App
