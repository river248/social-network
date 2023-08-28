import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import App from './App'
import GlobalStyles from './components/GlobalStyles'
import theme from './configs/mui'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Router>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
                <ToastContainer
                    position={'top-right'}
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    style={{ width: '100%', maxWidth: '20rem', marginTop: '3.125rem' }}
                    closeButton={true}
                    toastStyle={{ fontSize: 15, fontFamily: 'Segoe UI' }}
                    theme="colored"
                    transition={Slide}
                    limit={3}
                    rtl={false}
                />
            </Router>
        </CssVarsProvider>
    </React.StrictMode>,
)
