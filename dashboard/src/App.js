import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import { publicRoutes } from './routes'

function App() {
    return (
        <Routes>
            {publicRoutes.map((route) => {
                const Page = route.component

                let Layout = Fragment

                if (route.layout) {
                    Layout = route.layout
                }

                return (
                    <Route
                        key={route.path}
                        path={route.path}
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

export default React.memo(App)
